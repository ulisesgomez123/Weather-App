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
        <p className="p">💻 this app was created with these technologies:</p>
        <p  className="p"># JavaScript</p>
        <p className="p"># React Js</p>
        <p className="p"># React Js</p>
        <p className="p"># CSS</p>
        <p className="p"># HTML</p>
        <p className="p">💻 Developer: Gomez Ulises E. E.</p>
        <p className="p">💻 the WEB-app makes a request to an external API called: Open Weather Map</p>
    </div>

    )
}