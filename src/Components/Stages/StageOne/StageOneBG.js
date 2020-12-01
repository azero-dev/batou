import React, { useEffect } from 'react';
import './StageOneBG.css';

export const StageOneBG = (props) => {

    useEffect(() => {
        const effects1 = setInterval(() => {
            let effStatus1 = window.getComputedStyle(document.getElementById("backySix")).opacity;

            if (effStatus1 === "1") {
                document.getElementById("backySix").style.opacity = "0";
                document.getElementById("backySeven").style.opacity = "100";
            } else {
                document.getElementById("backySix").style.opacity = "100";
                document.getElementById("backySeven").style.opacity = "0";
            }
        }, 6000);

        const effects2 = setInterval(() => {
            let effStatus2 = window.getComputedStyle(document.getElementById("backyEight")).opacity;

            if (effStatus2 === "1") {
                document.getElementById("backyEight").style.opacity = "0";
                document.getElementById("backyNine").style.opacity = "1";
            } else {
                document.getElementById("backyEight").style.opacity = "1";
                document.getElementById("backyNine").style.opacity = "0";
            }
        }, 7000);

        return () => {
            clearInterval(effects1);
            clearInterval(effects2);
        }
    }, [])

    return (
        <div className="backCanvas">
            <div className="backy1"></div>
            <div className="backy2"></div>
            <div className="backy3"></div>
            <div className="backy4"></div>
            {/* Animated */}
            <div id="backySix" className="backy6"></div>
            <div id="backySeven" className="backy7"></div>
            <div id="backyEight" className="backy8"></div>
            <div id="backyNine" className="backy9"></div>
        </div>
    )
}