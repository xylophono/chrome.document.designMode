chrome.action.onClicked.addListener(async (tab) => {
    
    // grab current tab action title
    const title = await chrome.action.getTitle(tab.id);
    console.log(title);

    // toggle design mode
    chrome.tabs.executeScript(tab.ib, {
        func: () => {
            document.designMode = title === 'Edit' ? 'on' : 'off';
            console.log(document.designMode);
        }
    });

    // update tab action title
    await chrome.action.setTitle(tab.id, 
        title === 'Edit' ? 'Editing' : 'Edit'    
    );

    return;
});