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
                background.classList.add("bug")
                break;
            case "dark":
                background.classList.add("dark")
                break;
            case "dragon":
                background.classList.add("dragon")
                break;
            case "electric":
                background.classList.add("electric")
                break;
            case "fairy":
                background.classList.add("fairy")
                break;
            case "fighting":
                background.classList.add("fighting")
                break;
            case "fire":
                background.classList.add("fire")
                break;
            case "flying":
                background.classList.add("flying")
                break;
            case "ghost":
                background.classList.add("ghost")
                break;
            case "grass":
                background.classList.add("grass")
                break;
            case "ground":
                background.classList.add("ground")
                break;
            case "ice":
                background.classList.add("ice")
                break;
            case "normal":
                background.classList.add("normal")
                break;
            case "poison":
                background.classList.add("poison")
                break;
            case "psychic":
                background.classList.add("psychic")
                break;
            case "rock":
                background.classList.add("rock")
                break;
            case "steel":
                background.classList.add("steel")
                break;
            case "water":
                background.classList.add("water")
                break;
        }

        pokeInfo.innerHTML = `<img src="${sprite}" alt="${name}">`
        pokeInfo.innerHTML += `<img src="${spriteShiny}" alt="${name} shiny">`
        pokeInfo.innerHTML += `<p>Name: ${name}</p>`
        pokeInfo.innerHTML += `<p>Pokedex ID: ${id}</p>`
        if(type2){pokeInfo.innerHTML += `<p>Type: ${type1} / ${type2}</p>`}
        else{pokeInfo.innerHTML += `<p>Type: ${type1}</p>`}
        pokeInfo.innerHTML += `<p>Size: ${height/10}m || ${weight/10}kg</p>`
    }
    catch{
        pokeInfo.innerHTML = `<p>Pokemon inexistente</p>`
    }
}