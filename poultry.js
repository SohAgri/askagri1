const poultryHeaderOffset = () => {
  const nav = document.querySelector('nav');
  const quickNav = document.querySelector('.quick-nav-wrap');
  return (nav?.offsetHeight || 0) + (quickNav?.offsetHeight || 0) + 18;
};

const poultryScrollTo = target => {
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - poultryHeaderOffset();
  window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  target.classList.add('anchor-focus');
  setTimeout(() => target.classList.remove('anchor-focus'), 1500);
};

const poultryLinks = Array.from(document.querySelectorAll('.quick-scroll[href^="#"], .quick-nav a[href^="#"], .notes-link[href^="#"]'));
const poultryQuickLinks = Array.from(document.querySelectorAll('.quick-nav a'));
const poultrySections = [...new Set(poultryQuickLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean))];

poultryLinks.forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (!href) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    history.replaceState(null, '', href);
    poultryScrollTo(target);
  });
});

const poultryObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = `#${entry.target.id}`;
    poultryQuickLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === id));
  });
}, { threshold: 0.35, rootMargin: '-140px 0px -45% 0px' });

poultrySections.forEach(section => poultryObserver.observe(section));

const poultryPrompt = document.getElementById('poultryPrompt');
document.querySelectorAll('.chip-row button').forEach(button => {
  button.addEventListener('click', () => {
    if (!poultryPrompt) return;
    poultryPrompt.value = button.textContent.trim();
    poultryPrompt.focus();
  });
});

const poultryForm = document.querySelector('.ai-prompt-form');
if (poultryForm && poultryPrompt) {
  poultryForm.addEventListener('submit', event => {
    event.preventDefault();
    const prompt = poultryPrompt.value.trim();
    if (prompt) localStorage.setItem('askkrishi_ai_prompt', prompt);
    else localStorage.removeItem('askkrishi_ai_prompt');
    window.location.href = 'index.html#ai-chat';
  });
}

if (window.location.hash) {
  const target = document.querySelector(window.location.hash);
  if (target) {
    window.addEventListener('load', () => setTimeout(() => poultryScrollTo(target), 140), { once: true });
  }
}
