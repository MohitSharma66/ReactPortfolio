import React from "react";
import { TypeAnimation } from 'react-type-animation';
import './Load.css';

function Load() {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 3000);
  }, []);

  return (
    <div className="load">
      <TypeAnimation
        sequence={[
          'WELCOME TO MY PORTFOLIO\n',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          display: 'inline-block',
          color: "white",
          whiteSpace: 'pre-line',
          fontWeight: '500',
          fontFamily: 'Anton',
          WebkitTextStroke: '1px white',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.3 rem'
        }}
        repeat={Infinity}
        cursor={false}
      />
      {display && (
        <div className="logo">
          <img src={logo} alt="Logo" />
          <l-dot-pulse size="43" speed="1.3" color="white"></l-dot-pulse>
        </div>
      )}
    </div>
  );
}

export default Load;
