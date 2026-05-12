document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const formMessage = document.getElementById('formMessage');

    if (orderForm) {
        orderForm.addEventListener('submit', event => {
            event.preventDefault();
            const name = orderForm.name.value.trim();
            const phone = orderForm.phone.value.trim();

            if (!name || !phone) {
                formMessage.textContent = 'Заполните имя и телефон.';
                return;
            }

            formMessage.textContent = `Спасибо, ${name}! Ваша заявка принята.`;
            orderForm.reset();
        });
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const href = link.getAttribute('href').substring(1);
            const target = document.getElementById(href);

            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});