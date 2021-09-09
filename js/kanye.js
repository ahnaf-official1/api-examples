const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = quote => {
    console.log(quote.quote);
    const quotesElement = document.getElementById('quote');
    quotesElement.innerText = quote.quote;
}