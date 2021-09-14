import React from 'react'
import {Link} from 'react-router-dom'
import LogoHtml from '../assets/logo_html.png'
import LogoCss from '../assets/logo_css.png'
import LogoBrush from '../assets/logo_brush.png'

const Home = () => {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div><Link to="/html"><img src={LogoHtml} alt="html_img" /></Link>
            <h2>Html 5</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quas similique tempora velit optio corporis necessitatibus dicta? Repellendus, nemo facilis.</p
            ></div>
            <div><Link to="/css"><img src={LogoCss} alt="css_img" /></Link>
            <h2>Css3 Styling</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt temporibus natus rem quia aperiam mollitia iste quibusdam quam explicabo!</p></div>
            <div><Link to="/logo"><img src={LogoBrush} alt="graphic_img" /></Link>
            <h2>Graphic Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ea harum! Unde excepturi rerum officia adipisci, dolor est illum debitis?</p></div>
           
        </div>
    )
}

export default Home
