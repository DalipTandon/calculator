const quote=document.getElementById("quote");
const author=document.getElementById("author")
const api="https://api.quotable.io/random"; //api for random quote generator
async function getQuote(url){
    const response=await fetch(url);
    var data=await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getQuote(api)


//function used to share quote on twitter
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML+"---- by "+ author.innerHTML,"Tweet window","width=600","height=300")
}