import '../styles/homePage.css'
import '../App.css'
import ParticleBackground from '../components/particleBackground';
import { useState } from 'react';
import { Navigate } from "react-router-dom";


function HomePage( { setHomePage } ) {

    const [edit, setEdit] = useState(false);
    if (edit === true) {
      return <Navigate to="/editor" />;
    };

    return(<>

        <ParticleBackground />

        <h1 id='homeTitle'>
            <span style={ {color:"rgb(30, 219, 103)"} }>Cov</span><span style={ {color:"rgb(255, 255, 255)"} }>Letter.io</span>
        </h1>

        <button id='homeButton' onClick={() => setEdit(true)}>
            Get Started
        </button>

    </>)

}


export default HomePage;