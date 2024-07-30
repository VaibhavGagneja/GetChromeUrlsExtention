document.getElementById('getTabs').addEventListener('click', () => {
  chrome.tabs.query({}, (tabs) => {
    let urls = tabs.map(tab => tab.url);
    document.getElementById('output').textContent = urls.join('\n');
  });
});
