


// const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// const result = document.getElementById("result");
// const btn = document.getElementById("search-btn");

// btn.addEventListener("click", () => {
//     let inpWord = document.getElementById("inp-word").value;
//     // console.log(inpWord);
//     fetch(`${url}${inpWord}`)
//     .then((response)=>response.json())
//     .then((data)=> console.log(data));
// });
//till here the data of the given input word can be printed



const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");


btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    // console.log(inpWord);

    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
        <div class="word">
                <h3>${inpWord}</h3>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
            ${data[0].meanings[0].definitions[0].example}
            </p>
        `;
        document.getElementById("inp-word").value = "";
    })
    .catch((error) => {
        result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
       

});