const dairyHeaderOffset = () => {
  const nav = document.querySelector('nav');
  const quickNav = document.querySelector('.quick-nav-wrap');
  return (nav?.offsetHeight || 0) + (quickNav?.offsetHeight || 0) + 18;
};

const dairyScrollTo = target => {
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - dairyHeaderOffset();
  window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  target.classList.add('anchor-focus');
  setTimeout(() => target.classList.remove('anchor-focus'), 1500);
};

const dairyLinks = Array.from(document.querySelectorAll('.quick-scroll[href^="#"], .quick-nav a[href^="#"], .notes-link[href^="#"]'));
const dairyQuickLinks = Array.from(document.querySelectorAll('.quick-nav a'));
const dairySections = [...new Set(dairyQuickLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean))];

dairyLinks.forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (!href) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    history.replaceState(null, '', href);
    dairyScrollTo(target);
  });
});

const dairyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = `#${entry.target.id}`;
    dairyQuickLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === id));
  });
}, { threshold: 0.35, rootMargin: '-140px 0px -45% 0px' });

dairySections.forEach(section => dairyObserver.observe(section));

const dairyPrompt = document.getElementById('dairyPrompt');
document.querySelectorAll('.chip-row button').forEach(button => {
  button.addEventListener('click', () => {
    if (!dairyPrompt) return;
    dairyPrompt.value = button.textContent.trim();
    dairyPrompt.focus();
  });
});

const dairyForm = document.querySelector('.ai-prompt-form');
if (dairyForm && dairyPrompt) {
  dairyForm.addEventListener('submit', event => {
    event.preventDefault();
    const prompt = dairyPrompt.value.trim();
    if (prompt) localStorage.setItem('askkrishi_ai_prompt', prompt);
    else localStorage.removeItem('askkrishi_ai_prompt');
    window.location.href = 'index.html#ai-chat';
  });
}

if (window.location.hash) {
  const target = document.querySelector(window.location.hash);
  if (target) {
    window.addEventListener('load', () => setTimeout(() => dairyScrollTo(target), 140), { once: true });
  }
}
