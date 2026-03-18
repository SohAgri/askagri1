const headerOffset = () => {
  const nav = document.querySelector('nav');
  const quickNav = document.querySelector('.quick-nav-wrap');
  return (nav?.offsetHeight || 0) + (quickNav?.offsetHeight || 0) + 18;
};

const scrollToTarget = target => {
  if (!target) return;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset();
  window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
  target.classList.add('anchor-focus');
  window.setTimeout(() => target.classList.remove('anchor-focus'), 1600);
};

const smoothScrollLinks = Array.from(document.querySelectorAll('a.quick-scroll[href^="#"], .quick-nav a[href^="#"], .note-link[href^="#"]'));
const quickNavLinks = Array.from(document.querySelectorAll('.quick-nav a'));
const observedSections = Array.from(new Set(
  quickNavLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)
));

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    history.replaceState(null, '', href);
    scrollToTarget(target);
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      quickNavLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === id);
      });
    });
  },
  {
    threshold: 0.35,
    rootMargin: '-140px 0px -45% 0px'
  }
);

observedSections.forEach(section => observer.observe(section));

const promptInput = document.getElementById('livestockPrompt');
document.querySelectorAll('.prompt-chips button').forEach(button => {
  button.addEventListener('click', () => {
    if (!promptInput) return;
    promptInput.value = button.textContent.trim();
    promptInput.focus();
  });
});

const aiForm = document.querySelector('.ai-prompt-form');
if (aiForm && promptInput) {
  aiForm.addEventListener('submit', event => {
    event.preventDefault();
    const prompt = promptInput.value.trim();
    if (prompt) {
      localStorage.setItem('askkrishi_ai_prompt', prompt);
    } else {
      localStorage.removeItem('askkrishi_ai_prompt');
    }
    window.location.href = 'index.html#ai-chat';
  });
}

if (window.location.hash) {
  const hashTarget = document.querySelector(window.location.hash);
  if (hashTarget) {
    window.addEventListener('load', () => {
      window.setTimeout(() => scrollToTarget(hashTarget), 140);
    }, { once: true });
  }
}
