// Мобильное меню
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Эффект параллакса при движении мыши
document.addEventListener('mousemove', e => {
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = el.getAttribute('data-parallax');
    const x = (window.innerWidth - e.pageX * speed) / 90;
    const y = (window.innerHeight - e.pageY * speed) / 90;
    el.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// Кнопка "Купить"
const buyBtn = document.getElementById('buyBtn');
buyBtn.addEventListener('click', () => {
  window.open("https://store.steampowered.com/app/412020/Metro_Exodus/", "_blank");
});