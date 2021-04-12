import React, { useState, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = props => {
    const [datas, setDatas] = useState(
        {
            name: '',
            stageOneComp: false,
            stage: 'StageThree',
            DestroyStageOne: false,
            enterFour: false,
        },
    );

    return (
        <DataContext.Provider value={[datas, setDatas]} >
            {props.children}
        </DataContext.Provider>
    );
}