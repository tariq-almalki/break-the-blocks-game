import { playSound, mainMenuSound } from './loadingResources.mjs';
import '../public/css/main.css';
import '../public/css/github-corner.css';
import * as THREE from '../../threeJS/three.module.js';
import { THREEx } from '../../threeX/THREEx-Events/threex.domevents.mjs';
import KeyboardState from '../../threeX/THREEx-keyboard/threeX.keyboardState.js';
import { OrbitControls } from '../../threeJS/examples/jsm/controls/OrbitControls.js';
// prettier-ignore
import { title, play, creator, settings, mainMenuMusic, back, on, off, plusOn, minusOn } from './font.mjs';
import { particles } from './app/world/mainMenuStars.mjs';

// global variables
// Cancel Animation Variable
let cancel = null;

// y of on and off
let on_yAxis = 49;
let plusOn_yAxis = 50.5;
let minusOn_yAxis = 45.5;
let off_yAxis = 59;
let musicVolume = 0.1;
mainMenuSound.volume = musicVolume;

// making on button nonvisible
TweenMax.to(on.material, 0, { opacity: 0 });
TweenMax.to(plusOn.material, 0, { opacity: 0 });
TweenMax.to(minusOn.material, 0, { opacity: 0 });

// for keyboard events
const keyboard = new KeyboardState();

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// geometry
title.geometry.computeBoundingBox(); // computing the bounding box
title.geometry.center(); // centering the Mesh...
title.position.y = 105;

play.geometry.computeBoundingBox();
play.geometry.center();
play.position.y = 60;
play.rotation.x = -0.1;

settings.geometry.computeBoundingBox(); // computing the bounding box
settings.geometry.center(); // make it at the center
settings.position.y = 40;
settings.rotation.x = -0.1;

creator.geometry.computeBoundingBox(); // computing the bounding box
creator.geometry.center(); // make it at the center
creator.position.y = -40;
creator.position.z = -40;
creator.rotateX(-1.57 / 2 + 0.5); // in radian (1 radian == 57.3°)

mainMenuMusic.geometry.computeBoundingBox();
mainMenuMusic.geometry.center();
mainMenuMusic.position.y = -30000; // must return to 60
mainMenuMusic.rotation.x = -0.1;

back.geometry.computeBoundingBox(); // computing the bounding box
back.geometry.center(); // make it at the center
back.position.y = -30000; // must return to 40
back.rotation.x = -0.1;

on.geometry.computeBoundingBox(); // computing the bounding box
on.geometry.center(); // centering the Mesh...
on.position.y = -30000; // must return to 59
on.position.x = 28;
on.rotation.x = -0.1;
on.material.transparent = true;
plusOn.geometry.computeBoundingBox();
plusOn.geometry.center();
plusOn.position.x = 38;
plusOn.position.y = -30000;
plusOn.rotation.x = -0.1;
plusOn.material.transparent = true;
minusOn.geometry.computeBoundingBox();
minusOn.geometry.center();
minusOn.position.x = 38;
minusOn.position.y = -30000;
minusOn.rotation.x = -0.1;
minusOn.material.transparent = true;

off.geometry.computeBoundingBox(); // computing the bounding box
off.geometry.center(); // centering the Mesh...
off.position.y = -30000; // must return to 69
off.position.x = 31;
off.rotation.x = -0.1;
off.material.transparent = true;

// width, height
let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;

const renderer = new THREE.WebGLRenderer({
    antialias: true,
});

renderer.setSize(clientWidth, clientHeight);
document.body.append(renderer.domElement);

// camera
// prettier-ignore
const camera = new THREE.PerspectiveCamera(45, clientWidth / clientHeight, 0.1, 1000);

// THREEx
const domEvents = new THREEx.DomEvents(camera, renderer.domElement);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // smooth stopping
controls.target = play.position.clone(); // to focus at the same as the play Object

camera.position.set(0, 100, 300);
controls.update();

// Helpers
// const AxesHelper = new THREE.AxesHelper(50);
// scene.add(AxesHelper);

