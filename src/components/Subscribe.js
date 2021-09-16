import React from 'react'
import './Navbar.css'

const Subscribe = () => {
    return (
        <div>
              <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center',backgroundColor:'#35424A',padding:'10px 20px'}}>
          <h2>
            <span>Subscribe To Our Newsletter</span>
          </h2>
          <div>
            <input type="email" placeholder="E-Mail" style={{borderRadius:'5px',outline:'0',border:'0',marginRight:'5px'}}/>
            <button style={{backgroundColor:'orange', borderRadius:'5px',color:'white',border:'0'}}>Subscribe</button>
          </div>
        </nav>
        </div>
    )
}

export default Subscribe
