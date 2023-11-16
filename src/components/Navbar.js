import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'
import { Link } from "react-router-dom"
function Navbar(props) {

    //Navbar component 
  return (
    <>
    <div className='header'>
        <div className='title'>
            <div id='news'><p>News</p></div><div id='hunter'><p>Hunter</p></div>
        </div>
        <div className='option'>
            <div className="options"><Link to="/">{props.first}</Link></div>
            <div className="options"><Link to="/about">{props.second}</Link></div>
            <div className="options"><Link to="/contact">{props.third}</Link></div>
        </div>
        <div className='option2'>
            <div className="options2"><Link to="/"><i className="fa-solid fa-house"></i></Link></div>
            <div className="options2"><Link to="/contact"><i className="fa-solid fa-phone"></i></Link></div>
            <div className="options2"><Link to="/about"><i className="fa-regular fa-address-card"></i></Link></div>
        </div>
    </div>
    </>
  )
}

//defining the prop types 
Navbar.propTypes = {
    first:PropTypes.string.isRequired,
    second:PropTypes.string.isRequired,
    third:PropTypes.string.isRequired
}
//defining default values to the prop types
Navbar.defaultProps={
    first:"<First option>",
    second:"<Second option>",
    third:"<Third option>"
}

export default Navbar

