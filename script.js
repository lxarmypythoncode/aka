const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Menambahkan animasi hover dan interaksi lebih lanjut menggunakan JavaScript (Opsional)
document.querySelectorAll('.tool-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
