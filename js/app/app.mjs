import * as THREE from '../../threeJS/three.module.js';
import { DragControls } from '../../threeJS/examples/jsm/controls/DragControls.js';
import keyboardState from '../../threeX/THREEx-keyboard/threeX.keyboardState.js';
import {
    topRec,
    leftRec,
    bottomRec,
    rightRec,
    spaceship,
    groupOfBlocks,
    ball,
    defaultContactMaterial,
    topRecBody,
    leftRecBody,
    bottomRecBody,
    rightRecBody,
    spaceshipBody,
    ballBody,
    arrayOfBlocks,
    arrayOfBodies,
} from './playground/playground.mjs';
import {
    blockHitSound,
    winSound,
    loseSound,
    mainMenuSound,
} from '../loadingResources.mjs';
import { particles } from './world/playgroundStars.mjs';
import * as CANNON from '../../cannon-es/cannon-es.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// keyboard
const keyboard = new keyboardState();

// playground being added to the scene
// prettier-ignore
scene.add(topRec, leftRec, bottomRec, rightRec, spaceship, ball,particles,groupOfBlocks);

let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;

// prettier-ignore
const camera = new THREE.PerspectiveCamera(45, clientWidth / clientHeight, 0.1, 1000);

const AppRenderer = new THREE.WebGLRenderer({
    antialias: true,
});

// controls
// const controls = new OrbitControls(camera, AppRenderer.domElement);
// controls.enableDamping = true;

camera.position.set(0, 0, 100);
// controls.update();

// prettier-ignore
const dragControls = new DragControls([spaceship], camera, AppRenderer.domElement);

// setting the size of the renderer
AppRenderer.setSize(clientWidth, clientHeight);

// Helpers
const AxesHelper = new THREE.AxesHelper(5);
// scene.add(camera, AxesHelper);

// physics
const world = new CANNON.World();
world.addContactMaterial(defaultContactMaterial);

const everyBody = [
    topRecBody,
    leftRecBody,
    bottomRecBody,
    rightRecBody,
    spaceshipBody,
    ballBody,
    ...arrayOfBodies,
];

for (let i = 0; i < everyBody.length; i++) {
    world.addBody(everyBody[i]);
}

// to move the ball
const originalX = spaceship.position.x;
let dragLocker = 0;

// Clock
const clock = new THREE.Clock();
let oldElapsedTime = 0;
let cancel = null;
function animate() {
    cancel = requestAnimationFrame(animate);

    let ElapsedTime = clock.getElapsedTime();
    let deltaTime = ElapsedTime - oldElapsedTime;
    oldElapsedTime = deltaTime;

    // particles rotation
    particles.rotation.y += 0.001;

    // to update the world 60 times per second
    world.step(1 / 60, deltaTime, 3);

    // moving spaceship - Right and Left arrows
    spaceship.position.x = keyboard.pressed('right')
        ? spaceship.position.x + 0.5 > 42.5
            ? spaceship.position.x
            : spaceship.position.x + 0.5
        : keyboard.pressed('left')
        ? spaceship.position.x - 0.5 < -42.5
            ? spaceship.position.x
            : spaceship.position.x - 0.5
        : spaceship.position.x;

    // moving spaceship - A and D
    spaceship.position.x =
        keyboard.pressed('a') || keyboard.pressed('A')
            ? spaceship.position.x - 0.5 < -42.5
                ? spaceship.position.x
                : spaceship.position.x - 0.5
            : keyboard.pressed('d') || keyboard.pressed('D')
            ? spaceship.position.x + 0.5 > 42.5
                ? spaceship.position.x
                : spaceship.position.x + 0.5
            : spaceship.position.x;

    // updating positions
    spaceshipBody.position.copy(spaceship.position);
    ball.position.copy(ballBody.position);

    // checking the blocks
    if (groupOfBlocks.children.length === 0) {
        endGameWin();
    }

    // checking the ball
    if (ball.position.y <= -27) {
        endGameLose();
    }

    // to move the ball
    if (originalX < spaceship.position.x || originalX > spaceship.position.x) {
        if (dragLocker === 0) {
            //prettier-ignore

            const x = Math.ceil(Math.random() * 7) - 2;
            // prettier-ignore
            const updatedX = x <= 2 && x >= -2 ? x <= 0 ? x - 2 : x + 2  : x;
            world.gravity.set(updatedX, -9.82, 0);
            dragLocker++;
        }
    }

    // controls.update();
    AppRenderer.render(scene, camera);
}

animate();

function resize() {
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    AppRenderer.setSize(clientWidth, clientHeight);
}

function endGameWin() {
    cancelAnimationFrame(cancel);
    mainMenuSound.pause();
    winSound.play();
    document.getElementById('overlay').removeAttribute('onclick');
    document.querySelector('#overlay').style.display = 'flex';
    document.querySelector('#overlay').style.flexFlow = 'column';
    document.getElementById('result').textContent = 'Winner!!!';
}

function endGameLose() {
    cancelAnimationFrame(cancel);
    mainMenuSound.pause();
    loseSound.play();
    document.getElementById('overlay').removeAttribute('onclick');
    document.querySelector('#overlay').style.display = 'flex';
    document.querySelector('#overlay').style.flexFlow = 'column';
    document.getElementById('result').textContent = 'You Lost!!!';
}

// events
window.addEventListener('resize', resize);

// add event listener to highlight dragged objects
dragControls.addEventListener('drag', function (event) {
    const position = event.object.position;

    position.y = -25.9;

    if (position.x > 42.5) {
        position.x = 42.5;
    } else if (position.x < -42.5) {
        position.x = -42.5;
    }
});

let cancelVelocityFromTopRec = null;
let cancelVelocityFromSpaceship = null;

function velocityFromSpaceship() {
    ballBody.velocity.y += 10;
}

function VelocityFromTopRec() {
    ballBody.velocity.y -= 10;
}

topRecBody.addEventListener('collide', (collision) => {
    cancelAnimationFrame(cancelVelocityFromSpaceship);
    cancelVelocityFromTopRec = requestAnimationFrame(VelocityFromTopRec);
});

leftRecBody.addEventListener('collide', (collision) => {
    if (ballBody.velocity.y >= 0) {
        ballBody.velocity.set(9, 9, 0);
    } else {
        ballBody.velocity.set(9, -9, 0);
    }
});

rightRecBody.addEventListener('collide', (collision) => {
    if (ballBody.velocity.y >= 0) {
        ballBody.velocity.set(-9, 9, 0);
    } else {
        ballBody.velocity.set(-9, -9, 0);
    }
});

spaceshipBody.addEventListener('collide', (collision) => {
    world.gravity.set(0, 0, 0);
    if (cancelVelocityFromTopRec) {
        cancelAnimationFrame(cancelVelocityFromTopRec);
    }
    cancelVelocityFromSpaceship = requestAnimationFrame(velocityFromSpaceship);
});

for (let i = 0; i < arrayOfBlocks.length; i++) {
    arrayOfBlocks[i].body.addEventListener('collide', (collision) => {
        ballBody.velocity.y = ballBody.velocity.y >= 0 ? -10 : 10;
        blockHitSound.currentTime = 0;
        blockHitSound.play();
        world.removeBody(arrayOfBlocks[i].body);
        groupOfBlocks.remove(arrayOfBlocks[i].block);
    });
}

export { AppRenderer };
