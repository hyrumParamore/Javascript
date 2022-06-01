// Frog Game Code Stuff
// function rollImages(){
//     var counter = 0;
//     var interval = setInterval(function () {
//       if (counter === 10) {
//         clearInterval(interval);
//         return;
//       }
      
//       var imageValue = Math.floor(Math.random() * 5) + 1;
//       var imageFile = "img" + imageValue + ".png";
  
//       var theImage = document.getElementById("display");
//       theImage.src = imageFile;
  
//       counter++;
//     }, 500);
//   }

// ___________________________________________________________________________ //




//   Pokemon API



// for(numbers in number) {
// const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
// const outputElement = document.querySelector('.pokemon');



// Create a Ditto
var ditto = "https://pokeapi.co/api/v2/pokemon/ditto"
const dittooutput = document.querySelector('.ditto');
let results = null;
async function getDitto(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    createDitto(data);
    }
}

function createDitto(data) {
    const html = `<h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="image of ${data.name}">`;
    dittooutput.innerHTML = html;
}




// Create a Pikachu
var pikachu = "https://pokeapi.co/api/v2/pokemon/pikachu";
const pikachuoutput = document.querySelector('.pikachu');

async function getPikachu(pikachu) {
    const response = await fetch(pikachu);
    if (response.ok) {
        const data = await response.json();
        createPikachu(data);
    }
}

function createPikachu(data) {
    const html = `<h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="image of ${data.name}">`;
    pikachuoutput.innerHTML = html;
}


// Create a bulbasaur
var bulbasaur = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
const bulbasauroutput = document.querySelector('.bulbasaur');

async function getbulbasaur(bulbasaur) {
    const response = await fetch(bulbasaur);
    if (response.ok) {
        const data = await response.json();
        createbulbasaur(data);
    }
}

function createbulbasaur(data) {
    const html = `<h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="image of ${data.name}">`;
    bulbasauroutput.innerHTML = html;
}


// Create a charmander
var charmander = "https://pokeapi.co/api/v2/pokemon/charmander";
const charmanderoutput = document.querySelector('.charmander');

async function getcharmander(charmander) {
    const response = await fetch(charmander);
    if (response.ok) {
        const data = await response.json();
        createcharmander(data);
    }
}


function createcharmander(data) {
    const html = `<h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="image of ${data.name}">`;
    charmanderoutput.innerHTML = html;
    
}


// Create a squirtle
var squirtle = "https://pokeapi.co/api/v2/pokemon/squirtle";
const squirtleoutput = document.querySelector('.squirtle');

async function getsquirtle(squirtle) {
    const response = await fetch(squirtle);
    if (response.ok) {
        const data = await response.json();
        createsquirtle(data);
    }
}

function createsquirtle(data) {
    const html = `<h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="image of ${data.name}">`;
    squirtleoutput.innerHTML = html;

    // clearInterval(interval);
}


// Call Functions

getPikachu(pikachu);
getDitto(ditto);
getbulbasaur(bulbasaur);
getcharmander(charmander);
getsquirtle(squirtle);







const loop = 1


console.log("second: ", results);





var song = "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10";
const songoutput = document.querySelector('.song');

async function getsong(song) {
    const response = await fetch(song);
    if (response.ok) {
        const data = await response.json();
        createsong(data);
    }
}

function createsong(data) {
    const html = `<h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="image of ${data.name}">`;
    squirtleoutput.innerHTML = html;

    // clearInterval(interval);
}

getsong(song);  