document.addEventListener('auxclick', (event) => {
    if (event.button === 1) { // 中键点击
        const target = event.target.closest('a[href]');
        if (target) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            chrome.runtime.sendMessage({ 
                action: 'createTab', 
                url: target.href 
            });
            return false;
        }
    }
}, true);
