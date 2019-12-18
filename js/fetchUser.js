
fetch("https://randomuser.me/api/")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
  document.getElementById("imagecontainer").innerHTML = `
    <img src="${myJson.results[0].picture.large}" alt="" srcset="">
    <h1>${myJson.results[0].name.first} ${myJson.results[0].name.last}</h1>
    `;
  });