
// Info:
//     document = DOM de la extension
//     chrome = SI definido
let tab;
let tabId;
let l;
async function getCurrentTab () {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}
getCurrentTab().then( tab => {
    tab = tab;
    tabId = tab.id;
    init();
});

function init () {

    let btns = document.querySelectorAll('button');
    for ( let btn of btns ) btn.addEventListener('click', clickButton);

    function clickButton () {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['src/public/js/click.dom.extension.js']
        }, () => {
            console.log('Este es mi callback');
        });
    }
}