import React, { useRef } from 'react'
import { setTrainer } from '../slices/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css';

const HomePage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setTrainer(textInput.current.value.trim()));
        textInput.current.value = '';
        navigate('/pokedex')
    }

  return (
    <div className='homepage'>
        <figure className='homepage_title'>
          <img src="../../../assets/pokedex_logo.png" alt="pokedex img" />
        </figure>
        <h2 className='homepage_wave'>Hi trainer!</h2>
        <p className='homepage_p'>Let's start! First give me your name</p>
        <form className='homepage_form' onSubmit={handleSubmit}>
            <input ref={textInput} type="text" />
            <button>Start</button>
        </form>
    </div>
  )
}

export default HomePage