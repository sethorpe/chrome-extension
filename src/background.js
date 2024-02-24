// This script is used to fetch the quote in the background and store it
// You can also use localStorage or chrome.storage.sync to store the quote

function fetchAndStoreQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        chrome.storage.local.set({quote: data.content});
    })
    .catch(error => {
        console.error('Failed to fetch quote', error);
    });
}

// Fetch a new quote when the extension is installed or updated
chrome.runtime.onInstalled.addListener(fetchAndStoreQuote);

// Fetch a new quote daily
setInterval(fetchAndStoreQuote, 24 * 60 * 60 * 1000); // 24 hours in milliseconds