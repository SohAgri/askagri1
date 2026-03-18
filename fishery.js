const quickNavLinks = Array.from(document.querySelectorAll('.quick-nav a'));
const sections = quickNavLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

quickNavLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

const promptInput = document.getElementById('fisheryPrompt');
document.querySelectorAll('.prompt-chips button').forEach(button => {
  button.addEventListener('click', () => {
    if (promptInput) {
      promptInput.value = button.textContent.trim();
      promptInput.focus();
    }
  });
});

const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.muted = true;
  const tryPlay = () => heroVideo.play().catch(() => {});
  if (heroVideo.readyState >= 2) {
    tryPlay();
  } else {
    heroVideo.addEventListener('canplay', tryPlay, { once: true });
  }
}
