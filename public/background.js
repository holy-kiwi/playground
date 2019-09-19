chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: chrome.extension.getURL('https://home.plgr.app') }, function(
        tab
    ) {
        // Tab opened.
    });
});
