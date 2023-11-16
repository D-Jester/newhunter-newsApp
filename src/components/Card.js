import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import image from './download.jpeg'
import './card.css'
import './news.css'
function Card(props) {
    const head=useRef(props.heading)
    //this function is used to check the length of the heading
    const checkHeadLength=()=>{
        let len=head.current.length
        if(len<=116){return head.current}
        else{
            head.current=head.current.slice(0,116)+"..."
            return head.current
        }
    }
    //this function will be used to link us to the news source page
    const redirect=()=>{
            window.location.href=props.url
    }

    //this is the card component with a basic structure 
    return (
        <div className='card'>
            <img alt='Image not present' src={(props.imageUrl===null)?image:props.imageUrl} />
            <div id='head'><h2><b>{checkHeadLength()}</b></h2></div>
            <div id='desc'><p>{props.description}</p></div>
            <button onClick={redirect}>Read more..</button>
        </div>
    )
}

//defining the prop types and there requirment
Card.propTypes = {
    imageUrl:PropTypes.string.isRequired,
    heading:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}
//defining default values
Card.defaultProps={
    imageUrl:"#",
    heading:"News heading missing..",
    description:"News missing",
    url:"#"
}



export default Card

