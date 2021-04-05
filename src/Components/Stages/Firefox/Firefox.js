import React, { useEffect, useContext, useState } from 'react';
import './Firefox.css';
import { DataContext } from '../DataGame/DataContext';
import duckLogo from '../../../img/duck-logo.png';
import axios from 'axios';

export const Firefox = props => {
    const [surf, setSurf] = useState('one');
    const [foodSe, setFoodSe] = useState('');
    const [fetchedFood, setFetchedFood] = useState('');

    const handleClick = () => {
        setSurf('two');
    }

    const handleFoodChange = e => {
        e.preventDefault()
        setFoodSe(e.target.value);
    }

    const getFood = e => {
        e.preventDefault()
        setSurf('three');
        const apiId = 'xxxx';
        const apiKey = 'xxxx';

        axios.get(`https://api.edamam.com/search?q=${foodSe}&app_id=${apiId}&app_key=${apiKey}&from=0&to=4`)
            .then(res => {
                console.log(res)
                setFetchedFood(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <>
            {surf === 'one' ? (
                <div className="ff-bg">
                    <img src={duckLogo} alt="DuckDuckGo" />
                    <button onClick={handleClick}>Search for food</button>
                </div>
            ) : null}
            {surf === 'two' ? (
                <div className="ff-bg">
                    <img src={duckLogo} alt="DuckDuckGo" />
                    <form onSubmit={getFood}>
                        <label>
                            <textarea value={foodSe} onChange={handleFoodChange} />
                        </label>
                        <input type="submit" value="Go for it!" />
                    </form>
                </div>
            ) : null}
            {surf === 'three' ? (
                <div className="ff-bg">
                    <img src={duckLogo} alt="DuckDuckGo" />
                    <div>{fetchedFood !== '' ? <div>
                        {fetchedFood.hits.map(elem => {
                            return (<div className="firefox_food-search">
                                <img src={elem.recipe.image} alt={elem.recipe.label} width="200px" />
                                <h1>{elem.recipe.label}</h1>
                            </div>)
                        })}
                    </div> : null}</div>
                </div>
            ) : null}
        </>
    )
}


