import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/pokeInfo.css'

const PokeInfo = () => {

    const [pokemon, getPokemon] = useFetch();

    const { id } = useParams();

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        getPokemon(url);
    }, [])
    

    console.log(pokemon);

  return (
    <section className='pokeinfo'>
        <h2 className='pokeinfo_name'>{pokemon?.name}</h2>
        <figure className='pokeinfo_img'>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
        </figure>
        <ul className='pokeinfo_stats'>
          {
            pokemon?.stats.map(stat => (
              <li className='pokeinfo_stats-item' key={stat.stat.url}>
                <span>{stat.stat.name}</span><span>{stat.base_stat}/250</span>
                <div className='outbar'>
                  <div className='inbar' style={{width: `${stat.base_stat/2.5}%`}}></div>
                </div>
              </li>
            ))
          }
        </ul>
    </section>
  )
}

export default PokeInfo