// Clock
const clock = new THREE.Clock();

// adding to the scene
scene.add(
    camera,
    title,
    play,
    settings,
    creator,
    mainMenuMusic,
    back,
    on,
    plusOn,
    minusOn,
    off,
    particles
);

function animate() {
    cancel = requestAnimationFrame(animate);
    let ElapsedTime = clock.getElapsedTime(); //Get the seconds passed since the clock started

    // particles rotation
    particles.rotation.y += 0.001;

    // creator
    creator.position.y = -20 * Math.abs(Math.cos(ElapsedTime * 2));

    controls.update();
    renderer.render(scene, camera);
}

animate();

// events

document.addEventListener('visibilitychange', (event) => {
    if (document.visibilityState === 'visible' && on_yAxis === 59) {
        mainMenuSound.play();
    } else if (document.visibilityState === 'hidden' || on_yAxis === 49) {
        mainMenuSound.pause();
    }
});

window.addEventListener('resize', () => {
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(clientWidth, clientHeight);
});

document.addEventListener('keypress', (event) => {
    // prettier-ignore
    if (!document.fullscreenElement && (event.key === 'f' || event.key === 'F' )) {
        document.body.requestFullscreen();
        // prettier-ignore
    } else if(!document.fullscreenElement && (event.key === 'f' || event.key === 'F' )) {
        document.exitFullscreen();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        // prettier-ignore
        mainMenuSound.volume = mainMenuSound.volume === 1.0 ? 1 : Number((mainMenuSound.volume + 0.1).toFixed(1));
    } else if (event.key === 'ArrowDown') {
        // prettier-ignore
        mainMenuSound.volume = mainMenuSound.volume === 0.1 ? 0.1 : Number((mainMenuSound.volume - 0.1).toFixed(1));
    }
});

domEvents.addEventListener(play, 'click', async (event) => {
    playSound.play();
    cancelAnimationFrame(cancel);
    // App render
    let { AppRenderer } = await import('./app/app.mjs');
    document.body.append(AppRenderer.domElement);
    renderer.domElement.remove();
});

domEvents.addEventListener(settings, 'click', function (event) {
    // prettier-ignore
    {
        gsap.to(title.position, { duration: 10.5, ease: "bounce.out", y: 30000 , overwrite: true });
        gsap.to(play.position, { duration: 10.5, ease: "bounce.out", y: 30000, overwrite: true });
        gsap.to(settings.position, { duration: 10.5, ease: "bounce.out", y: 30000, overwrite: true });
        gsap.to(creator.position, { duration: 10.5, ease: "bounce.out", x: -30000, overwrite: true });
        gsap.to(mainMenuMusic.position, { duration: 2, ease: "power4.out", y: 60 , overwrite: true });
        gsap.to(back.position, { duration: 2, ease: "power4.out", y: 40 , overwrite: true });
        gsap.to(on.position, { duration: 2, ease: "power4.out", y: on_yAxis , overwrite: true });
        gsap.to(plusOn.position, { duration: 2, ease: "power4.out", y: plusOn_yAxis , overwrite: true });
        gsap.to(minusOn.position, { duration: 2, ease: "power4.out", y: minusOn_yAxis , overwrite: true });
        gsap.to(off.position, { duration: 2, ease: "power4.out", y: off_yAxis, overwrite: true });
    }
});

domEvents.addEventListener(back, 'click', function (event) {
    // prettier-ignore
    {
        gsap.to(mainMenuMusic.position, { duration: 10.5, ease: "bounce.out", y: -30000, overwrite: true });
        gsap.to(back.position, { duration: 10.5, ease: "bounce.out", y: -30000, overwrite: true });
        gsap.to(on.position, { duration: 10.5, ease: "bounce.out", y: -30000, overwrite: true });
        gsap.to(plusOn.position, { duration: 10.5, ease: "bounce.out", y: -30000, overwrite: true });
        gsap.to(minusOn.position, { duration: 10.5, ease: "bounce.out", y: -30000, overwrite: true });
        gsap.to(off.position, { duration: 10.5, ease: "bounce.out", y: -30000, overwrite: true });
        gsap.to(title.position, { duration: 2, ease: "power4.out", y: 105, overwrite: true });
        gsap.to(play.position, { duration: 2, ease: "power4.out", y: 60, overwrite: true });
        gsap.to(settings.position, { duration: 2, ease: "power4.out", y: 40, overwrite: true });
        gsap.to(creator.position, { duration: 2, ease: "power4.out", x: 0, overwrite: true });
    }
});

