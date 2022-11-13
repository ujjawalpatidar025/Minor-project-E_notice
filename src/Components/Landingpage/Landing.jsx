import React from 'react'
import '../Landingpage/Landing.css';
import Collapse  from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import logo2 from '../Images/IIST_logo-removebg-preview.png';
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';



const Landing = () => {
  const[check, setChecked]=useState(false);
  
  useEffect(()=>{
     setChecked(true);
  }, [])
  
  return (
    <div className="landing">
      <div className="layer">
      <img src={logo2} alt="logo-img" style={{height:'100px', width:'100px'} }/>
        <Collapse in= {check} {...(check ? {timeout:1000}: {})} className="collapse-div">
          <div className="content-text">
            <h1>WELCOME!</h1>
            <h2>Indore Institute E-Notice Portal</h2>
          </div>
        </Collapse>
        <button className="arrow-btn">
        <NavLink to="/home"><ExpandMore style={{fontSize:'2.5rem'}}/></NavLink>
        </button>
      </div>
    </div>
  );
}

export default Landing