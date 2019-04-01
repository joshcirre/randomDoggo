const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector(".card");

const promise = fetch(DOG_URL);
promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
  });

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

function clearBox(elementID) {
  document.querySelector(elementID).innerHTML = "";
}

function run() {
  clearBox(".card");
  addNewDoggo();
}

document.querySelector(".newdoggo").addEventListener("click", run);
