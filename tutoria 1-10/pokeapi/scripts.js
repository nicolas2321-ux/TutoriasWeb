// Referencias a elementos HTML
const pokemonForm = document.getElementById('pokemon-form');
const pokemonInput = document.getElementById('pokemon-input');
const pokemonInfo = document.getElementById('pokemon-info');

// Función para buscar y mostrar información del Pokémon
async function buscarPokemon(nombre) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    console.log(response)
    if (!response.ok) {
      throw new Error('No se pudo encontrar el Pokémon.');
    }
    const data = await response.json();
    console.log(data)
    mostrarPokemon(data);
  } catch (error) {
    pokemonInfo.innerHTML = `<p>${error}</p>`;
  }
}

// Función para mostrar la información del Pokémon
function mostrarPokemon(pokemon) {
  const nombre = pokemon.name;
  const imagen = pokemon.sprites.front_default;
  const tipos = pokemon.types.map(type => type.type.name).join(', ');

  const html = `
    <h2>${nombre}</h2>
    <img src="${imagen}" alt="${nombre}">
    <p>Tipo(s): ${tipos}</p>
  `;

  pokemonInfo.innerHTML = html;
}

// Manejo del envío del formulario
pokemonForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const nombrePokemon = pokemonInput.value.toLowerCase();
  buscarPokemon(nombrePokemon);
  pokemonInput.value = ''; // Limpiar el campo de búsqueda
});

// Carga inicial
buscarPokemon('pikachu'); 
