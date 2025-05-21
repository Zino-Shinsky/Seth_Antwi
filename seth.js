document.addEventListener('DOMContentLoaded', () => {
    // Preloader optimization
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        // Reduce preloader time to 1.5 seconds
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.style.overflow = '';
            }, 500);
        }, 1500);
    }

    // Header and Navigation
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    const navCenter = document.querySelector('.nav-center');
    const navLinks = document.querySelectorAll('.nav-links a');
    const logo = document.querySelector('.logo');
    const socialLinks = document.querySelectorAll('.social-link');
    const navSocial = document.querySelector('.nav-social');

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Logo animation
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.05)';
            logo.style.color = '#1a5f7a';
        });

        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1)';
            logo.style.color = '';
        });
    }

    // Social links animation
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px)';
            link.style.color = '#1a5f7a';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
            link.style.color = '';
        });
    });

    // Navigation links animation
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
            link.style.color = '#1a5f7a';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
            link.style.color = '';
        });
    });

  


    

    // Mobile Navigation
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navToggle.classList.toggle('active');
            navCenter.classList.toggle('active');
            document.body.style.overflow = navCenter.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navCenter.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navCenter && navCenter.classList.contains('active') && 
            !navCenter.contains(e.target) && 
            !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navCenter.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Prevent clicks inside nav-center from closing the menu
    if (navCenter) {
        navCenter.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll-based animations
    const observerOptionsScroll = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptionsScroll);

    // Observe all project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observerScroll.observe(card);
    });

    // Add CSS transitions
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.transition = 'all 0.3s ease-in-out';
    });

    // Project Modal Functionality
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const projectLinks = document.querySelectorAll('.project-link');

    // Project data (you can replace this with your actual project data)
    const projectData = {
        'industrial': {
            title: 'Industrial Automation System',
            description: 'Advanced automation system for manufacturing processes. This project involved the design and implementation of a fully automated production line, integrating PLC systems, robotic arms, and IoT sensors for real-time monitoring and control.',
            image: 'working.jpg',
            tech: ['Automation', 'PLC', 'Robotics', 'IoT', 'Control Systems'],
            date: 'January 2024',
            client: 'Manufacturing Corp',
            location: 'Accra, Ghana',
            gallery: ['working.jpg', 'photo-1602809254085-aa5c77291da1.avif'],
            link: '#'
        },
        'automotive': {
            title: 'Vehicle Suspension System',
            description: 'Innovative suspension design for improved vehicle performance. The project focused on developing a new suspension system that enhances ride comfort while maintaining excellent handling characteristics.',
            image: 'caterpillar-140G-motor-grader-picture.jpg',
            tech: ['CAD', 'FEA', 'Prototyping', 'Testing', 'Simulation'],
            date: 'December 2023',
            client: 'Automotive Solutions Ltd',
            location: 'Kumasi, Ghana',
            gallery: ['caterpillar-140G-motor-grader-picture.jpg', 'photo-1652396669401-db1bc4c4457d.avif'],
            link: '#'
        },
        'machinery': {
            title: 'CNC Machine Design',
            description: 'Precision CNC machine design for manufacturing. This project involved the complete design and development of a custom CNC machine for specialized manufacturing processes.',
            image: 'photo-1598067394956-1922dc931ae3.avif',
            tech: ['CNC', 'Precision', 'Manufacturing', 'CAD/CAM', 'Control Systems'],
            date: 'November 2023',
            client: 'Precision Engineering Co',
            location: 'Tema, Ghana',
            gallery: ['photo-1598067394956-1922dc931ae3.avif', 'photo-1652396708931-20060d8d9d21.avif'],
            link: '#'
        }
    };

    // Open modal with project details
    function openProjectModal(projectId) {
        const project = projectData[projectId];
        if (!project) {
            console.error('Project not found:', projectId);
            return;
        }


        // Update modal content
        document.getElementById('modalProjectImage').src = project.image;
        document.getElementById('modalProjectTitle').textContent = project.title;
        document.getElementById('modalProjectDescription').textContent = project.description;
        document.getElementById('modalProjectDate').textContent = project.date;
        document.getElementById('modalProjectClient').textContent = project.client;
        document.getElementById('modalProjectLocation').textContent = project.location;
        document.getElementById('modalProjectLink').href = project.link;

        // Update tech stack
        const techContainer = document.getElementById('modalProjectTech');
        techContainer.innerHTML = '';
        project.tech.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            techContainer.appendChild(span);
        });

        // Update gallery
        const galleryContainer = document.getElementById('modalProjectGallery');
        galleryContainer.innerHTML = '';
        project.gallery.forEach(image => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `<img src="${image}" alt="Project Gallery Image">`;
            galleryContainer.appendChild(div);
        });

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
       
    }

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';

    }

    // Event listeners
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectCard = link.closest('.project-card');
            const projectId = projectCard.getAttribute('data-category');
            console.log('Opening modal for project:', projectId); // Debug log
            openProjectModal(projectId);
        });
    });


    modalClose.addEventListener('click', closeModal);
    

  

    // Share project functionality
    document.getElementById('modalProjectShare').addEventListener('click', () => {
        if (navigator.share) {
            const project = projectData[document.getElementById('modalProjectTitle').textContent.toLowerCase().replace(/\s+/g, '-')];
            navigator.share({
                title: project.title,
                text: project.description,
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = window.location.href;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            alert('Link copied to clipboard!');
        }
    });
});

// Add a hover effect to the testimonials
document.querySelectorAll('.row').forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.transform = 'scale(1.05)';
    });
});


// show 3 items and hide the rest when collapse btn is clicked
const collapseBtn = document.getElementById('collapseBtn');
const galleryItems = document.querySelectorAll('.gallery-item');

collapseBtn.addEventListener('click', () => {
    galleryItems.forEach((item, index) => {
        if (index >= 3) {
            item.style.display = 'none';
        }
    });
    collapseBtn.style.display = 'none';
    showFullGalleryBtn.style.display = 'block';
});

// choose the collapsebtn function when the page is loaded
window.addEventListener('load', () => {
    collapseBtn.style.display = 'block';
    showFullGalleryBtn.style.display = 'none';
});


// Create a btn to show the full gallery
const showFullGalleryBtn = document.getElementById('showFullGalleryBtn');

showFullGalleryBtn.addEventListener('click', () => {
    galleryItems.forEach(item => {
        item.style.display = 'block';
    });
    collapseBtn.style.display = 'block';
    showFullGalleryBtn.style.display = 'none';
});


// Directing to WhatsApp when the submit btn is clicked
document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Your WhatsApp number (no +, just country code + number)
      const phoneNumber = '233501899744';
  
      // Build message and encode it
      const text = `Hello, my name is ${name}%0AEmail: ${email}%0AMessage: ${message}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  
      // Open WhatsApp in new tab
      window.open(url, '_blank');
      document.getElementById('whatsapp-form').reset();
    });

 
  

    // Testimonials view details btn functionality


 














