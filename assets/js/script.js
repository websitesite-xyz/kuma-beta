const overlay = document.getElementById('modal-overlay');

// ✅ 아무데나 클릭하면 닫힘 (모달 포함)
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// ✅ overlay 위에서 휠/트랙패드 스크롤하면 뒤(페이지)가 스크롤되게
overlay.addEventListener('wheel', (e) => {
  e.preventDefault();
  window.scrollBy({ top: e.deltaY, left: e.deltaX, behavior: 'auto' });
}, { passive: false });

// ✅ 모바일 터치 스크롤도 뒤로 전달
let startY = 0;
overlay.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
}, { passive: true });

overlay.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const y = e.touches[0].clientY;
  const dy = startY - y;
  window.scrollBy(0, dy);
  startY = y;
}, { passive: false });