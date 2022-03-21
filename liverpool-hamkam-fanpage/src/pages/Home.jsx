import React from 'react';
import '../style/App.css';
import Logo from '../assets/images/Logo.jpg'
import '../style/Home.css'

const Home = (props) => {
    return (
        <section>
             <div className='container'>
                 <div className='container-box'>
         
                     <div className="container-logo"><img className='container-logo-image' src={Logo} alt="Liverpool og Hamkam Fanpage" /></div>
                     <div className='container-header'> Hamkam & Liverpool Fanpage</div>
                     <div className='container-tags'> 186 innlegg    </div>
                     <div className='container-text'></div>
             
                 <div className='image box'>
               
                 </div>
                </div>
             </div>
         </section>
    )
}

export default Home;