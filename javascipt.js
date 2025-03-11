document.addEventListener('DOMContentLoaded', () => {
    // Skills Data
    const skills = [
        {name: 'Python', icon: 'fab fa-python'},
        {name: 'C++', icon: 'fas fa-code'},
        {name: 'Julia', icon: 'fas fa-calculator'},
        {name: 'Matplotlib', icon: 'fas fa-chart-line'},
        {name: 'Machine Learning', icon: 'fas fa-brain'},
        {name: 'DFT', icon: 'fas fa-atom'},
        {name: 'Quantum Espresso', icon: 'fas fa-microscope'},
        {name: 'Linux (Ubuntu)', icon: 'fab fa-linux'}
    ];

    // Populate Skills
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
