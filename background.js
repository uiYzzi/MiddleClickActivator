chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'createTab') {
        chrome.storage.local.get(['tabPosition'], (result) => {
            const positionMode = result.tabPosition || 'next' // 默认右侧
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const currentTab = tabs[0]
                const createParams = {
                    url: message.url,
                    active: true
                }
                // 根据设置调整位置
                if (positionMode === 'next') {
                    createParams.index = currentTab.index + 1
                }
                chrome.tabs.create(createParams)
            })
        })
    }
})
