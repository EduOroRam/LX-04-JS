const fetchPokemon = () => {
    const pokeInput = document.getElementById('pokeInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    fetch(url).then((res) => {
        if (res.status != '200' || res.url == 'https://pokeapi.co/api/v2/pokemon/'){
            document.getElementById('pokeImg').src = './assets/pikachu-sad.gif';
            document.getElementById('pokeNombre').innerHTML = ':(';
            document.getElementById('pokeID').innerHTML = ':(';
            document.getElementById('base_XP').innerHTML = ':(';
            document.getElementById('height').innerHTML = ':('; 
            document.getElementById('weight').innerHTML = ':('; 
            document.getElementById('numAbilities').innerHTML = ':(';
            document.getElementById('pokeMoves').innerHTML = ':(';
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data){
            //console.log(data)
            document.getElementById('pokeNombre').innerHTML = data.name;
            document.getElementById('pokeImg').src = data.sprites.other.dream_world.front_default;
            document.getElementById('pokeID').innerHTML = data.id;
            document.getElementById('base_XP').innerHTML = data.base_experience;
            document.getElementById('height').innerHTML = data.height; 
            document.getElementById('weight').innerHTML = data.weight; 
            document.getElementById('numAbilities').innerHTML = data.abilities.length;
            document.getElementById('pokeMoves').innerHTML = data.moves.length;
        }
    });
}

const randomPokemon = () => {
    let orderNum = randomPokeOrder(1, 898);
    document.getElementById('pokeInput').value = orderNum;

    fetchPokemon();
}
const randomPokeOrder = (min, max) => Math.floor(Math.random() * (max - min)) + min;