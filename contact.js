document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const emailInput = contactForm.querySelector('input[name="email"]');
            if (!emailInput.value.includes('@')) {
                alert('Please enter a valid email address.');
                e.preventDefault();
            }
        });
    }
});
