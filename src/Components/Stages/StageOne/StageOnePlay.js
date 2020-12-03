import React, { useEffect, useContext, useState } from 'react';
import { FetchDataGame } from '../DataGame/FetchDataGame';
import './StageOnePlay.css';
import { DataContext } from '../DataGame/DataContext';

export const StageOnePlay = (props) => {
    const [datas, setDatas] = useContext(DataContext);
    const stageStatus = datas.stageOneComp;

    const startbtn = () => {
        setTimeout(() => {
            document.getElementById('stbtn').style.opacity = "1";
        }, 3000)
    }

    useEffect(() => {
        window.addEventListener('load', startbtn);

        return () => {
            window.removeEventListener('load', startbtn);
        }
    }, [])

    const handleClick = () => {
        document.getElementById('stbtn').style.display = "none";
        document.getElementById('stage-one-panel').style.display = "flex";
    }

    let returning;

    switch (stageStatus) {
        case true:
            returning = (
                <>
                    <h1>Alright, {datas.name}! Should we start?</h1>
                    <FetchDataGame location="StageOneSec" />
                </>
            );
            break;
        default:
            returning = (
                <>
                    <h1>Hey! Nice to have you here!</h1>
                    <p>Today seems like a good day. I'm going to eat something delicious later on, and maybe also going to watch a movie or do some sport. It is going to be a day full of activities! I was thinking that maybe you would like to join me. If so, please tell me your name.</p>
                    <FetchDataGame location="StageOne" />
                </>
            )
    }

    return (
        <div className="stplaybg">
            <button id="stbtn" className onClick={handleClick}>Play</button>
            <div id="stage-one-panel" className="stage-one_game">
                {returning}
            </div>
        </div>
    )
}