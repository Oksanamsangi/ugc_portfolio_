// Video modal
const modal = document.getElementById('modal');
const modalVideo = document.getElementById('modalVideo');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.video-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const src = thumb.dataset.video;
    if (!src) return;
    modalVideo.src = src;
    modal.hidden = false;
    modalVideo.play().catch(() => {});
  });
});

function closeModal() {
  modal.hidden = true;
  modalVideo.pause();
  modalVideo.src = '';
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Scroll reveal
const toReveal = document.querySelectorAll('.video-card, .services__list li, .section-head, .about__text, .about__img, .hero__text, .hero__visual');
toReveal.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
toReveal.forEach(el => io.observe(el));
