function toggleSideNav() {
    var sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a, .side-nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function toggleSideNav() {
    var sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('open');
}
