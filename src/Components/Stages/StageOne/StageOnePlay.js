import React, { useEffect, useContext } from 'react';
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

    useEffect(() => {
        let switched = datas.DestroyStageOne;
        if (switched === true) {
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
    }, [datas.DestroyStageOne])


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