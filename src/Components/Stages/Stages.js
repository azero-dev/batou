import React, { useContext } from 'react';
import { DataContext } from './DataGame/DataContext'
import { StageOne } from './StageOne/StageOne';
import { StageTwo } from './StageTwo/StageTwo';
import { StageThree } from './StageThree/StageThree';

export const Stages = (props) => {
    const [datas, setDatas] = useContext(DataContext);
    let stage = datas.stage;

    return (
        <>
            {stage === "StageOne" ? (
                <StageOne />
            ) : null}
            {stage === "StageTwo" ? (
                <StageTwo />
            ) : null}
            {stage === "StageThree" ? (
                <StageThree />
            ) : null}
        </>
    );
}