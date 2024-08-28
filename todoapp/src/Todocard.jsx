import React, { useState } from 'react'
import  './Todo.css'

function Todocard() {
  let [title,settitle]=useState();
  let [desc,setdesc]=useState();
  function handleclick(){
    console.log(title ,  desc);
    
  }
 
  return (
    <div className='card'>
      <input type="text" placeholder='enter the title here' onChange={(e)=>{
        settitle(e.target.value)
      }}/>
      <input type="text" placeholder='enter the description here' onChange={(e)=>{
        setdesc(e.target.value)
      }}/>
      <button onClick={handleclick}>Add to-do</button>
      

      
    </div>
  )
}

export default Todocard;
