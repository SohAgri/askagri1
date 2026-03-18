const smoothScrollLinks = Array.from(document.querySelectorAll('a.quick-scroll[href^="#"], .quick-nav a[href^="#"]'));
const quickNavLinks = Array.from(document.querySelectorAll('.quick-nav a'));
const sections = [...new Set(
  quickNavLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)
)];

const scrollToTarget = target => {
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  target.classList.add('anchor-focus');
  window.setTimeout(() => target.classList.remove('anchor-focus'), 1600);
};

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
    rootMargin: '-120px 0px -45% 0px'
  }
);

sections.forEach(section => observer.observe(section));

const promptInput = document.getElementById('livestockPrompt');
document.querySelectorAll('.prompt-chips button').forEach(button => {
  button.addEventListener('click', () => {
    if (promptInput) {
      promptInput.value = button.textContent.trim();
      promptInput.focus();
    }
  });
});

if (window.location.hash) {
  const hashTarget = document.querySelector(window.location.hash);
  if (hashTarget) {
    window.addEventListener(
      'load',
      () => {
        window.setTimeout(() => scrollToTarget(hashTarget), 120);
      },
      { once: true }
    );
  }
}
