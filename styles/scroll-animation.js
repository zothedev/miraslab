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

    // Coming Soon Box handler
    const shopTab = document.querySelector('.shop');
    const comingSoonBox = document.getElementById('comingSoonBox');
    let hideTimeout;

    if (shopTab && comingSoonBox) {
        shopTab.addEventListener('click', function(e) {
            e.stopPropagation();
            // Clear any existing timeout
            clearTimeout(hideTimeout);
            comingSoonBox.classList.remove('hidden', 'fade-out');
            
            // Hide after 3 seconds
            hideTimeout = setTimeout(() => {
                comingSoonBox.classList.add('fade-out');
                setTimeout(() => {
                    comingSoonBox.classList.add('hidden');
                }, 500);
            }, 3000);
        });

        // Close the box when clicking elsewhere
        document.addEventListener('click', function(e) {
            if (!shopTab.contains(e.target) && !comingSoonBox.contains(e.target)) {
                clearTimeout(hideTimeout);
                comingSoonBox.classList.add('hidden');
                comingSoonBox.classList.remove('fade-out');
            }
        });
    }
});
