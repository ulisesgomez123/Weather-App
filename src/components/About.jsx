import React from "react";
import './About.css';
export default function About () {
    React.useEffect(()=>{
      document.body.classList.add('j');
      return () => {document.body.classList.remove('j')
    };
    },[])
    return (
    
    <div className="About"> 
        <h1>Information:</h1>
        <p>💻 this app was created with these technologies:</p>
        <p># JavaScript</p>
        <p># React Js</p>
        <p># CSS</p>
        <p># HTML</p>
        <p>💻 Developer: Gomez Ulises E. E.</p>
        <p>💻 the WEB-app makes a request to an external API called: Open Weather Map</p>
    </div>

    )
}