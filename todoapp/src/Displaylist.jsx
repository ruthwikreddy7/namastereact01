import React from 'react'

function Displaylist({title,des}) {
  return (
    <div className='displaycard'>
      <h2>title is  : {title} </h2>
      <p>description : {des} </p>
      
    </div>
  )
}

export default Displaylist
