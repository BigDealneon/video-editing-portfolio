const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// Анимация для видео карточек
document.querySelectorAll('.video-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});