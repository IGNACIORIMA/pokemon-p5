import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';
import './styles/pokeCard.css';

const PokeCard = ({url}) => {

    const [pokemon, getPokemon] = useFetch();

    const navigate = useNavigate();

    useEffect(() => {
        getPokemon(url);
    }, [])
    
    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

  return (
    <div>
        <article className='pokeCard' onClick={handleClick}>
            <div className={`pokeCard_bg ${pokemon?.types[0].type.name}`}></div>
            <figure className='pokeCard_img'>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
            </figure>
            <h3 className='pokeCard_name'>{pokemon?.name}</h3>
            <ul className='pokeCard_types'>
                {
                    pokemon?.types.map(type => (
                        <li className={`slot${type.slot}`} key={type.type.url}>
                            {type.type.name}
                        </li>
                    ))
                }
            </ul>
            <span className='pokeCard_span'>Type: </span>
            <hr className='pokeCard_hr'/>
        <div>
            <ul className='pokeCard_stats'>
                {
                    pokemon?.stats.map(stat => (
                        !stat.stat.name.includes('special') &&
                        <li key={stat.stat.url}>
                            <span>{stat.stat.name}</span>
                            <span>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
        </article>
    </div>
  )
}

export default PokeCard