// document.querySelectorAll('.sidebar-menu a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetSection = document.querySelector(targetId);
        
//         if (targetSection) {
//             targetSection.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }

//         // Update active state
//         document.querySelectorAll('.sidebar-menu a').forEach(link => {
//             link.classList.remove('active');
//         });
//         this.classList.add('active');
//     });
// });

// Update active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .photo-gallery');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.sidebar-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});