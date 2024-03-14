import React from "react";
import {Link} from 'react-router-dom';
import '../style/Home.css';

function Home() {
  
  return (
    <div className="home-page" >
      <h1>Stsrt Budget app</h1>
      <button className='button'>
        <Link to="/budget-app">START</Link>
      </button>
    </div>
  );
}

export default Home;
