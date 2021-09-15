import React from 'react'
import Navbar from '../components/Navbar'
import LogoBrush from '../assets/logo_brush.png'

const Logo = () => {
    return (
        <div>
        <Navbar/>
        <div style={{display:'flex', flexDirection:'column',alignItems:'center', padding:'30px'}}>
            <div >
                <img src={LogoBrush} alt="" />
                <h2 style={{textAlign:'center'}}>GRAPHIC DESIGN</h2>
            </div>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem libero aliquid esse, expedita quo quod tempore ab corporis explicabo consequatur incidunt deserunt id delectus ad possimus soluta maxime reiciendis, porro laudantium? Aliquid dolore sapiente ex natus commodi atque numquam nihil, ad laudantium doloremque quis inventore aspernatur ratione excepturi distinctio veniam maxime corrupti illum magnam fugiat? Natus reprehenderit perferendis dolorum, aliquam nihil iusto perspiciatis doloremque dicta nesciunt fugit incidunt optio rem quisquam nemo, dolore veritatis asperiores deserunt. Facilis totam sint quaerat atque fugiat amet placeat quod quibusdam! Fugit, excepturi eius. Consequuntur obcaecati blanditiis iure! Blanditiis, aliquid! Ea consectetur harum perferendis. Illum cumque impedit, incidunt cupiditate libero ad nisi optio commodi cum excepturi quidem sapiente quibusdam, accusamus delectus porro dolorum magnam laboriosam! Cumque quae ducimus magnam fugit velit, possimus quasi impedit accusantium, aspernatur corrupti obcaecati facilis animi culpa exercitationem provident explicabo quas odio cupiditate vero incidunt quis ea ullam beatae! Ex dolorum adipisci ab quas dolor maiores recusandae cupiditate perferendis deleniti expedita, ad fuga minus inventore ratione illum error ipsam velit, maxime debitis. Eaque fugit saepe eos quisquam, suscipit non, nihil similique nam quidem tenetur architecto, ut aliquid blanditiis? Eos quos corporis odit, reprehenderit placeat laborum, alias debitis sapiente in tenetur distinctio.</p>
        </div>
    </div>
    )
}

export default Logo
