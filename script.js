document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Experience timeline data
    const experienceData = [
        {
            date: "2022 - Present",
            title: "Senior Developer",
            company: "Tech Solutions Inc.",
            description: "Lead a team of developers in creating innovative web applications using modern technologies like React, Node.js, and MongoDB."
        },
        {
            date: "2020 - 2022",
            title: "Frontend Developer",
            company: "Digital Creations",
            description: "Developed responsive and user-friendly interfaces for various clients, focusing on accessibility and performance."
        },
        {
            date: "2018 - 2020",
            title: "Junior Developer",
            company: "WebStart",
            description: "Assisted in building and maintaining websites for small businesses, learning the fundamentals of web development."
        }
    ];
    
    // Generate timeline items
    const timeline = document.querySelector('.timeline');
    experienceData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title} <span>@ ${item.company}</span></h3>
                <p class="timeline-description">${item.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
    
    // Projects data
    const projectsData = [
        {
            title: "Smart AI Recommendations",
            category: "ai",
            description: "An advanced AI-powered recommendation engine built with modern ML algorithms to provide personalized suggestions.",
            tags: ["Python", "TensorFlow", "FastAPI", "React"],
            image: "https://via.placeholder.com/600x400?text=AI+Recommendations",
            link: "#"
        },
        {
            title: "AI Fashion Recommendations",
            category: "ai",
            description: "A fashion-forward outfit recommendation platform leveraging AI to personalize style for users.",
            tags: ["NextJS", "TailwindCSS", "TypeScript", "AI"],
            image: "https://via.placeholder.com/600x400?text=Fashion+AI",
            link: "#"
        },
        {
            title: "E-commerce Platform",
            category: "web",
            description: "A full-featured e-commerce platform with payment integration, product management, and user accounts.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://via.placeholder.com/600x400?text=E-commerce",
            link: "#"
        },
        {
            title: "Portfolio Website",
            category: "web",
            description: "A responsive portfolio website showcasing my work and skills as a developer.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "https://via.placeholder.com/600x400?text=Portfolio",
            link: "#"
        },
        {
            title: "Task Management App",
            category: "other",
            description: "A productivity app for managing tasks with drag-and-drop functionality and team collaboration.",
            tags: ["React", "Firebase", "Material UI"],
            image: "https://via.placeholder.com/600x400?text=Task+App",
            link: "#"
        },
        {
            title: "Weather Dashboard",
            category: "other",
            description: "A weather application that displays current conditions and forecasts using API data.",
            tags: ["JavaScript", "API", "CSS"],
            image: "https://via.placeholder.com/600x400?text=Weather+App",
            link: "#"
        }
    ];
    
    // Generate project cards
    const projectsGrid = document.querySelector('.projects-grid');
    
    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projectsData 
            : projectsData.filter(project => project.category === filter);
        
        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-category', project.category);
            
            projectCard.innerHTML = `
                <div class="project-img">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <span class="project-category">${project.category.toUpperCase()}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-link">View Details <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Initial render
    renderProjects();
    
    // Filter projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Render filtered projects
            renderProjects(filter);
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-content, .timeline-item, .project-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.about-content, .timeline-item, .project-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
});
