import React from 'react';
import "./slider.css"
import portadaZeus from "../../Media/portadaZeus.png"
// import { Link } from 'react-router-dom';


const slidesInfo = [
    {
        src: 
            require("../../Media/portadaZeus.jpg"),
        alt: "Proyecto 1",
        desc: "Zeus App",
        href: "https://zeus-app.vercel.app",

        app: "Ver app",
        appLink: "https://zeus-app.vercel.app",

        video: "Ver Video ",
        videoLink: "https://youtu.be/ILVVbJ6931I",

        codigo: "Ver codigo",
        codigoLink: "https://github.com/malegna/Pi-Dogs"

    },
    {
        src: 
            require("../../Media/portadaEcommerce.jpg"),
        alt: "Proyecto 2",
        desc: "E-commerce Zapatillas",
        href: "https://e-commerce-five-mu.vercel.app/",

        app: "Ver app",
        appLink: "https://e-commerce-five-mu.vercel.app/",

        video: "Ver Video ",
        videoLink: "https://youtu.be/cutQ8xhL2EM",

        codigo: "Ver codigo",
        codigoLink: "https://github.com/fedesiri/HenryShoesPF"
    },
    {
        src: 
            require("../../Media/DashboardE-commerce.png"),
        alt: "Proyecto 3",
        desc:"DashBoard e-commerce",
        href: "https://admin-henryshoes.vercel.app/users",

        app: "Ver app",
        appLink: "https://admin-henryshoes.vercel.app/users",

        video: "Ver Video ",
        videoLink: "https://youtu.be/ajxetTZdYaw",

        codigo: "Ver codigo",
        codigoLink: "https://github.com/fedesiri/HenryShoesPF"
    
    },
];

const Slides = slidesInfo.map((slide) => (
    <div className='slide-container'>
        <a href= {slide.href} target="_blank" rel="noreferrer">
        <img src={slide.src} alt={slide.alt} width="100%" height="250px" />
        </a>
        <div className='slide-desc'>
            <span>{slide.desc}</span>

            <a href= {slide.appLink} target="_blank" rel="noreferrer" className='hoverTextLink'> 
            <h5>{slide.app}</h5>
            </a>

            <a href= {slide.videoLink} target="_blank" rel="noreferrer" className='hoverTextLink'> 
            <h5>{slide.video}</h5>
            </a>

            <a href= {slide.codigoLink} target="_blank" rel="noreferrer" className='hoverTextLink'> 
            <h5>{slide.codigo}</h5>
            </a>
            
        </div> 
    </div>
));

export default Slides;


