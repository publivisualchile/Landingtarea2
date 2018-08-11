window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 3000,
  origin:'padding',
  distance:'300px'
});
sr.reveal('.showcase-left', {
  duration: 3000,
  origin:'top',
  distance:'200px'
});
sr.reveal('.showcase-right', {
  duration: 2000,
  origin:'right',
  distance:'300px'
});
sr.reveal('.showcase-btn', {
  duration: 2000,
  delay: 2000,
  origin:'bottom'
});
sr.reveal('.flotante', {
  duration: 9000,
  delay: 13000,
  origin:'right',
  distance:'1500px',
  
});
sr.reveal('#testimonial div', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('#card div', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('.info-left', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.info-right', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.parallax-text', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px',
})
sr.reveal('.parallax-text', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px',
})
$(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset(200).top
          }, 1000);
          return false;
        }
      }
    });
  });