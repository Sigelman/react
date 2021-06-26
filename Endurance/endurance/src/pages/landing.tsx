import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import '../styles/pages/landing.css'
import logoImg from '../images/endu.png';

function Landing(){
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Endurance" />
            <main>
              <h1>Resistência de longa duração</h1>
              <p>Endurance Consultoria em Fidiologia do Esporte</p>
            </main>
            <div className="location">
              <strong>Direito de cópia</strong>
              <span>SSA Sistemas</span>
            </div>
            <Link to="/app" className="enter-app">
              <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
            </Link>
  
        </div>
      </div>
  
    )
}

export default Landing;