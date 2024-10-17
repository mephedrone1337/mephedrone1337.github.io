document.addEventListener('DOMContentLoaded', function () {
    const aboutTrigger = document.getElementById('aboutTrigger');
    const aboutSection = document.getElementById('aboutSection');

    aboutTrigger.addEventListener('mouseenter', function () {
        // Show the About section
        aboutSection.style.opacity = '1'; // Make it visible
        aboutSection.style.transform = 'translateY(0)'; // Move it to original position
        aboutTrigger.classList.add('about-shown'); // Add class to hide the button
    });

    // Optional: If you want to keep the section visible after mouse leave
    aboutTrigger.addEventListener('mouseleave', function () {
        // Do nothing
    });
});

const text = "Mephedrone1337";
let index = 1;

function updateTitle() {
    if (index <= text.length) {
        document.title = text.slice(0, index);
        index++;
        setTimeout(updateTitle, 500); // adjust the speed (500ms) if needed
    }
}

window.onload = updateTitle;