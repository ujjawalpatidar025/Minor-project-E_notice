import {React, createContext, useState} from 'react';


const SuccessContext = createContext();

const SuccessProvider=(props)=>{
    const [val, setValue]=useState('');
    return (
        <>
        <SuccessContext.Provider value={[val,setValue]}>{props.children}</SuccessContext.Provider>
        </>
    )
}

export {SuccessProvider, SuccessContext};