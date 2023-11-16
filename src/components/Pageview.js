import React, { useEffect, useRef } from 'react'
import './pageview.css'
export default function Pageview(props) {

  //using reference varaibles
  let down=useRef(null)
  let up=useRef(null)
  useEffect(()=>{

    //handling the left page button on click
    const handleLeft=()=>{
      if(props.page<2){
        left.disabled="true"   
        right.disabled="false"    
      }else{
        left.disabled="false"
        right.disabled="false"
      }
      return
    }

    //handling the right page button on click
    const handleRight=()=>{
      if(props.page>(props.total-1)){
        right.disabled="true"
        left.disabled="false"
      }else{
        right.disabled="false"
        left.disabled="false"
      }
      return 
    }
    //accessing referred DOM elements 
    const left=down.current
    const right=up.current

    //adding event listeners
    left.addEventListener('click',handleLeft)
    right.addEventListener('click',handleRight)

    return ()=>{
      //removing event listeners
      left.removeEventListener('click',handleLeft)
      right.removeEventListener('click',handleRight)
    }
  },[props])
  return (
    <div className='pageView'>
      <button ref={down} id='left' onClick={props.pageDown} disabled="true"><i class="fa-solid fa-arrow-left"></i></button>
      <p><input type="number" value={`${props.page}`} /> out of {props.total} pages</p>
      <button ref={up} id="right" onClick={props.pageUp}><i class="fa-solid fa-arrow-right" ></i></button>
    </div>
  )
}
