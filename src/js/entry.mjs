import { WebGL } from './webgl.mjs';
import '../public/css/webgl-error.css';
import '../public/css/github-corner.css';

const whiteGithubCorner = document.getElementById('white-github-corner');
const blackGithubCorner = document.getElementById('black-github-corner');

if (WebGL.isWebGL2Available()) {
    blackGithubCorner.style.display = 'none';
    await import('./mainMenu.mjs');
} else {
    window.onload = function () {
        Particles.init({
            selector: '.background',
        });
    };

    whiteGithubCorner.style.display = 'none';
    const warning = WebGL.getWebGLErrorMessage();
    // prettier-ignore
    const webglWrapperContainer = document.getElementById('webgl-wrapper-container');
    const webglContainer = document.getElementById('webgl-container');
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    webglWrapperContainer.style.display = 'flex';
    webglWrapperContainer.style.position = 'relative';
    webglContainer.appendChild(warning);

    // creating the background
    const canvas = document.createElement('canvas');
    canvas.classList.add('background');

    // getting the body tag
    webglWrapperContainer.appendChild(canvas);
}
