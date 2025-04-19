document.addEventListener('DOMContentLoaded', initOptions)
function initOptions() {
    // 加载已保存的设置
    chrome.storage.local.get(['tabPosition'], (result) => {
        const position = result.tabPosition || 'next'
        document.querySelector(`input[value="${position}"]`).checked = true
    })
    // 保存按钮点击事件
    document.getElementById('save').addEventListener('click', () => {
        const selected = document.querySelector('input[name="position"]:checked').value
        chrome.storage.local.set({ tabPosition: selected }, () => {
            alert('设置已保存!')
        })
    })
}
