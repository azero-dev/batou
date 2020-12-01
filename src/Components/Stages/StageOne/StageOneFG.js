import React, { useEffect } from 'react';
import './StageOneFG.css';

export const StageOneFG = (props) => {

    const getStart = () => {
        document.getElementById('stageOneCanvas').style.opacity = "1";
        document.getElementById('stageOneCanvas').style.top = "0";
        document.getElementById('stageOneCanvas').style.backgroundColor = "#10162d";
    }

    useEffect(() => {
        window.addEventListener('load', getStart);

        return () => {
            window.removeEventListener('load', getStart);
        }
    }, [])


    return (
        <div id="stageOneCanvas"></div>
    )
}