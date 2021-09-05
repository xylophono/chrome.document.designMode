chrome.action.onClicked.addListener((tab) => {

    const tabId = tab.id;

    chrome.action.getTitle({ tabId })
        .then((tabTitle) => {
            const title = tabTitle === 'Edit' ? 'Editing' : 'Edit';

            chrome.scripting.executeScript({
                func: () => {
                    document.designMode = document.designMode === 'off' ? 'on' : 'off';
                    document.querySelector("html").setAttribute("spellcheck", false);
                },
                target: { tabId }
            });

            // update tab action title
            chrome.action.setTitle({ 
                tabId,
                title
            });
        });

});