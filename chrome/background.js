chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create(
        { url: 'https://plgr.netlify.com' },
        function(tab) {
            // Tab opened.
        }
    );
});
