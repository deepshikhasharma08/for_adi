const sections = document.querySelectorAll('.story-section');
let currentSection = 0;

// Reveal sections one at a time on click
document.body.addEventListener('click', () => {
    if (currentSection < sections.length) {
        sections[currentSection].classList.add('visible');
        currentSection++;
    }
});
