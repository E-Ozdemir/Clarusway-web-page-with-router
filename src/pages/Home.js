import React from "react";
import { Link } from "react-router-dom";
import LogoHtml from "../assets/logo_html.png";
import LogoCss from "../assets/logo_css.png";
import LogoBrush from "../assets/logo_brush.png";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Subscribe />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding:'40px'
        }}
      >
        <div style={{display:'flex', flexDirection:'column',alignItems:'center', padding:'5px'}}>
          <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <Link to="/html">
              <img src={LogoHtml} alt="html_img" style={{width:'90px', height:'90px' }}/>
            </Link>
            <h2 style={{ textAlign: "center" }}>Html 5</h2>
          </div>
          <p style={{ width: "70%", textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quas similique tempora velit optio corporis necessitatibus dicta?
            Repellendus, nemo facilis.
          </p>
        </div>
        <div style={{display:'flex', flexDirection:'column',alignItems:'center', padding:'5px'}}>
          <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <Link to="/css">
              <img src={LogoCss} alt="css_img" style={{width:'90px', height:'90px' }} />
            </Link>
            <h2>Css3 Styling</h2>
          </div>
          <p style={{ width: "70%", textAlign: "justify" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt
            temporibus natus rem quia aperiam mollitia iste quibusdam quam
            explicabo!
          </p>
        </div>
        <div style={{display:'flex', flexDirection:'column',alignItems:'center', padding:'5px'}}>
          <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <Link to="/logo">
              <img src={LogoBrush} alt="graphic_img" style={{width:'90px', height:'90px' }}/>
            </Link>
            <h2>Graphic Design</h2>
          </div>
          <p style={{ width: "70%", textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ea
            harum! Unde excepturi rerum officia adipisci, dolor est illum
            debitis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
