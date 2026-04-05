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
});

const videoModal = document.getElementById('videoModal');
const videoLink = document.getElementById('videoLink');
const closeModal = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');

document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('click', () => {
    const videoId = card.getAttribute('data-video-id');
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  });
});

function closeVideoModal() {
  videoModal.classList.remove('active');
  document.body.style.overflow = '';
}

closeModal.addEventListener('click', closeVideoModal);
modalOverlay.addEventListener('click', closeVideoModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal.classList.contains('active')) {
    closeVideoModal();
  }
});