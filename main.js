
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Software Engineer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// Animate radial progress circles
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.progress-circle');
    const percentages = [90, 85, 75, 95]; // Match your professional skills
    
    circles.forEach((circle, index) => {
        const circumference = 502; // 2 * π * r (where r=80)
        const offset = circumference - (percentages[index] / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        circle.style.animation = `progress-animation 2s ${index * 0.3}s ease-out forwards`;
    });
});

// Add to your existing animations
const progressAnimation = [
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(1.1)', opacity: 0.8 },
    { transform: 'scale(1)', opacity: 1 }
];

const progressTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
};

document.querySelectorAll('.progress-circle').forEach(circle => {
    circle.animate(progressAnimation, progressTiming);
});
// Form submission
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show an alert
            alert('Message sent successfully!');
            this.reset();
        });
    }
 