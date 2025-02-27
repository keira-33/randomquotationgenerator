function generateQuote() {
    const quotes = [
        {
            quote: "It does not matter how slowly you go so long as you do not stop.", 
            author: "Confucious"
        },
        {
            quote: "In three words I can sum up everything I've learned about life: it goes on.", 
            author: "Robert Frost"
        },
        {
            quote: "It is never too late to be what you might have been. ", 
            author: "George Elliot"
        },
        {
            quote: "You must be the change you wish to see in the world.",
            author: "Mahatma Gandhi "
        },
        {
            quote: "Life has no limitations, except the ones you make.",
            author: "Les Brown"
        }
    ];
    //math.floor returns a whole number version of the Math.random number
    let arrayIndex = Math.floor(Math.random() * quotes.length)
    //math.random gives random num from 0-.99999
    //math.floor returns nearest whole integer (rounding down)--> ex 2.97 becomes 2
    // console.log(arrayIndex)
    document.getElementById("quotation").innerHTML = "&quot;"+quotes[arrayIndex].quote+"&quot;";
    document.getElementById("author").innerHTML = "By: "+quotes[arrayIndex].author;
}

//when this window loads, do this...
window.onload = function () {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote)
}