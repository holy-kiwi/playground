chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create(
        { url: 'https://home.plgr.app' },
        function(tab) {
            // Tab opened.
        }
    );
});
