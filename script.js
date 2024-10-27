document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    if (!searchInput) {
        alert('Please enter a Pokémon name or ID');
        return;
    }
    searchPokemon(searchInput);
});

async function searchPokemon(query) {
    // Limpiar el contenido anterior
    clearPokemonInfo();

    try {
        // Solicitar información del Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!response.ok) {
            alert('Pokémon not found');
            return;
        }
        const data = await response.json();

        // Actualizar la información del Pokémon en el DOM
        updatePokemonInfo(data);
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        alert('Pokémon not found');
    }
}

function updatePokemonInfo(data) {
    // Actualizar los elementos con la información del Pokémon
    document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
    document.getElementById('pokemon-id').textContent = `#${data.id}`;
    document.getElementById('weight').textContent = data.weight;
    document.getElementById('height').textContent = data.height;
    document.getElementById('hp').textContent = data.stats[0].base_stat;
    document.getElementById('attack').textContent = data.stats[1].base_stat;
    document.getElementById('defense').textContent = data.stats[2].base_stat;
    document.getElementById('special-attack').textContent = data.stats[3].base_stat;
    document.getElementById('special-defense').textContent = data.stats[4].base_stat;
    document.getElementById('speed').textContent = data.stats[5].base_stat;

    // Actualizar tipos
    const typesContainer = document.getElementById('types');
    data.types.forEach(typeInfo => {
        const typeElement = document.createElement('p');
        typeElement.textContent = typeInfo.type.name.toUpperCase();
        typesContainer.appendChild(typeElement);
    });

    // Agregar la imagen del sprite
    const spriteContainer = document.getElementById('sprite-container');
    const spriteImage = document.createElement('img');
    spriteImage.id = 'sprite';
    spriteImage.src = data.sprites.front_default;
    spriteImage.alt = data.name;
    spriteContainer.appendChild(spriteImage);
}

function clearPokemonInfo() {
    // Limpiar la información previa del Pokémon
    document.getElementById('pokemon-name').textContent = '';
    document.getElementById('pokemon-id').textContent = '';
    document.getElementById('weight').textContent = '';
    document.getElementById('height').textContent = '';
    document.getElementById('hp').textContent = '';
    document.getElementById('attack').textContent = '';
    document.getElementById('defense').textContent = '';
    document.getElementById('special-attack').textContent = '';
    document.getElementById('special-defense').textContent = '';
    document.getElementById('speed').textContent = '';
    document.getElementById('types').innerHTML = '';
    document.getElementById('sprite-container').innerHTML = '';
}
