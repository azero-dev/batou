import React, { useEffect, useContext } from 'react';
import './StageThree.css';
import { DataContext } from '../DataGame/DataContext';

export const StageThree = props => {

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


    return (
        <div id="linux-bg">
            <div className="lin-canvas">
                <div id="lin-bar">
                    <div id="lin-bar_activity" >Activity</div>
                    <div id="lin-bar_time"></div>
                    <div id="lin-bar_settings" >
                    </div>
                </div>
                <div id="lin-sidebar"></div>
                <div id="lin-desktop"></div>
            </div>
        </div>
    )
}