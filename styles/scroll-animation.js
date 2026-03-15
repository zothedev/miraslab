// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -60% 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger the animations
            setTimeout(() => {
                entry.target.classList.add('fade-in-visible');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all articles except the first one
document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('article');
    articles.forEach((article, idx) => {
        // Skip the first article - it loads in immediately
        if (idx > 0) {
            observer.observe(article);
        }
    });
});
