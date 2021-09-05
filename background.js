chrome.action.onClicked.addListener(async (tab) => {
    
    // grab current tab action title
    const title = await chrome.action.getTitle({ tabid: tab.id });

    // toggle design mode
    chrome.tabs.executeScript(tab.ib, {
        func: () => {
            document.designMode = title === 'Edit' ? 'on' : 'off';
        }
    });

    // update tab action title
    await chrome.action.setTitle({ tabid: tab.id}, 
        title === 'Edit' ? 'Editing' : 'Edit'    
    );

    return;
});