import React, { useEffect, useContext } from 'react';
import './StageTwo.css';
import { DataContext } from '../DataGame/DataContext';

export const StageTwo = props => {
    const [datas, setDatas] = useContext(DataContext);
    const name = datas.name;

    useEffect(() => {
        const timer = setInterval(() => {
            let today = new Date().toTimeString().substr(0, 8);
            document.getElementById('place-timer').innerHTML = today;
        }, 1000);

        // Click on desktop to remove menu:
        // document.getElementById("stage-two").addEventListener("click", () => {
        //     document.getElementById("start-menu").style.display = "none";
        // });

        return () => {
            clearInterval(timer);
        }
    }, [])

    const startMenu = () => {
        let isMenuUp = window.getComputedStyle(document.getElementById("start-menu")).getPropertyValue('display');

        if (isMenuUp === "block") {
            document.getElementById("start-menu").style.display = "none";
        } else {
            document.getElementById("start-menu").style.display = "block";
        }
    }

    const openPanel = () => {
        document.getElementById('panel-game_ST').style.display = "block";
    }

    const changeLinux = () => {
        document.getElementById("xp-bar").style.transition = "1s";
        document.getElementById("xp-bar").style.height = "0";
        document.getElementById('xp-bar_start').style.transition = "1s";
        document.getElementById('xp-bar_start').style.height = "0";
        document.getElementById('xp-bar_date').style.transition = "1s";
        document.getElementById('xp-bar_date').style.height = "0";
        setTimeout(() => {
            document.getElementById('panel-game_ST').style.transition = "1s";
            document.getElementById('panel-game_ST').style.right = "-80vw";
            document.getElementById('transition-linux').style.display = "block";
            setTimeout(() => {
                document.getElementById('transition-linux').style.opacity = "1";
                setTimeout(() => {
                    setDatas(previousData => ({
                        ...previousData,
                        stage: 'StageThree'
                    }));
                }, 1400);
            }, 1200);
        }, 1200);
    }

    return (
        <div id="stage-two_background" >
            <div id="stage-two">
                <div className="icons_bg">
                    <div className="icons_mypc" onDoubleClick={openPanel} ></div>
                </div>
                <div id="panel-game_ST" >
                    <p>Hey {name}! We should eat before we start. However, this OS is not what we need. Would you mind changing it?</p>
                    <p onClick={changeLinux}>We'll use Linux!</p>
                </div>
                <div id="start-menu">
                    <p>{name}</p>
                </div>
                <div id="xp-bar" >
                    <div id="xp-bar_start" onClick={startMenu} >
                        <div className="xp-bar_win-logo" ></div>
                        <p >Start</p>
                    </div>
                    <div id="xp-bar_date"><p id="place-timer">.</p></div>
                </div>
            </div>
            <div id="transition-linux"></div>
        </div>
    )
}