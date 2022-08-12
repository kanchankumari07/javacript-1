let pokemonRepository = (function () {
  let pokemonlist = [
    {
      name: "Bulbasaur",
      height: 2,
      type: ["grass", "poison"],
    },

    {
      name: "Venusaur",
      height: 2,
      type: ["grass", "poison"],
    },

    {
      name: "weedle",
      height: 2,
      type: ["bug", "poison"],
    },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();




   let pokemonlistrepository=(function){
  let pokemonlist=[]
  let apiURL='https://pokeapi.co/api/v2/pokemon/?limit=150';
}
function LoadList(){
  return fetch(apiURL);
}
let pokemon = {
          name: pokemon name,
          detailsUrl:pokemon.URL,
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  function loadDetails(pokemon) {
   let url = apiURL
   return fetch(apiURL).then(function (response) {
     return response.json();
   }).then(function (details) {
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
   loadList: loadList,
   loadDetails: loadDetails
 };
})();
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}



]
  console.log(pokemonlist);

  }
  pokemonlist.forEach(function(pokemon){
    let var=document.queryselector(pokelist);
    console.log(var);
    addlist();

    let pokemonList = document.createElement('li')

    let button = document.createElement('button')
     button.innerHTML=pokemon.name;
     li.appendchild(button);
     ul.appendchild(li):

  };


function.pokelistItem(){
  showDetails(){
    loadDetails()
  };
  console.log(pokemon);

  let button = document.querySelector('button');
button.addEventListener('click', function (showsDetails) {
  console.log(pokemon);
});


}

  let pokemonRepository = (function () {
    let pokemonList = [];

    function add(pokemon) {
      pokemonList.push(pokemon);
    }

    function getAll() {
      return pokemonList;
    }

    return {
      add: add,
      getAll: getAll
    };
  })();
