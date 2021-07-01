function fetchData() {
    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(data) {
            // let randomQuote = Math.floor(Math.random() * 1000);
            // document.getElementById('quote').innerHTML = data[randomQuote].text;
            // document.getElementById('author').innerHTML = data[randomQuote].author;
            let randomQuote = Math.floor(Math.random() * 1000);
            const quote = document.getElementById('quote');
            quote.innerHTML = data[randomQuote].text;
            const author = document.getElementById('author');
            author.innerHTML = data[randomQuote].author;
        });
}



function reloadPage() {
    location.reload();
}
fetchData();