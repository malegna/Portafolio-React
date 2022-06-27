import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Angela Santana</h1>
            <p>Bogotá - Colombia.</p>
        </div>

        <div className='footer-contact'>
            <h3>Contactame,</h3>
            <p>y pongamonos manos a la obra.</p>
        </div>

        <div className='footer-sns'>
            <div className='desing-by'>Diseñado en React por Angela Santana - 2022</div>
            <div className='sns-links'>
                <a href='https://www.linkedin.com/in/angela-michele-santana/' target="_blank" rel="noreferrer">
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://wa.link/3l1phr' target="_blank" rel="noreferrer">
                    <i className='fab fa-whatsapp whatsapp'></i>
                </a>
                
                <a href='mailto:malegna14@gmail?Subject=Vi%20tu%20portfolio%20y%20quiero%20contactarte.' target="_blank" rel="noreferrer">
                    <i className='fa fa-envelope envelope'></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer