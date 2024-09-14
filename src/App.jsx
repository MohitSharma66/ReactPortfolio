import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import './App.css';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Load from './Components/Load';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

const App = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    Aos.init({});
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <Load />  
      ) : (
        <>
          <Navbar />
          <div className="container">
            <Home />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
