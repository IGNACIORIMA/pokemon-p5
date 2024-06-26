import React from 'react'
import './styles/pokeheader.css'

const PokeHeader = () => {
  return (
    <div className='pokeHeader'>
        <div className='pokeHeader_red'>
          <figure className='pokeHeader_img'>
            <img src="../../../assets/pokedex_logo.png" alt="pokedex image" />
          </figure>
        </div>
        <div className='pokeHeader_black'>
          <div className='pokeHeader_outcircle'>
            <div className='pokeHeader_incircle'></div>  
          </div>    
        </div>
    </div>
  )
}

export default PokeHeader