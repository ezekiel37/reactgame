
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import elskiller from './assets/images/elskiller.png'
import boxedman from './assets/images/boxedman.png'
import React from 'react';
import Navbar from './components/navbar';
import { Link } from 'react-router-dom';
import Section from './components/section';

function App() {
  return (
   
    <div className=''>
      <div className="herocontainer">
     <Navbar/>
     <div className='herotext'>
       <h3>Welcome to Mystery Box</h3>
       <p>`Welcome to the Mystery box game,the game is an investigation carried 
         out to find and detect a criminal who committed murder among the suspects
         but tracked and detected by an intelligient officer like you.
         You are to assume the role of an intelligent officer and find the culprit.
         within the time limit`
       </p>
      </div>
      <div className="herobutton">
        <Link className="btn btn-secondary" to ="#">Explore Mysteries</Link>
        <Link className="btn btn-outline-light" to ="#">Buy Tokens</Link>
      </div>
      </div>
      {/* section */}
      <Section
      className="section"
      header="Participate in mystery games and get rewards"
      text= "TechClub Ng has brought a dynamics to gaming by rewarding Players"
      />
      {/* end section */}
      {/* first game */}
      <div className="container-fluid">
         <div className="row background">
            <div className="col-lg-4 col-md-4 col-sm-12">
            <img className="gameimg" src={boxedman} alt="elskiller"></img>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="gamediv">
            <h3 className="gameh3">Boxed Man- The Missing Core</h3>
            <p className="gamep">
            `The missing core desribed the attributes and charateristics
            of the components stolen from the robot in the factory, an intelligent
            officer is to collate the attributes, properties and features of the
            elements stolen by the suspects and retrieve the component back for the
            robot to work again.`
            </p>
            <Link className="btn btn-secondary" to="/boxedman"> Start Game</Link>
            </div>
            </div>
         </div>
      </div>
      {/* end first game */}
      {/* second game */}
      <div className="container-fluid">
         <div className="row elbackground">
         <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="gamediv">
            <h3 className="gameh3">Elskiller-Murder Mystery</h3>
            <p className="gamep">
            `The suspect's traits and features are trace and detected by the officer
            while the investigation continues. The officer trail the footsteps and 
            thumb nails of the suspect as the investigation continue.`
            </p>
            <Link className="btn btn-secondary" to="/elkiller"> Start Game</Link>
            </div>
            </div>
            <div className="gamebox col-lg-4 col-md-4 col-sm-12">
            <img className="gameimg" src={elskiller} alt="elskiller"></img>
            </div>
        </div>
      </div>
      {/* end second game */}
      
       
    </div>
  );
}

export default App;
