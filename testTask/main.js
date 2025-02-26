//Меню
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', function() {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        menuBtn.textContent = "☰";
    } else {
        nav.classList.add("show");
        menuBtn.textContent = "✕";
    }
});

//Акордеон
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Закриваємо всі секції і знімаємо активний клас
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelectorAll('.accordion-header').forEach(item => {
                item.classList.remove('active');
            });

            // Якщо секція не була активною, відкриваємо її
            if (!isActive) {
                content.classList.add('active');
                this.classList.add('active');
            }
        });
    });
});
