var requestCharAll = "https://rickandmortyapi.com/api/character?page=29";

fetch(requestCharAll)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});