import { TextGeometry } from '../../threeJS/examples/jsm/geometries/TextGeometry.js';
import { font } from './loadingResources.mjs';

export const titleGeometry = new TextGeometry('Break The Blocks Game', {
    font: font,
    size: 14,
    height: 5,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 5,
});

export const playGeometry = new TextGeometry('Play', {
    font: font,
    size: 10,
    height: 5,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5,
});

export const settingsGeometry = new TextGeometry('Settings', {
    font: font,
    size: 8,
    height: 5,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5,
});

export const creatorGeometry = new TextGeometry('Created by Tariq', {
    font: font,
    size: 8,
    height: 5,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5,
});

// settings geometry

export const mainMenuGeometry = new TextGeometry('Music: ', {
    font: font,
    size: 8,
    height: 5,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5,
});

export const backGeometry = new TextGeometry('Back', {
    font: font,
    size: 8,
    height: 5,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5,
});

export const onGeometry = new TextGeometry('ON', {
    font: font,
    size: 7,
    height: 5,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5,
});

export const plusOnGeometry = new TextGeometry('+', {
    font: font,
    size: 7,
    height: 5,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5,
});

export const minusOnGeometry = new TextGeometry('-', {
    font: font,
    size: 7,
    height: 5,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5,
});

export const offGeometry = new TextGeometry('OFF', {
    font: font,
    size: 7,
    height: 5,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5,
});
