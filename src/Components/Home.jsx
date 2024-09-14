import React from 'react';
import Typed from "typed.js";
import Face from './data/hero.json';

const Home = () => {
  const typedRef = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Welcome to my Portfolio", "My Name is Mohit Sharma", "I am a Full Stack Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1><span ref={typedRef}></span></h1>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={`/assets/${Face.imgSrc}`} alt="Face" />
        </div>
      </div>
    </div>
  )
}

export default Home;
