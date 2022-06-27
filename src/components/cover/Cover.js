import React from 'react'
import './Cover.css';
import coverVideo from '../../Media/coverVideo.mp4';

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted/>
        <h1> ANGELA SANTANA</h1>
        <p> Full Stack Developer |Javascript | React | NodeJs</p>
    </div>
  )
}

export default Cover