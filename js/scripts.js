let pokemonRepository = (function () {
    let repository = [
        {
            name: 'Bulbasaur',
            height: 7,
            type: ['grass', 'poison']
        },
        {
            name: 'Squirtle',
            height: 5,
            type: ['water']
        },
        {
            name: 'Charmander',
            height: 4.5,
            type: ['fire', 'flying']
        }
    ];

    function add(pokemon) {
        repository.push(pokemon);
    }

    function getAll() {
        return repository;
    }

    function addListItem(pokemon) {
        let $pokemonList = document.querySelector('.pokemon-list');
        let $listItem = document.createElement('li')
        let $button = document.createElement('button');
        $button.innerHTML = pokemon.name

        $pokemonList.appendChild($listItem);
        $listItem.appendChild($button);
        $button.classList.add('pokemon-button');
        // event listener within function
        // $button.addEventListener('click', function (e) {
        //     showDetails(pokemon);
        // })
        clickPokemonButtonHandler($button, pokemon);

    }
    // Optional bonus
    function clickPokemonButtonHandler(button, pokemonObject) {
        button.addEventListener('click', function () {
            showDetails(pokemonObject)
        })
    }

    function showDetails(pokemon) {
        console.log(pokemon)
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();





pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
})  

//task1.7//
let pokemonRepository = (function () {
  let pokemonlist = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }
 
  function addListItem(pokemon) {
  const $pokemonList = document.querySelector('.pokemon-list');
  const $listItem = document.createElement('li')
  const $button = document.createElement('button');
  $button.innerHTML = pokemon.name

  $pokemonList.appendChild($listItem);
  $listItem.appendChild($button);
  $button.classList.add('pokemon-button');
  // event listener within function
  // $button.addEventListener('click', function (e) {
  //     showDetails(pokemon);
  // })
  clickPokemonButtonHandler($button, pokemon);
  }

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
  console.log(pokemon)
})






pokemonRepository.getAll().forEach(function (pokemon) {
pokemonRepository.addListItem(pokemon)
})
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

return {
  add: add,
  getAll: getAll,
  addlist:addlist,
  loadList: loadList,
  loadDetails:loadDetail,
  showDetails:showDetails,
};



pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
})
    
