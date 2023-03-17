var requestCharAll = "https://rickandmortyapi.com/api/character/[703,388,321,7,26,47,81,162,192,279,282,306,196,726,562,543,507,717,548,696]";

fetch(requestCharAll)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});