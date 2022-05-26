import React from 'react'

function Section(props) {
  return (
    <div className={props.className}>
    <h3>{props.header}</h3>
    <p>{props.text}
   </p>
  </div>
  )
}

export default Section