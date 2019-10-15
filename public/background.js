chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: chrome.extension.getURL('https://plgr.netlify.com') }, function(
        tab
    ) {
        // Tab opened.
    });
});
