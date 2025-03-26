const pokeInput = document.querySelector('#pokeInput')
const pokeForm = document.querySelector('#pokeForm')
const pokeInfo = document.querySelector('#pokeInfo')

pokeForm.addEventListener('submit', request)

async function request(e){
    e.preventDefault()
    try{
        const pokeName = Math.ceil(Math.random() * 1025)
        const pokeRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        const jsonRequest = await pokeRequest.json()

        let sprite = jsonRequest.sprites.front_default
        let spriteShiny = jsonRequest.sprites.front_shiny
        let name = jsonRequest.name
        let id = jsonRequest.id
        let type1 = jsonRequest.types[0].type.name
        let type2
        if(jsonRequest.types.length == 2){type2 = jsonRequest.types[1].type.name}
        let height = jsonRequest.height
        let weight = jsonRequest.weight

        const background = document.querySelector("body") 
        background.classList.remove(...background.classList)
        background.classList.add("type")
        switch(type1){
            case "bug":
                type1 = 'Inseto'
                background.classList.add("bug")
                break;
            case "dark":
                type1 = 'Sombrio'
                background.classList.add("dark")
                break;
            case "dragon":
                type1 = 'Dragão'
                background.classList.add("dragon")
                break;
            case "electric":
                type1 = 'Elétrico'
                background.classList.add("electric")
                break;
            case "fairy":
                type1 = 'Fada'
                background.classList.add("fairy")
                break;
            case "fighting":
                type1 = 'Lutador'
                background.classList.add("fighting")
                break;
            case "fire":
                type1 = 'Fogo'
                background.classList.add("fire")
                break;
            case "flying":
                type1 = 'Voador'
                background.classList.add("flying")
                break;
            case "ghost":
                type1 = 'Fantasma'
                background.classList.add("ghost")
                break;
            case "grass":
                type1 = 'Grama'
                background.classList.add("grass")
                break;
            case "ground":
                type1 = 'Terra'
                background.classList.add("ground")
                break;
            case "ice":
                type1 = 'Gelo'
                background.classList.add("ice")
                break;
            case "normal":
                type1 = 'Normal'
                background.classList.add("normal")
                break;
            case "poison":
                type1 = 'Veneno'
                background.classList.add("poison")
                break;
            case "psychic":
                type1 = 'Psíquico'
                background.classList.add("psychic")
                break;
            case "rock":
                type1 = 'Pedra'
                background.classList.add("rock")
                break;
            case "steel":
                type1 = 'Ferro'
                background.classList.add("steel")
                break;
            case "water":
                type1 = 'Água'
                background.classList.add("water")
                break;
        }

        switch(type2){
            case "bug":
                type2 = 'Inseto'
                break;
            case "dark":
                type2 = 'Sombrio'
                break;
            case "dragon":
                type2 = 'Dragão'
                break;
            case "electric":
                type2 = 'Elétrico'
                break;
            case "fairy":
                type2 = 'Fada'
                break;
            case "fighting":
                type2 = 'Lutador'
                break;
            case "fire":
                type2 = 'Fogo'
                break;
            case "flying":
                type2 = 'Voador'
                break;
            case "ghost":
                type2 = 'Fantasma'
                break;
            case "grass":
                type2 = 'Grama'
                break;
            case "ground":
                type2 = 'Terra'
                break;
            case "ice":
                type2 = 'Gelo'
                break;
            case "normal":
                type2 = 'Normal'
                break;
            case "poison":
                type2 = 'Veneno'
                break;
            case "psychic":
                type2 = 'Psíquico'
                break;
            case "rock":
                type2 = 'Pedra'
                break;
            case "steel":
                type2 = 'Ferro'
                break;
            case "water":
                type2 = 'Água'
                break;
            default:
                type2 = null
                break
        }

        pokeInfo.innerHTML = `<img src="${sprite}" alt="${name}">`
        pokeInfo.innerHTML += `<img src="${spriteShiny}" alt="${name} shiny">`
        pokeInfo.innerHTML += `<p>Nome: ${name}</p>`
        pokeInfo.innerHTML += `<p>Pokedex ID: ${id}</p>`
        if(type2){pokeInfo.innerHTML += `<p>Tipo: ${type1} / ${type2}</p>`}
        else{pokeInfo.innerHTML += `<p>Tipo: ${type1}</p>`}
        pokeInfo.innerHTML += `<p>Tamanho: ${height/10}m || ${weight/10}kg</p>`
    }
    catch{
        pokeInfo.innerHTML = `<p>Pokemon inexistente</p>`
    }
}