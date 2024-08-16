document.getElementById('scrape').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: scrapeCode
      }, (results) => {
        const output = results[0].result;
        document.getElementById('output').textContent = output;
      });
    });
  });
  
  function scrapeCode() {
    const codeElements = document.querySelectorAll('code');
    let codeText = '';
    codeElements.forEach(el => {
      codeText += el.innerText + '\n\n';
    });
    return codeText;
  }
  