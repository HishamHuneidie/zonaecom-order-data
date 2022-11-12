
// Info:
//     document = NO definido
//     chrome = SI definido

// Esto se usa cuando no existe un popup predefinido
// Solo se puede llamar a este evento desde el service worker ubicado en manifest.background.service_worker
chrome.action.onClicked.addListener(function(tab) {
    console.log('Click sw');
    // No tabs or host permissions needed!
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: [ 'src/public/js/click.icon.js' ]
    });
});