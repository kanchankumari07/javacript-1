let pokemonlist=[
{
  name:"Bulbasaur",
  height:2,
  type:['grass', 'poison'],
},


  {
    name:'Venusaur',
  height:2,
  type: ['grass', 'poison'],
  },
  


  {
    name: "weedle",
  height:2,
  type: ['bug','poison'],
},

]
    console.log(pokemonlist);

  }
  pokemonlist.forEach(function(pokemon){
    console.log('name','height','type');
  };
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

  

