import React, { useEffect } from 'react';
import './DeviceBP.css';

// Device Break Point.
export const DeviceBP = (props) => {
    const msg = 'Please, turn your device';

    useEffect(() => {
        window.addEventListener('resize', chang);
        window.addEventListener("load", chang);

        return () => {
            window.removeEventListener('resize', chang);
            window.removeEventListener("load", chang);
        };
    });

    const chang = () => {
        let widthDev = window.innerWidth > window.innerHeight ? "Landscape" : "Potrait";

        if (widthDev === 'Landscape') {
            document.getElementById('deviceBP').style.display = 'none';
            
        } else if (widthDev === 'Potrait') {
            document.getElementById('deviceBP').style.display = 'block';
        }
    }

    return (
        <div id="deviceBP">
            <h1>{msg}</h1>
        </div>
    )
}