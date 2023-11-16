import React from 'react'
import './about.css'
// This is the about page
export default function About() {
  return (
    <div className='about'>
       <h1><u>Creator:</u></h1>
       <h4>Abhirup Guha Roy</h4>
       <h1><u>About:</u></h1>
       <p>
        This is a news app, where you can get daily news in different languages from different countries and with respect to key points.
        You can also filter out your news using the filter tab. Plus you can visit the real pages from here to view the news in details.
       </p>
       <h1><u>Source:</u></h1>
       <p>
        The News API is used. One cons is its not commercial so this website can't be hoisted but can only be source provided on github.
       </p>
    </div>
  )
}
