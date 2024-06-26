/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Maura Perrusquia')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Egresada ingeniería en Sistemas Computacionales')
    .pauseFor(1500)
    .deleteAll()    
    .start();