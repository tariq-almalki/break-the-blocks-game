import { WebGL } from './webgl.mjs';
import '../public/css/webgl-error.css';

const whiteGithubCorner = document.getElementById('white-github-corner');
const blackGithubCorner = document.getElementById('black-github-corner');

if (WebGL.isWebGL2Available()) {
    blackGithubCorner.style.display = 'none';
    await import('./mainMenu.mjs');
} else {
    whiteGithubCorner.style.display = 'none';
    const warning = WebGL.getWebGLErrorMessage();
    // prettier-ignore
    const webglWrapperContainer = document.getElementById('webgl-wrapper-container');
    const webglContainer = document.getElementById('webgl-container');
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    webglWrapperContainer.style.display = 'flex';
    webglContainer.appendChild(warning);
}
