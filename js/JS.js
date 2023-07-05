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
  var busqueda = document.querySelector("#nPokemon").value;
  
  if (busqueda > 0) {
    var data = document.querySelector("#nPokemon").data;
  var url = data.results[busqueda-1].url;
    var objXMLHttpRequest = new XMLHttpRequest();

    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          let nombre = json.name;
          let uriImg = json.sprites.other.home.front_default;
          console.log(json);
          let html =
            `<div class="card" style="width: 18rem; background-color: rgba(255, 255, 255, 0); border: none;">
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

 
      }
    };
    objXMLHttpRequest.open("GET", url);
    objXMLHttpRequest.send();
  }

  if (busqueda <= 0) {

    let html1 =
    `<div class="card" style="width: 18rem; background-color: rgba(255, 255, 255, 0); border: none;">
    <img src="` +
    "../img/MissingNO.png" +
            `" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">` +
            "MissingNO." +
            `</h5>
      <p class="card-text"></p>
    </div>
  </div>`;
  tarjetas.innerHTML = html1;
  }

}