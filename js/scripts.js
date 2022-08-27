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

