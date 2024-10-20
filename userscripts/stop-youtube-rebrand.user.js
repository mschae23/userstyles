// ==UserScript==
// @name         Stop YouTube rebrand
// @namespace    mschae23.de
// @version      1.1.4
// @description  Replaces YouTube's new pink branding with the old red
// @author       mschae23
// @match        https://*.youtube.com/*
// @match        https://m.youtube.com/*
// @icon         https://raw.githubusercontent.com/mschae23/userstyles/master/assets/YouTube/favicon_144x144.png
// @updateURL    https://raw.githubusercontent.com/mschae23/userstyles/master/userscripts/stop-youtube-rebrand.user.js
// @downloadURL  https://raw.githubusercontent.com/mschae23/userstyles/master/userscripts/stop-youtube-rebrand.user.js
// @grant        none
// ==/UserScript==

function changeFavicons() {
    document.querySelector("head > link[rel=\"shortcut icon\"]").setAttribute("href", "https://raw.githubusercontent.com/mschae23/userstyles/master/assets/YouTube/favicon.ico");
    document.querySelectorAll("head > link[rel=\"icon\"]").forEach(elem => elem.remove());

    const favicon32 = document.createElement("link");
    favicon32.setAttribute("rel", "icon");
    favicon32.setAttribute("href", "https://raw.githubusercontent.com/mschae23/userstyles/master/assets/YouTube/favicon_32x32.png");
    favicon32.setAttribute("sizes", "32x32");

    const favicon48 = document.createElement("link");
    favicon48.setAttribute("rel", "icon");
    favicon48.setAttribute("href", "https://raw.githubusercontent.com/mschae23/userstyles/master/assets/YouTube/favicon_48x48.png");
    favicon32.setAttribute("sizes", "48x48");

    const favicon96 = document.createElement("link");
    favicon96.setAttribute("rel", "icon");
    favicon96.setAttribute("href", "https://raw.githubusercontent.com/mschae23/userstyles/master/assets/YouTube/favicon_96x96.png");
    favicon32.setAttribute("sizes", "96x96");

    const favicon144 = document.createElement("link");
    favicon144.setAttribute("rel", "icon");
    favicon144.setAttribute("href", "https://raw.githubusercontent.com/mschae23/userstyles/master/assets/YouTube/favicon_144x144.png");
    favicon32.setAttribute("sizes", "144x144");

    const head = document.querySelector("head");
    head.appendChild(favicon32);
    head.appendChild(favicon48);
    head.appendChild(favicon96);
    head.appendChild(favicon144);
}

document.body.addEventListener("yt-navigate-finish", function () {
    changeFavicons();
});
