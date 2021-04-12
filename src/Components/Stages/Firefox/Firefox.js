import React, { useEffect, useContext, useState } from 'react';
import './Firefox.css';
import { DataContext } from '../DataGame/DataContext';
import duckLogo from '../../../img/duck-logo.png';
import axios from 'axios';

export const Firefox = props => {
    const [surf, setSurf] = useState('one');
    const [foodSe, setFoodSe] = useState('');
    const [fetchedFood, setFetchedFood] = useState('');
    const [datas, setDatas] = useContext(DataContext);


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
        const apiId = 'XXXX';
        const apiKey = 'XXXX';

        axios.get(`https://api.edamam.com/search?q=${foodSe}&app_id=${apiId}&app_key=${apiKey}&from=0&to=4`)
            .then(res => {
                setFetchedFood(res.data);

                if (res.data.hits.length === 0) {
                    setSurf('four');
                }

                setTimeout(() => {
                    setDatas(previousData => ({
                        ...previousData,
                        enterFour: true
                    }));
                }, 6000);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const nextGame = () => {
        setDatas(previousData => ({
            ...previousData,
            stage: 'StageFour'
        }));
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
                        <input value={foodSe} onChange={handleFoodChange} />
                        <input className="input-food" type="submit" value="Go for it!" />
                    </form>
                </div>
            ) : null}
            {surf === 'three' ? (
                <div className="search-area">{fetchedFood !== '' ?
                    <div className="search-area_items">
                        {fetchedFood.hits.map(elem => {
                            return (<div className="food-items">
                                <img src={elem.recipe.image} alt={elem.recipe.label} width="200px" />
                                <h1>{elem.recipe.label}</h1>
                                <p>Ingredients:</p>
                                {elem.recipe.ingredientLines.map(ing => {
                                    return <p>• {ing}</p>
                                })}
                            </div>
                            )
                        })}
                    </div> : null}
                </div>
            ) : null}
            {surf === 'four' ? (
                <div className="ff-bg">
                    <div>
                        <h1>It seems like you are looking for the wrong food.</h1>
                        <p>Don't worry, soon everything will be over...</p>
                        <p>Just wait for it.</p>
                    </div>
                </div>
            ) : null}
        </>
    )
}


