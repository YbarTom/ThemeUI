import React, { useEffect, useState } from "react";
import Mobile from "../components/mobile/mobile.component";
import Desktop from "../components/desktop/desktop.component";
import { isLoggedIn, logout } from "../services/auth";
import { navigate } from "gatsby"


const App = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    var login = isLoggedIn()
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (login === false) {
        navigate('/login')
      }

    };

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div>
      <button onClick={() => logout()}>
        Tancar sessió
      </button>
      <head><meta name="description" content="Put your description here."></meta></head>

      {windowDimensions.width > windowDimensions.height && <Desktop />}
      {windowDimensions.width < windowDimensions.height && <Mobile />}

    </div>
  );
};

export default App;