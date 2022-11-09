import {React, createContext, useState} from 'react';


const SuccessContext = createContext();

const SuccessProvider=(props)=>{
    const [isLogin, setIsLogin]=useState('');
    return (
        <>
        <SuccessContext.Provider value={[isLogin,setIsLogin]}>{props.children}</SuccessContext.Provider>
        </>
    )
}

export {SuccessProvider, SuccessContext};