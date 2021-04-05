import React, { useEffect, useContext } from 'react';
import './StageThree.css';
import { DataContext } from '../DataGame/DataContext';
import { Firefox } from '../Firefox/Firefox';

export const StageThree = props => {
    const [datas, setDatas] = useContext(DataContext);
    const name = datas.name;

    const closeTerminal = () => {
        document.getElementById('lin-panel_terminal').style.display = "none";
    }

    const openTerminal = () => {
        setTimeout(() => {
            document.getElementById('lin-panel_terminal').style.opacity = "1";
        }, 1000);

    }

    const openFirefox = () => {
        document.getElementById('lin-panel_firefox').style.display = "block";
    }

    useEffect(() => {
        const timerLin = setInterval(() => {
            let date = new Date();
            let day = date.getDate();
            let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let month = months[date.getMonth()];
            let hour = new Date().toTimeString().substr(0, 5);
            document.getElementById('lin-bar_time').innerHTML = `${day} ${month} ${hour}`;
        }, 1000);

        return () => {
            clearInterval(timerLin);
        }
    }, [])

    useEffect(() => {
        window.addEventListener('load', openTerminal());

        return () => {
            window.removeEventListener('load', openTerminal());
        }
    }, [])

    const releaseSettingsMenu = () => {
        let isMenuUp = window.getComputedStyle(document.getElementById("lin-bar_settings-menu")).getPropertyValue('display');

        if (isMenuUp === 'none') {
            document.getElementById("lin-bar_settings-menu").style.display = 'block';
        } else {
            document.getElementById("lin-bar_settings-menu").style.display = 'none';
        }
    }

    return (
        <div id="linux-bg">
            <div className="lin-canvas">
                <div id="lin-bar">
                    <div id="lin-bar_activity">{datas.name}</div>
                    <div id="lin-bar_time"></div>
                    <div id="lin-bar_settings" onClick={releaseSettingsMenu}></div>
                </div>
                <div id="lin-sidebar">
                    <div id="lin-folder" className="icons"></div>
                    <div id="lin-firefox" className="icons" onClick={openFirefox}></div>
                    <div id="lin-apps" className="icons"></div>
                </div>
                <div id="lin-desktop">
                    <div id="lin-bar_settings-menu"></div>
                    <div id="lin-panel_terminal">
                        <div id="terminal-head">
                            <div id="terminal-close" onClick={closeTerminal}></div>
                        </div>
                        <div id="terminal-body">
                            <p>Nice! This looks much better.</p>
                            <p>Now close this window, open Firefox and order some food :)</p>
                        </div>
                    </div>
                    <div id="lin-panel_manager"></div>
                    <div id="lin-panel_firefox">
                        <div className="firefox-head"></div>
                        <div className="firefox-body">
                            <Firefox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}