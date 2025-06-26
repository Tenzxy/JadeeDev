document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    let darkmode = localStorage.getItem('darkmode') === 'true';
    const themeSwitch = document.getElementById('theme-switch');

    // Dark mode functions
    const enableDarkmode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'true');
        if (themeSwitch) {
            themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
        }
    };

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', 'false');
        if (themeSwitch) {
            themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';
        }
    };   
    
    // Initialize dark mode
    if (darkmode) {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
    
    // Toggle dark mode
    if (themeSwitch) {
        themeSwitch.addEventListener("click", () => {
            darkmode = !darkmode;
            darkmode ? enableDarkmode() : disableDarkmode();
        });
    }

    // Mobile menu functionality
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar shadow on scroll
    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                nav.style.boxShadow = 'var(--shadow-sm)';
            } else {
                nav.style.boxShadow = 'none';
            }
        });
    }

    // Project Data
    const projectsData = {
        "game-developer": {
            title: "Game Developer",
            date: "2021-Present",
            type: "Roblox Development",
            description: "Game creator in Roblox, Roblox is a popular game that has been played since childhood, and I have 2 years of experience.",
            details: "<p>Specialized in creating immersive Roblox experiences with:</p><ul><li>Lua scripting for game mechanics</li><li>3D environment design</li><li>Multiplayer systems</li><li>In-game economies</li></ul>",
            tags: ["Scripter", "Builder", "Lua", "Roblox Studio"],
            liveLink: "#",
            codeLink: "#",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        "graphics-designer": {
            title: "Graphics Designer",
            date: "2013-Present",
            type: "Visual Design",
            description: "With over 10 years of experience in graphics design, I specialize in creating visually stunning content — from logos, branding, and posters to game assets and UI elements.",
            details: "<p>Design services include:</p><ul><li>Brand identity systems</li><li>Game UI/UX design</li><li>Marketing materials</li><li>3D modeling and texturing</li></ul>",
            tags: ["Game UI Design", "UI Design", "Photoshop", "Illustrator", "Figma"],
            liveLink: "#",
            codeLink: "#",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
        },
        "coder-developer": {
            title: "Coder / UI/UX Developer",
            date: "2018-Present",
            type: "Full-stack Development",
            description: "Creating responsive interfaces and functional systems for websites and games.",
            details: "<p>Development expertise includes:</p><ul><li>Frontend development (React, Vue)</li><li>Backend systems (Node.js, Python)</li><li>Database design</li><li>Game development</li></ul>",
            tags: ["Node.js", "Web Developer", "Python", "PHP", "Java"],
            liveLink: "#",
            codeLink: "#",
            image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80"
        }
    };

    // Project Modal System
    const modal = document.getElementById('projectModal');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (modal && projectCards.length > 0) {
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                const projectId = this.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '-');
                const projectData = projectsData[projectId];
                
                if (projectData) {
                    // Populate modal with project data
                    document.getElementById('modalProjectTitle').textContent = projectData.title;
                    document.getElementById('modalProjectDate').textContent = projectData.date;
                    document.getElementById('modalProjectType').textContent = projectData.type;
                    document.getElementById('modalProjectDescription').textContent = projectData.description;
                    document.getElementById('modalProjectDetails').innerHTML = projectData.details;
                    document.getElementById('modalProjectImage').src = projectData.image;
                    document.getElementById('modalProjectImage').alt = projectData.title;
                    
                    const tagsContainer = document.getElementById('modalProjectTags');
                    tagsContainer.innerHTML = '';
                    projectData.tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.textContent = tag;
                        tagsContainer.appendChild(tagElement);
                    });
                    
                    document.getElementById('modalLiveLink').href = projectData.liveLink;
                    document.getElementById('modalCodeLink').href = projectData.codeLink;
                    
                    // Show modal
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Close modal
        document.querySelector('.modal-close').addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .about-content, .skill-category, .contact-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.project-card, .about-content, .skill-category, .contact-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run once on load
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});