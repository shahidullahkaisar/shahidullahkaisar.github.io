document.addEventListener('DOMContentLoaded', () => {
    // Skills Data
    const skills = [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'C++', icon: 'fas fa-code' },
        { name: 'Quantum Espresso', icon: 'fas fa-atom' },
        { name: 'DFT', icon: 'fas fa-microscope' },
        { name: 'Linux/Ubuntu', icon: 'fab fa-linux' },
        { name: 'Machine Learning', icon: 'fas fa-brain' },
        { name: 'Matplotlib', icon: 'fas fa-chart-line' },
        { name: 'Julia', icon: 'fas fa-calculator' }
    ];

    // Populate Skills
    const skillsGrid = document.querySelector('.skills-grid');
    skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
        `;
        skillsGrid.appendChild(card);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.research-card, .skill-card, .project-card').forEach(el => {
        observer.observe(el);
    });
});
