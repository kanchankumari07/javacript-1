let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
   function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
 
  function addListItem(pokemon) {
    
    let pokemonList = document.querySelector(".list-group");;
    let listpokemon = document.createElement("li");
    listpokemon.classList.add('group-list-item');
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add( 'btn', 'btn-primary','my-1');
   
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target','#myModal');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  


function showDetails(item) {
  pokemonRepository. loadDetails(item).then(function(){
     console.log(item);
     showModal(item.name, item.height,item.imageUrl);
 });
}

function showModal(title, text, imageUrl) {
  var $titleElement = $('<h5>' + title + '</h5>');
  var $heightElement = $('<p>Height: ' + text + '</p>');
  $('#pokemon-title').html($titleElement);
  $('#pokemon-height').html($heightElement);
  $('#pokemon-image').attr('src', imageUrl);
}



  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails:showDetails,
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});  
 
  
  
   

 



