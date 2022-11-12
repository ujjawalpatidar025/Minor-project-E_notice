import {React, createContext, useState} from 'react';


const SuccessContext = createContext();

const SuccessProvider=(props)=>{
    const [isLogin, setIsLogin]=useState('');
    const [openAdd, setOpenAdd]=useState(false);
    const [openSnackBar, setOpenSnackBar]=useState(false);
    const [count,  setCount]=useState(0);
    return (
        <>
        <SuccessContext.Provider value={[isLogin,setIsLogin, openAdd, setOpenAdd, openSnackBar, setOpenSnackBar, count, setCount]}>{props.children}</SuccessContext.Provider>
        </>
    )
}

export {SuccessProvider, SuccessContext};