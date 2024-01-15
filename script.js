let text = document.getElementById('text');
let hill1 = document.getElementById('hill1');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let hill6 = document.getElementById('hill6');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    hill5.style.marginLeft = value * 1.5 + 'px';
    hill6.style.marginLeft = value * -1.5 + 'px';
    hill4.style.marginLeft = value * -1.5 + 'px';
    hill1.style.marginTop = value * 1 + 'px';
    hill3.style.marginTop = value * 1.5 + 'px';
});

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}
