// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in animation for features
window.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, i) => {
        feature.style.opacity = 0;
        feature.style.transform = 'translateY(30px)';
        setTimeout(() => {
            feature.style.transition = 'opacity 0.7s, transform 0.7s';
            feature.style.opacity = 1;
            feature.style.transform = 'translateY(0)';
        }, 300 + i * 200);
    });
});