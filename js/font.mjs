import * as THREE from '.././threeJS/three.module.js';
import {
    titleMatcap,
    playMatcap,
    creatorMatcap,
    settingsMatcap,
    mainMenuMusicMatcap,
    backMatcap,
    onMatcap,
    offMatcap,
    plusOnMatcap,
    minusOnMatcap,
} from './loadingResources.mjs';
import {
    titleGeometry,
    playGeometry,
    creatorGeometry,
    settingsGeometry,
    mainMenuGeometry,
    backGeometry,
    onGeometry,
    offGeometry,
    plusOnGeometry,
    minusOnGeometry,
} from './textGeometry.mjs';

const titleMaterial = new THREE.MeshMatcapMaterial({
    matcap: titleMatcap,
});

const playMaterial = new THREE.MeshMatcapMaterial({
    matcap: playMatcap,
});

const settingsMaterial = new THREE.MeshMatcapMaterial({
    matcap: settingsMatcap,
});

const creatorMaterial = new THREE.MeshMatcapMaterial({
    matcap: creatorMatcap,
});

const mainMenuMusicMaterial = new THREE.MeshMatcapMaterial({
    matcap: mainMenuMusicMatcap,
});

const backMaterial = new THREE.MeshMatcapMaterial({
    matcap: backMatcap,
});

const onMaterial = new THREE.MeshMatcapMaterial({
    matcap: onMatcap,
});

const plusOnMaterial = new THREE.MeshMatcapMaterial({
    matcap: plusOnMatcap,
});

const minusOnMaterial = new THREE.MeshMatcapMaterial({
    matcap: minusOnMatcap,
});

const offMaterial = new THREE.MeshMatcapMaterial({
    matcap: offMatcap,
});

export const title = new THREE.Mesh(titleGeometry, titleMaterial);
export const play = new THREE.Mesh(playGeometry, playMaterial);
export const settings = new THREE.Mesh(settingsGeometry, settingsMaterial);
export const creator = new THREE.Mesh(creatorGeometry, creatorMaterial);
// prettier-ignore
export const mainMenuMusic = new THREE.Mesh(mainMenuGeometry, mainMenuMusicMaterial);
export const back = new THREE.Mesh(backGeometry, backMaterial);
export const on = new THREE.Mesh(onGeometry, onMaterial);
export const plusOn = new THREE.Mesh(plusOnGeometry, plusOnMaterial);
export const minusOn = new THREE.Mesh(minusOnGeometry, minusOnMaterial);
export const off = new THREE.Mesh(offGeometry, offMaterial);
