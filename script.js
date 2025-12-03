// Matrix Rain Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Typing effect restart
const typingElement = document.querySelector('.typing-effect');
if (typingElement) {
    setInterval(() => {
        typingElement.style.animation = 'none';
        setTimeout(() => {
            typingElement.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
        }, 100);
    }, 10000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in effect
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add interactive effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add interactive effects to stat boxes
document.querySelectorAll('.stat-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        const number = this.querySelector('.stat-number');
        number.style.transform = 'scale(1.1)';
        number.style.transition = 'transform 0.3s ease';
    });
    
    box.addEventListener('mouseleave', function() {
        const number = this.querySelector('.stat-number');
        number.style.transform = 'scale(1)';
    });
});

// Terminal typing effect for skills
const terminalOutput = document.querySelector('.terminal-output.skills-list');
if (terminalOutput) {
    const lines = terminalOutput.querySelectorAll('p');
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transition = 'opacity 0.3s ease';
        }, index * 50);
    });
}

// Add glitch effect on hover for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// Console Easter Egg
console.log('%c🔐 Welcome to Mehdi Ben Feidia\'s Portfolio! 🔐', 'color: #00ff41; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ff41;');
console.log('%cLooking for something? Try exploring the source code! 👨‍💻', 'color: #00ff41; font-size: 14px;');
console.log('%c[ root@mehdi:~# ] Access granted. Happy hacking! 🚀', 'color: #00ff41; font-size: 12px;');

// Add active navigation highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.textShadow = 'none';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.textShadow = '0 0 10px #00ff41';
        }
    });
});