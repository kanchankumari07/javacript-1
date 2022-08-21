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
