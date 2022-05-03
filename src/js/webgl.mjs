export class WebGL {
    static isWebGLAvailable() {
        try {
            const canvas = document.createElement('canvas');
            return !!(
                window.WebGLRenderingContext &&
                (canvas.getContext('webgl') ||
                    canvas.getContext('experimental-webgl'))
            );
        } catch (e) {
            return false;
        }
    }

    static isWebGL2Available() {
        try {
            const canvas = document.createElement('canvas');
            return !!(
                window.WebGL2RenderingContext && canvas.getContext('webgl2')
            );
        } catch (e) {
            return false;
        }
    }

    static getWebGLErrorMessage() {
        return this.getErrorMessage(1);
    }

    static getWebGL2ErrorMessage() {
        return this.getErrorMessage(2);
    }

    static getErrorMessage(version) {
        const names = {
            1: 'WebGL',
            2: 'WebGL 2',
        };

        const contexts = {
            1: window.WebGLRenderingContext,
            2: window.WebGL2RenderingContext,
        };

        let message =
            'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';

        const element = document.createElement('div');
        element.id = 'webglmessage';
        element.style.fontFamily = 'monospace';
        element.style.fontSize = '20px';
        element.style.fontWeight = 'bold';
        element.style.textAlign = 'center';
        element.style.background = 'inherit';
        element.style.color = '#000';
        element.style.padding = '0px';
        element.style.width = 'inherit';
        element.style.margin = 'auto';

        if (contexts[version]) {
            message = message.replace('$0', 'graphics card');
        } else {
            message = message.replace('$0', 'browser');
        }

        message = message.replace('$1', names[version]);

        element.innerHTML = message;

        return element;
    }
}