function plusOnButtonFunction() {
    // prettier-ignore
    mainMenuSound.volume = mainMenuSound.volume === 1.0 ? 1 : Number((mainMenuSound.volume + 0.1).toFixed(1));
}

function minusOnButtonFunction() {
    // prettier-ignore
    mainMenuSound.volume = mainMenuSound.volume === 0.1 ? 0.1 : Number((mainMenuSound.volume - 0.1).toFixed(1));
}

function onButtonFunction() {
    // prettier-ignore
    {
        domEvents.unbind(on, 'click', onButtonFunction);
        domEvents.unbind(plusOn, 'click', plusOnButtonFunction);
        domEvents.unbind(minusOn, 'click', minusOnButtonFunction);
        domEvents.bind(off, 'click', offButtonFunction);
        mainMenuSound.pause();
        gsap.fromTo(on.position, {}, { y: (on_yAxis -= 10), duration: 1 });
        gsap.fromTo(plusOn.position, {}, { y: (plusOn_yAxis -= 10), duration: 1 });
        gsap.fromTo(minusOn.position, {}, { y: (minusOn_yAxis -= 10), duration: 1 });
        gsap.fromTo(off.position, {}, { y: (off_yAxis -= 10), duration: 1 });
        TweenMax.to(on.material, 1, { opacity: 0 });
        TweenMax.to(plusOn.material, 1, { opacity: 0 });
        TweenMax.to(minusOn.material, 1, { opacity: 0 });
        TweenMax.to(off.material, 1, { opacity: 1 });
    }
}

function offButtonFunction() {
    // prettier-ignore
    {
        domEvents.unbind(off, 'click', offButtonFunction);
        domEvents.bind(on, 'click', onButtonFunction);
        domEvents.bind(plusOn, 'click', plusOnButtonFunction);
        domEvents.bind(minusOn, 'click', minusOnButtonFunction);
        mainMenuSound.play();
        gsap.fromTo(on.position, {}, { y: (on_yAxis += 10), duration: 1 });
        gsap.fromTo(plusOn.position, {}, { y: (plusOn_yAxis += 10), duration: 1 });
        gsap.fromTo(minusOn.position, {}, { y: (minusOn_yAxis += 10), duration: 1 });
        gsap.fromTo(off.position, {}, { y: (off_yAxis += 10), duration: 1 });
        // in 1 second it goes to opacity=1
        TweenMax.to(on.material, 1, { opacity: 1 });
        TweenMax.to(plusOn.material, 1, { opacity: 1 });
        TweenMax.to(minusOn.material, 1, { opacity: 1 });
        TweenMax.to(off.material, 1, { opacity: 0 });
    }
}

// prettier-ignore
domEvents.bind(off, 'click', offButtonFunction);

// let timer = null;

// domEvents.addEventListener(exit, 'click', (event) => {
//     exitSound.play();
//     document.querySelector('#overlay').style.display = 'flex';
//     let sec = 3;
//     document.getElementById('timer').innerHTML = '😢';
//     timer = setInterval(function () {
//         document.getElementById('timer').innerHTML = '' + sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//             cancelAnimationFrame(cancel);
//         }
//     }, 1000);
// });

// window.off = function () {
//     clearInterval(timer);
//     document.querySelector('#overlay').style.display = 'none';
// };

window.playAgain = function () {
    window.open('https://break-the-blocks-game.vercel.app', '_self');
};
