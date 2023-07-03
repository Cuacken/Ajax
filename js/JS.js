function solicitudAJAX(params) {
  var url = "https://pokeapi.co/api/v2/pokemon?limit=905";
  let tarjetas = document.querySelector("#nPokemon");

  var objXMLHttpRequest = new XMLHttpRequest();

  objXMLHttpRequest.onreadystatechange = function () {
    if (objXMLHttpRequest.readyState === 4) {
      if (objXMLHttpRequest.status === 200) {
        let json = JSON.parse(objXMLHttpRequest.responseText);
        tarjetas.data = json;
      } else {
        alert("Error Code: " + objXMLHttpRequest.status);
        alert("Error Message: " + objXMLHttpRequest.statusText);
      }
    }
  };
  objXMLHttpRequest.open("GET", url);
  objXMLHttpRequest.send();
}

function buscar() {
  let tarjetas = document.querySelector("#ConteinerCard");
  var data = document.querySelector("#nPokemon").data;
  var busqueda = document.querySelector("#nPokemon").value - 1;
  var url = data.results[busqueda].url;
  console.log(data);
  console.log(tarjetas);

  if (busqueda >= 0) {
    var objXMLHttpRequest = new XMLHttpRequest();

    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          let nombre = json.name;
          let uriImg = json.sprites.other.home.front_default;
          console.log(json);
          let html =
            `<div class="card" style="width: 18rem;">
    <img src="` +
            uriImg +
            `" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">` +
            nombre +
            `</h5>
      <p class="card-text"></p>
    </div>
  </div>`;
          tarjetas.innerHTML = html;
        }

        else {
          alert("Error Code: " + objXMLHttpRequest.status);
          alert("Error Message: " + objXMLHttpRequest.statusText);
        }
      }
    };
    objXMLHttpRequest.open("GET", url);
    objXMLHttpRequest.send();
  }
  else if (busqueda >= 0) {
    let nombre0 = json.name;
    let uriImg0 = json.sprites.other.home.front_default;
    console.log(json);
    let html =
        `<div class="card" style="width: 18rem;">
    <img src="` +
          uriImg0 +
          `" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">` +
          nombre0 +
          `</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  }
}