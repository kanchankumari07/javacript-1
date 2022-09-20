et pokemonRepository = (function () {
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

$('#myModal').modal('show')

function showModal(title, text,imageUrl) {
  let modalContainer=document.querySelector('#myModal');
  // Clear all existing modal content
  modalContainer.innerHTML = '';
  $('#myModal').modal('show')

  let modal = document.createElement('div');
  modal.classList.add('modal');

  // Add the new modal content
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let contentElement = document.createElement('p');
  contentElement.innerText = text;

  let imageElement = document.createElement("img");
  imageElement.setAttribute('src',imageUrl);
  imageElement.setAttribute("width", "100");
  imageElement.setAttribute("height", "200");
  

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(imageElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
}

function hideModal() {
 modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});


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




 



