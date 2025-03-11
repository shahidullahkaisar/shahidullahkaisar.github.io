// Visitor Counter (using localStorage)
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('counter').textContent = visitCount;

// Progress Animation
document.querySelectorAll('.progress').forEach(progress => {
    const width = progress.style.width;
    progress.style.width = '0';
    setTimeout(() => {
        progress.style.width = width;
    }, 500);
});

// Add Intersection Observer for timeline
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideRight 1s forwards';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});
