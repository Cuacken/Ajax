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

  if(busqueda >= 906 || busqueda <=0){
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let html2 =
      `<div class="card" style="width: 18rem; background-color: rgba(255, 255, 255, 0); border: none;">
    <img src="` +
      "../img/MissingNO" + getRandomInt(8) + ".png" +
      `" class="card-img-top" alt="..." id="pokemon">
    <div class="card-body">
      <h5 class="card-title" id="nombre2">` +
      "Missing" + `<br>` + " Number" +
      `</h5>
      <p class="card-text"></p>
      <img src="../img/unknown.png"
      class="card-img-top" alt="..." id="tipo1">
<p class="card-text"></p>
</div>
</div>`;
    tarjetas.innerHTML = html2;
  }
  else if (busqueda > 0 ) {
    var data = document.querySelector("#nPokemon").data;
    var url = data.results[busqueda - 1].url;
    var objXMLHttpRequest = new XMLHttpRequest();

    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          let nombre = json.species.name;
          let uriImg = json.sprites.other.home.front_default;
          console.log(json);
          let tipo1 = json.types[0].type.name;
          let tipo2 = undefined;
          if(json.types[1] != undefined){
            tipo2 = json.types[1].type.name;
          }
          console.log(tipo1);
          console.log(tipo2);
          let html =
            `<div class="card" style="width: 18rem; background-color: rgba(255, 255, 255, 0); border: none;">
    <img src="` +
            uriImg +
            `" class="card-img-top" alt="..." id="pokemon">
    <div class="card-body">
      <h5 class="card-title" id="nombre1">` +
            nombre[0].toUpperCase() + nombre.substring(1) +
            `</h5>`
            +
            `<img src="../img/`+ tipo1 +`.png"
             class="card-img-top" alt="..." id="tipo1">
            <img src="../img/` + tipo2 + `.png"
            class="card-img-top" alt="..." id="tipo2">
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

}

  function random() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max) + 1;
    }
    let tarjetas = document.querySelector("#ConteinerCard");
    var data = document.querySelector("#nPokemon").data;
    var busqueda = getRandomInt(499);
    var url = data.results[busqueda].url;
    console.log(busqueda);
    
  if(busqueda >= 906 || busqueda <=0){
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let html2 =
      `<div class="card" style="width: 18rem; background-color: rgba(255, 255, 255, 0); border: none;">
    <img src="` +
      "../img/MissingNO" + getRandomInt(8) + ".png" +
      `" class="card-img-top" alt="..." id="pokemon">
    <div class="card-body">
      <h5 class="card-title" id="nombre2">` +
      "Missing" + `<br>` + " Number" +
      `</h5>
      <p class="card-text"></p>
      <img src="../img/unknown.png"
      class="card-img-top" alt="..." id="tipo1">
<p class="card-text"></p>
</div>
</div>`;
    tarjetas.innerHTML = html2;
  }
  else if (busqueda > 0 ) {
    var data = document.querySelector("#nPokemon").data;
    var url = data.results[busqueda - 1].url;
    var objXMLHttpRequest = new XMLHttpRequest();

    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          let nombre = json.species.name;
          let uriImg = json.sprites.other.home.front_default;
          console.log(json);
          let tipo1 = json.types[0].type.name;
          let tipo2 = undefined;
          if(json.types[1] != undefined){
            tipo2 = json.types[1].type.name;
          }
          console.log(tipo1);
          console.log(tipo2);
          let html =
            `<div class="card" style="width: 18rem; background-color: rgba(255, 255, 255, 0); border: none;">
    <img src="` +
            uriImg +
            `" class="card-img-top" alt="..." id="pokemon">
    <div class="card-body">
      <h5 class="card-title" id="nombre1">` +
            nombre[0].toUpperCase() + nombre.substring(1) +
            `</h5>`
            +
            `<img src="../img/`+ tipo1 +`.png"
             class="card-img-top" alt="..." id="tipo1">
            <img src="../img/` + tipo2 + `.png"
            class="card-img-top" alt="..." id="tipo2">
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

}