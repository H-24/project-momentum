const quotes = [
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "-Theodore Roosevelt"
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author: "-Helen Keller"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "-Nelson Mandela"    
    },
    {
        quote: "Despite the forecast, live like it's spring.",
        author: "-Lilly Pulitzer"
    },
    {
        quote: "Love asks me no questions, and gives me endless support.",
        author: "-William Shakespeare"
    },
    {
        quote: "The way to love anything is to realize that it might be lost.",
        author: "-G.K. Chesterton"
    },
    {
        quote: "Love doesn't make the world go round. Love is what makes the ride worthwhile.",
        author: "-Franklin P.jones"
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "-Michael John Bobak"
    },
    {
        quote: "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
        author: "-Barbara Bush"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "-Winston Churchill"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;