(()=>{"use strict";var e,r,t,o,n,a,i,l,c,s,u,d={},p={};function f(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.m=d,e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},n=e=>!--e.r&&e(),a=(e,r)=>e?e.push(r):n(r),f.a=(i,l,c)=>{var s,u,d,p=c&&[],f=i.exports,h=!0,m=!1,b=(r,t,o)=>{m||(m=!0,t.r+=r.length,r.map(((r,n)=>r[e](t,o))),m=!1)},v=new Promise(((e,r)=>{d=r,u=()=>(e(f),o(p),p=0)}));v[r]=f,v[e]=(e,r)=>{if(h)return n(e);s&&b(s,e,r),a(p,e),v.catch(r)},i.exports=v,l((i=>{var l;s=(i=>i.map((i=>{if(null!==i&&"object"==typeof i){if(i[e])return i;if(i.then){var l=[];i.then((e=>{c[r]=e,o(l),l=0}),(e=>{c[t]=e,o(l),l=0}));var c={};return c[e]=(e,r)=>(a(l,e),i.catch(r)),c}}var s={};return s[e]=e=>n(e),s[r]=i,s})))(i);var c=()=>s.map((e=>{if(e[t])throw e[t];return e[r]})),u=new Promise(((e,r)=>{(l=()=>e(c)).r=0,b(s,l,r)}));return l.r?u:c()}),(e=>(e&&d(v[t]=e),u()))),h=!1},i=[],f.O=(e,r,t,o)=>{if(!r){var n=1/0;for(s=0;s<i.length;s++){for(var[r,t,o]=i[s],a=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(f.O).every((e=>f.O[e](r[l])))?r.splice(l--,1):(a=!1,o<n&&(n=o));if(a){i.splice(s--,1);var c=t();void 0!==c&&(e=c)}}return e}o=o||0;for(var s=i.length;s>0&&i[s-1][2]>o;s--)i[s]=i[s-1];i[s]=[r,t,o]},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"bundle."+{608:"8535729353ef19477488",872:"f8a658e9a0f0ca2ad81e"}[e]+".js",f.miniCssF=e=>"style."+{179:"cd22e918f1ca54acff7b",872:"2bf42dca5d31ae3e4809"}[e]+".css",f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),l={},c="break-the-blocks-game:",f.l=(e,r,t,o)=>{if(l[e])l[e].push(r);else{var n,a;if(void 0!==t)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var u=i[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+t){n=u;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",c+t),n.src=e),l[e]=[r];var d=(r,t)=>{n.onerror=n.onload=null,clearTimeout(p);var o=l[e];if(delete l[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=d.bind(null,n.onerror),n.onload=d.bind(null,n.onload),a&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;f.g.importScripts&&(e=f.g.location+"");var r=f.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=e})(),s=e=>new Promise(((r,t)=>{var o=f.miniCssF(e),n=f.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===r)return i}})(o,n))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,n.parentNode.removeChild(n),o(c)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),u={303:0},f.f.miniCss=(e,r)=>{u[e]?r.push(u[e]):0!==u[e]&&{872:1}[e]&&r.push(u[e]=s(e).then((()=>{u[e]=0}),(r=>{throw delete u[e],r})))},(()=>{var e={303:0};f.f.j=(r,t)=>{var o=f.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(303!=r){var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=f.p+f.u(r),i=new Error;f.l(a,(t=>{if(f.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}else e[r]=0},f.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[a,i,l]=t,c=0;if(a.some((r=>0!==e[r]))){for(o in i)f.o(i,o)&&(f.m[o]=i[o]);if(l)var s=l(f)}for(r&&r(t);c<a.length;c++)n=a[c],f.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return f.O(s)},t=self.webpackChunkbreak_the_blocks_game=self.webpackChunkbreak_the_blocks_game||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();