document.addEventListener("DOMContentLoaded", event => {
  const pokemonInput = document.getElementById('pokemon-search');

  pokemonInput.addEventListener('keyup', event => {
    fetchPokemon(event.value);

  })
})

function fetchPokemon(searchTerm) {
  return fetch(url).then(resp => resp.json());
}
