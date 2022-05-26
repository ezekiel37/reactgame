import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import '../games.css'
import './elkiller.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Suspect1 from '../../assets/elskiller/Suspect1.png'
import Suspect2 from '../../assets/elskiller/Suspect2.png'
import Suspect3 from '../../assets/elskiller/Suspect3.png'

function Suspect() {
   const [toggled, setToggled] = useState(true);
   const [toggle, setToggle] = useState(true);
   const [showSuspect3, setSuspect3] = useState(true);
   const toggleImage = () => setToggled(!toggled);
   const toggleImage2 = () => setToggle(!toggle);
   const showSuspect_3 = () => setSuspect3(!showSuspect3);
   return (
    <div className="size suspectGame">
    <Link className="btn btn-primary" to="/elkiller">Go back</Link>
    <p className='instruction'>Click on each image to view more about suspect</p>
    <div className="suspectlist">
    <div>
    {toggled ? (<img  onClick={()=> {toggleImage()}} className="suspect" src={Suspect1} alt="game elements"></img>
    ):(<div className="stext suspect">
    <p>meet toby , he is 16 years old
        `He is 16years old drop out from Junior Grade in High School
        an avid smoker of indian hemp called weed, well trainned in the
        use of knife and all manner of killing methods with bear hand.`
    </p>
    <button className="btn sbutton btn-secondary" type="button" onClick={()=> {toggleImage()}}>Show image</button>
    </div>
    )
    }
    </div>
    {/* second image */}
    <div>
    {toggle ? (<img  onClick={()=> {toggleImage2()}} className="suspect" src={Suspect2} alt="game elements"></img>
    ):(
        <div className="stext suspect">
        <p>meet Gaboo , he is 26 years old
        `He is 26years old with no track record of attending any known
         or recognized institution, he is a trainned hired killer with 
         several cases in police custody as well as jailed severally for
         both major and minor cases of theft.`
        </p>
        <button className="btn sbutton btn-secondary" type="button" onClick={()=> {toggleImage2()}}>Show image</button>
        </div>  
    )
    }
    </div>
    {/* third image */}
    <div>
    {showSuspect3 ? (<img  onClick={()=> {showSuspect_3()}} className="suspect" src={Suspect3} alt="game elements"></img>
    ):(
        <div className="stext suspect">
    <p>meet Uboy , he is 22 years old
        `Uboy is 22years old rusticated as one of the most notorious cult member
         from the university six year ago and he is known for runs and deals ranging
         ranging from drog peddling and gang robbery with flare for underage rape.`
    </p>
    <button className="btn sbutton btn-secondary" type="button" onClick={()=> {showSuspect_3()}}>Show image</button>
    </div>
    )
    }
    </div>
    
      </div>
</div>
  )
}

export default Suspect