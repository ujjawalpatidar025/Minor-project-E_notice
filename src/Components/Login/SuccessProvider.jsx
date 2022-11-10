import {React, createContext, useState} from 'react';


const SuccessContext = createContext();

const SuccessProvider=(props)=>{
    const [isLogin, setIsLogin]=useState('');
    const [openAdd, setOpenAdd]=useState(false);
    return (
        <>
        <SuccessContext.Provider value={[isLogin,setIsLogin, openAdd, setOpenAdd]}>{props.children}</SuccessContext.Provider>
        </>
    )
}

export {SuccessProvider, SuccessContext};