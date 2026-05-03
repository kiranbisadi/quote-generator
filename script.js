let Quote = document.getElementById("quote");
let Author = document.getElementById("author");
let button = document.getElementById("newquote")

let api = [];

fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json").then(response => response.json())
    .then(data => {
        api = data;
        generateQuote();
    })
    .catch(error =>{
        console.log("Error fetching quotes:",error);
    })
function generateQuote() {
    if (api.length === 0) return;
    let randomquote = Math.floor(Math.random() * api.length)
    Quote.textContent = api[randomquote].text;
    Author.textContent = api[randomquote].author || "unknown";
}
button.addEventListener("click", generateQuote)
