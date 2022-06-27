import React, { useState, useEffect }from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/cover/Navbar/Navbar';
import About from './components/cover/About/About';
import Slider from './components/Slider/Slider';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

function App() {
  const [ scrollHeigth, setScrollHeigth] = useState (0);

  const handleScroll= () => {
    const position= window.pageYOffset;
    setScrollHeigth(position);
  };

  useEffect(() =>{
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeigth]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeigth}/>
      <Cover/>
      <About/>
      <Slider/>
      <Info />
      <Footer/>
    </div>
  );
}

export default App;
