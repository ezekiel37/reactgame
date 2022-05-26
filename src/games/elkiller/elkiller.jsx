import React, {useState}  from 'react'
import { Link } from 'react-router-dom'
import '../games.css'
import './elkiller.css'
import elskillerhair from '../../assets/images/elskillerhair.png'
import elskillerknife from '../../assets/images/elskillerknife.png'
import Timer from '../../components/timer'
import Gamemodal from '../../components/gamemodal'


function Elkiller() {
   const TIME_LIMIT = 40000
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  //  hairfunction
  const [showHair, setHairShow] = useState(false);
  const handleHairClose = () => setHairShow(false);
  const handleHairShow = () =>  setHairShow(true);
  // knifefunction
  const [showKnife, setKnifeShow] = useState(false);
   const handleKnifeClose = () => setKnifeShow(false);
   const handleKnifeShow = () =>  setKnifeShow(true);
  return (
    <div className="size elsGame">
      <Timer
time ={TIME_LIMIT}
onEnd ={()=>console.log("okay")}
/>

<div className='links'>
<ul>
<li><Link className="btn btn-primary" to="/">Home</Link></li>
<li><Link className="btn btn-primary " to="/suspects">Suspects</Link></li>
<li><Link onClick={handleShow} className="btn btn-primary" to="#">Story</Link></li>
</ul>
</div>
{/* storymodal */}
<Gamemodal
display={show}
hide ={handleClose}
text="Maria is a 30 year old living in chicago"
/>
{/* hairmodal */}
<Gamemodal
display={showHair}
hide ={handleHairClose}
text="hair with blood stains on it"
/>
{/* storymodal */}
<Gamemodal
display={showKnife}
hide ={handleKnifeClose}
text="perhaps it was used by the killer or used to cut an animal "
/>
{/* game elements */}
<img onClick={handleHairShow} className="hair" src={elskillerhair} alt="game elements"></img>
<img onClick={handleKnifeShow} className="knife" src={elskillerknife} alt="game elements"></img>
{/* end game elements */}
{/* Choose Suspect */}
<div  className='gameinput'>
  <form>
    <label >
     <span className="form-text">Who is the Killer ?</span> 
      <input className="form-control" type="text"/>
    </label>
    <button className="btn btn-md btn-primary"
    type="submit">Enter</button>
  </form>
</div>
{/* End Choose Suspect */}
</div>
    
  )
}

export default Elkiller