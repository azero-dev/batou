import React, { useEffect } from 'react';
import './StageOneFG.css';
import { StageOnePlay } from './StageOnePlay';

export const StageOneFG = (props) => {

    const getStart = () => {
        document.getElementById('stageOneCanvas').style.opacity = "1";
        document.getElementById('stageOneCanvas').style.top = "0";
        document.getElementById('stageOneCanvas').style.backgroundColor = "#10162d";
        setTimeout(() => {
            document.getElementById('stageOneCanvas').style.transition = "0s";
        }, 3000)
    }

    useEffect(() => {
        window.addEventListener('load', getStart);

        return () => {
            window.removeEventListener('load', getStart);
        }
    }, [])


    return (
        <div id="stageOneCanvas"><StageOnePlay /></div>
    )
}