// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

/*menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};*/

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

    if(top >= offset && top < offset + height)  {
    // active navbar links
    navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
    });
      // active sections for animation on scroll
    sec.classList.add('show-animate');

    // if want to use animation that repeats on scroll use this
     
    
}
    });
}

var reproductor = videojs('fm-video', {
    fluid:true
});

// funcion para que los videos se reproduzcan en la pantalla grande

function reproducirVideo(video) {
    const reproductor = document.getElementById('reproductor');
    reproductor.innerHTML = `<video controls><source src="${video}" type="video/mp4">Tu navegador no soporta el elemento de video.</video>`;
}

