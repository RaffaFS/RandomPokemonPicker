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

        console.log(jsonRequest)
        pokeInfo.innerHTML = `<img src="${sprite}" alt="${name}">`
        pokeInfo.innerHTML += `<img src="${spriteShiny}" alt="${name} shiny">`
        pokeInfo.innerHTML += `<p>Name: ${name}</p>`
        pokeInfo.innerHTML += `<p>Pokedex ID: ${id}</p>`
        if(type2){pokeInfo.innerHTML += `<p>Type: ${type1} / ${type2}</p>`}
        else{pokeInfo.innerHTML += `<p>Type: ${type1}</p>`}
        pokeInfo.innerHTML += `<p>Size: ${height/10}m || ${weight/10}kg</p>`
    }
    catch{
        console.log('Deu ruim')
        pokeInfo.innerHTML = `<p>Pokemon inexistente</p>`
    }
}