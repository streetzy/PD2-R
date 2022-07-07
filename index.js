/** @type {HTMLElement} */
const introClass = document.querySelector(".intro");

/** @type {HTMLElement} */
const loadoutClass = document.querySelector(".loadout");

/** @type {HTMLElement} */
const guidesClass = document.querySelector(".guides");

/** @type {HTMLElement} */
const authorClass = document.querySelector(".author");

/**
 * @param {HTMLElement} buttonElement 
 * @param {boolean} outState 
 */

function resizeButton(buttonElement, outState) {
    if (!outState)
    {
        buttonElement.style.height = "60%"
        buttonElement.style.width = "60%"
        buttonElement.style.border = "white solid 1px"
        buttonElement.style.zIndex = "1100"
        buttonElement.style.boxShadow = "0 0 8px 4px rgba(0, 0, 0, 1)"
    }
    else {
        buttonElement.style.height = "50%"
        buttonElement.style.width = "50%"
        buttonElement.style.border = "var(--300) solid 1px"
        buttonElement.style.zIndex = "0"
        buttonElement.style.boxShadow = "0 0 0 -4px rgba(0, 0, 0, 0)"
    }
}

function sendToHTML(htmlName) {
    window.location.href = `http://127.0.0.1:5500/contents/${htmlName}.html`
}

introClass.addEventListener("mouseenter", () => resizeButton(introClass, false))
introClass.addEventListener("mouseleave", () => resizeButton(introClass, true))
loadoutClass.addEventListener("mouseenter", () => resizeButton(loadoutClass, false))
loadoutClass.addEventListener("mouseleave", () => resizeButton(loadoutClass, true))
guidesClass.addEventListener("mouseenter", () => resizeButton(guidesClass, false))
guidesClass.addEventListener("mouseleave", () => resizeButton(guidesClass, true))
authorClass.addEventListener("mouseenter", () => resizeButton(authorClass, false))
authorClass.addEventListener("mouseleave", () => resizeButton(authorClass, true))

introClass.addEventListener("mousedown", () => sendToHTML("intro"))
loadoutClass.addEventListener("mousedown", () => sendToHTML("loadout"))
guidesClass.addEventListener("mousedown", () => sendToHTML("guides"))
authorClass.addEventListener("mousedown", () => sendToHTML("author"))