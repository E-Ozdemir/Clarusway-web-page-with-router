import React from 'react'
import Logo from '../assets/CLARUSWAY_LOGO.png'

const Footer = () => {
    return (
        <div>
           
            <span style={{textAlign:'center',backgroundColor:'#35424A',padding:'10px 20px',display:'block',position:'fixed',bottom:'0px',width:'100%',fontSize:'10px'}}>Clarusway Web Design , Copyright © 2021
            <br />
            <a href="https://clarusway.com/" target="_blank" rel="noreferrer"><img src={Logo} alt="broken" style={{width:'150px', height:'30px'}} /></a>
            </span>
        </div>
    )
}

export default Footer
