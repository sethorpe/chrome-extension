const quoteText = document.getElementById('quote-text');
const newQuoteButton = document.getElementById('new-quote-button');

function fetchQuote(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = data.content;
    })
    .catch(error => {
        quoteText.textContent = 'Failed to fetch quote';
        console.error(error)
    });
}

newQuoteButton.addEventListener('click', fetchQuote);

// Fetch a new quote when the popup is opened
fetchQuote();