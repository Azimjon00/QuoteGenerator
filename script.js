const quotes = [
    {
        text: "We have two ears and one mouth so that we can listen twice as much as we speak.",
        author: "Epictetus"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    }
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newBtn = document.getElementById('newBtn');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote(quote) {
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `-${quote.author}`;
}

newBtn.addEventListener('click', () => {
    const quote = getRandomQuote();
    displayQuote(quote);
});
