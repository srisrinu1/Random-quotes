// function fetchData() {
//     fetch("https://type.fit/api/quotes")
//         .then(function(response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function(data) {
//             // let randomQuote = Math.floor(Math.random() * 1000);
//             // document.getElementById('quote').innerHTML = data[randomQuote].text;
//             // document.getElementById('author').innerHTML = data[randomQuote].author;
//             let randomQuote = Math.floor(Math.random() * 1000);
//             const quote = document.getElementById('quote');
//             quote.innerText = data[randomQuote].text;
//             const author = document.getElementById('author');
//             author.innerText = data[randomQuote].author;
//         });
// }



// function reloadPage() {
//     location.reload();
// }
// fetchData
function fetchData() {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "81665c2656msh54a72078ce2b5aap1da02ajsn725850b041c1",
                "x-rapidapi-host": "quotes15.p.rapidapi.com"
            }
        })
        .then(response => {
            return (response.json());
        })
        .then(data => {
            // console.log(data["content"]);
            let quote = document.getElementById("quote");
            quote.innerText = data["content"];
        })
        .catch(err => {
            console.error(err);
        });
}

function reloadPage() {
    location.reload();
}
fetchData();