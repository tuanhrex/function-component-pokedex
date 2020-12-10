import React, { useState } from 'react';
import Axios from 'axios'

function Pokedex () {
    const [pokemonName, setPokemonName] = useState('pikachu');
    const [imageUrl, setImageUrl] = useState('');

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