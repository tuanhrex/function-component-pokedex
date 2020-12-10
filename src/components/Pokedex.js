import React, { useState, useEffect } from 'react';
import Axios from 'axios'

function Pokedex () {
    const [pokemonName, setPokemonName] = useState('pikachu');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (pokemonName === '') {
            return
        }

        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((res) => {
            setImageUrl(res.data.sprites.other['official-artwork'].front_default)
        }).catch((err) => {
            setImageUrl('')
        })
      });

    return(
        <div>
             <h1>My React Pokedex</h1>
                <input value={pokemonName} onChange={(e) => setPokemonName(e.target.value.toLocaleLowerCase())} />
                <div>

                <img src={imageUrl} />
                </div>
        </div>
    )
}

export default Pokedex