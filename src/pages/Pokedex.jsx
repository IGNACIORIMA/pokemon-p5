import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import store from '../store/redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/pokedex/PokeCard'
import PokeSelect from '../components/pokedex/PokeSelect'
import './styles/pokedex.css'

const Pokedex = () => {

    const trainer = useSelector((store) => store.trainer);

    const [inputValue, setInputValue] = useState('');

    const [typeFilter, setTypeFilter] = useState('');

    const [pokemons, getPokemons, getType] = useFetch();

    

    useEffect(() => {
        if (typeFilter) {
            getType(typeFilter);
        } else {
            const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
          getPokemons(url);

        }
    }, [typeFilter])

    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue(textInput.current.value.trim().toLowerCase());
        textInput.current.value = '';
    }

    const cbFilter = (pkmn) => {
        return pkmn.name.includes(inputValue);
    }

  return (
    <div className='pokedex'>
        <h3 className='pokedex_wave'><span>Welcome {trainer},</span> <span>here you can find your favorite pokemon</span></h3>
        <div className='pokedex_filters'>
            <form onSubmit={handleSubmit} action="">
                <input ref={textInput} type="text" />
                <button>Search</button>
            </form>
            <PokeSelect
                setTypeFilter={setTypeFilter}
            />
        </div>
        <div className='pokedex_container'>
            {
                pokemons?.results.filter(cbFilter).map((pkmn) => (
                    <PokeCard
                        key={pkmn.url}
                        url={pkmn.url}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Pokedex