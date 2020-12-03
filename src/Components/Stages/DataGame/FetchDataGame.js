import React, { useState, useContext } from 'react';
import './FetchDataGame.css';
import { DataContext } from './DataContext';

export const FetchDataGame = (props) => {
    const [username, setUsername] = useState('');
    const [datas, setDatas] = useContext(DataContext);

    const handleChangeName = e => {
        setUsername(e.target.value);
    }

    const handleSubmitName = e => {
        e.preventDefault();
        setDatas(previousData => ({
            ...previousData,
            name: username,
            stageOneComp: true
        }));
    }

    const destroy = () => {
        document.getElementById("destroy-button").style.display = "none";
        document.getElementById("go-button").innerHTML = "NOW I'm happy... Let's go!";

        document.getElementById("stageOneCanvas").style.backgroundColor = "black";
        document.getElementById("backyOne").style.transition = "0.88s";
        document.getElementById("backyTwo").style.transition = "0.80s";
        document.getElementById("backyThree").style.transition = "0.6s";
        document.getElementById("backyFour").style.transition = "2s";
        document.getElementById("backySix").style.transition = "0.80s";
        document.getElementById("backySeven").style.transition = "0.80s";
        document.getElementById("backyEight").style.transition = "0.80s";
        document.getElementById("backyNine").style.transition = "0.9s";

        document.getElementById("backyOne").style.top = "280vh";
        document.getElementById("backyTwo").style.right = "-280vh";
        document.getElementById("backyThree").style.right = "-280vh";
        document.getElementById("backyFour").style.bottom = "-280vh";
        document.getElementById("backySix").style.top = "-280vh";
        document.getElementById("backySeven").style.right = "-280vh";
        document.getElementById("backyEight").style.left = "-280vh";
        document.getElementById("backyNine").style.bottom = "-280vh";

        setTimeout(() => {
            document.getElementById("stageOneCanvas").style.transition = "0.08s";
            document.getElementById("stageOneCanvas").style.left = "3vw";
            setTimeout(() => {
                document.getElementById("stageOneCanvas").style.left = "-3vw";
                document.getElementById("stageOneCanvas").style.top = "0.2vw";
                setTimeout(() => {
                    document.getElementById("stageOneCanvas").style.left = "2vw";
                    document.getElementById("stageOneCanvas").style.top = "-0.2vw";
                    setTimeout(() => {
                        document.getElementById("stageOneCanvas").style.left = "-2vw";
                        document.getElementById("stageOneCanvas").style.top = "0.2vw";
                        setTimeout(() => {
                            document.getElementById("stageOneCanvas").style.left = "1vw";
                            document.getElementById("stageOneCanvas").style.top = "-0.2vw";
                            setTimeout(() => {
                                document.getElementById("stageOneCanvas").style.left = "0";
                                document.getElementById("stageOneCanvas").style.top = "0";
                            }, 100);
                        }, 90);
                    }, 90);
                }, 80);
            }, 80);
        }, 100);
    }

    const nextGame = () => {
        setDatas(previousData => ({
            ...previousData,
            stageOneCompSec: true
        }));
    }

    let returning;

    if (props.location === "StageOne") {
        returning = (
            <form className="form-box" onSubmit={handleSubmitName}>
                <input className="input-general"
                    value={username}
                    type="text"
                    pattern="[a-zA-Z\S]{1,20}"
                    required autofocus
                    onChange={handleChangeName}></input>
                <button className="btn-general" type="submit">Say my name!</button>
            </form>
        )
    } else if (props.location === "StageOneSec") {
        returning = (
            <form className="form-box">
                <button className="btn-general" type="button" id="destroy-button" onClick={destroy} >Let me destroy everything first</button>
                <button className="btn-general" type="button" id="go-button" onClick={nextGame} >Yes, let's go!</button>
            </form>
        )
    }

    return returning;
}