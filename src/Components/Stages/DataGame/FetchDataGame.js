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

    const nextGame = () => {
        setDatas(previousData => ({
            ...previousData,
            stage: 'StageTwo'
        }));
    }

    const destroy = () => {
        setDatas(previousData => ({
            ...previousData,
            DestroyStageOne: true,
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