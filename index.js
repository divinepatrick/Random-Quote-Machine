const textElement = document.getElementById('text');
const authorElement = document.getElementById('author');
const tweetQuoteElement = document.getElementById('tweet-quote');
const newQuoteButton = document.getElementById('new-quote');

// Function to get a random quote from the API
async function getRandomQuote() {
  try {
    const response = await fetch('http://api.quotable.io/random');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

// Function to update the quote and author elements
function updateQuote(quote) {
  textElement.textContent = quote.content;
  authorElement.textContent = `- ${quote.author}`;
  tweetQuoteElement.href = `https://twitter.com/intent/tweet?text="${quote.content}" - ${quote.author}`;
}

// Get a random quote on page load
getRandomQuote().then((quote) => updateQuote(quote));

// Get a new quote when the button is clicked
newQuoteButton.addEventListener('click', () => {
  getRandomQuote().then((quote) => updateQuote(quote));
});
