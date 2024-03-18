const sections = document.querySelectorAll('section');

function isSectionInMiddle(section) {
    const rect = section.getBoundingClientRect();
    const screenMiddle = window.innerHeight / 2;
    return screenMiddle <= rect.bottom && screenMiddle >= rect.top;
}

function updateActiveNavLink() {
    sections.forEach((section) => {
        const navLink = document.querySelector(`[href="#${section.id}"]`);
        if (isSectionInMiddle(section)) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
