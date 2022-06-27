import React from 'react'
import "./About.css";
import Angela from '../../../Media/Angela.jpg';

function About() {
  return (
    <div className='about-container'> 
        <div className='about-desc'>
            <h3> Sobre mi: </h3>
            <p>Con formación como Full Stack, background de más de 10 años de experiencia en el sector bancario y experiencia 
autónoma en marketing digital. Uní mi pasión por la tecnología, el marketing y las grandes habilidades adquiridas 
en la banca, para poder crear las mejores experiencias al usuario desde el ámbito de la programación. Con un alto 
grado de compromiso, trabajo en equipo y en búsqueda de nuevos retos.</p> <br/>
<p> <b>Las tecnologías y lenguajes con las que trabajo son: </b><br>
</br>Javascript, React, Redux, NodeJS, Express, Css, Html, Postgres, Sequelize, Figma, Scrum, Git, GitHub. </p>
<br/>
<p> <b>Me encanta aprender, por eso actualmente estoy aprendiendo: </b><br>
</br>React Native, Typescript. </p>
        </div>
        <div className='about-img'>
            <img src={Angela} alt='about'/>

        </div>
    </div>
  )
}

export default About