import React from 'react'
import { Link } from 'react-router-dom'
import '../games.css'
import './boxedman.css'
function Boxedman() {
  return (
    <div className='size boxedMan'>
<div>
  <Link className="gamelink" to ="/">Home</Link>
  <Link className="gamelink" to ="/boxedmangame"> Enter</Link>
</div>
    </div>
  )
}

export default Boxedman