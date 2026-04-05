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

document.querySelectorAll('.video-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
  card.addEventListener('click', () => {
    const videoId = card.getAttribute('data-video-id');
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  });
});