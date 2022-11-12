chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript(null, {file: "/src/public/js/click.js"});
});