document.addEventListener('DOMContentLoaded', () => {
    // Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            submitBtn.textContent = 'MESSAGE SENT!';
            submitBtn.style.backgroundColor = '#2d6a4f'; // success green
            
            setTimeout(() => {
                contactForm.reset();
                submitBtn.textContent = 'SEND MESSAGE';
                submitBtn.style.backgroundColor = ''; 
            }, 3000);
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add visual feedback to "Add to Cart" buttons
    const cartButtons = document.querySelectorAll('.product-card .btn-secondary');
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'ADDED!';
            this.style.backgroundColor = 'var(--primary-color)';
            this.style.color = 'white';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = 'transparent';
                this.style.color = 'var(--primary-color)';
            }, 2000);
        });
    });
});