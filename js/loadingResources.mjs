import * as THREE from '../threeJS/three.module.js';
import { FontLoader } from '../threeJS/examples/jsm/loaders/FontLoader.js';

// Loaders
const fontLoader = new FontLoader();
const textureLoader = new THREE.TextureLoader();

// fetching and loading json file
const response = await fetch('/font/JetBrains_Mono_Regular.typeface.json');
const json = await response.json();

// loading textures and fonts
export const font = fontLoader.parse(json);
const yellowMatcap = textureLoader.load('/Images/yellow.png');
export const titleMatcap = yellowMatcap;
export const playMatcap = textureLoader.load('/Images/cyan.png');
const red_2Matcap = textureLoader.load('/Images/red_2.png');
export const settingsMatcap = red_2Matcap;
const matWhiteMatcap = textureLoader.load('/Images/matWhite.png');
export const creatorMatcap = matWhiteMatcap;
// settings Matcap
export const mainMenuMusicMatcap = yellowMatcap;
export const backMatcap = red_2Matcap;
export const onMatcap = matWhiteMatcap;
export const plusOnMatcap = matWhiteMatcap;
export const minusOnMatcap = matWhiteMatcap;
export const offMatcap = matWhiteMatcap;

// sounds
export const playSound = new Audio('/sounds/play.mp3');
export const settingsSound = new Audio('/sounds/settings.mp3');
export const blockHitSound = new Audio('/sounds/block-hit.mp3');
export const winSound = new Audio('/sounds/win.mp3');
export const loseSound = new Audio('/sounds/lose.mp3');
export const mainMenuSound = new Audio('/sounds/bim-bom-bomp.wav');
mainMenuSound.loop = true;
