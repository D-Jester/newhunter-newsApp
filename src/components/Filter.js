import React, { useEffect, useRef } from 'react'
import './filter.css'
function Filter(props) {

  //usind ref hooks to add event listeners
  let filters=useRef(null)
  let search=useRef(null)
  let key=useRef(null)

  //function to be called when the search button is initiated
  const handleOnSearch=()=>{
    let type=document.getElementById("type").value
    let language=document.getElementById("language").value
    let sort=document.getElementById("sort").value
    let country=document.getElementById("country").value
    let category=document.getElementById("category").value
    let keyword=document.getElementById("text").value
    // setting the filter values 
    props.function(type,language,sort,country,category,keyword)
  }
  
  useEffect(()=>{

    //function to handle the filter options when the type(top headlines/everything) is changed
    const handleChange=()=>{
      const value=elem.value;
      if(value==="top-headlines"){
        document.getElementsByClassName("topHeadlines")[0].style.visibility="visible";
        document.getElementsByClassName("everything")[0].style.visibility="hidden";
      }else{
        document.getElementsByClassName("topHeadlines")[0].style.visibility="hidden";
        document.getElementsByClassName("everything")[0].style.visibility="visible";
      }
    }

    //functions to produce effect to the search button
    const handleOnClick=()=>{
      selem.style.boxShadow="none"
    }
    const handleReleaseClick=()=>{
      selem.style.boxShadow="1px 2px 1px #3d3737"
    }

    //function to add keyboard shortcut
    const click=(event)=>{
      if(event.keyCode===13){
        handleOnSearch()
      }
    }

    //accessing elements from the DOM directly using ref
    const elem=filters.current;
    const selem=search.current;
    const kelem=key.current;

    //adding event listeners to the DOM elements
    elem.addEventListener('change',handleChange)
    selem.addEventListener('mousedown',handleOnClick)
    selem.addEventListener('mouseup',handleReleaseClick)
    kelem.addEventListener('keydown',click)

    return ()=>{
      //removing the event listeners while exiting from the effect hook
      elem.removeEventListener('change',handleChange)
      selem.removeEventListener('mousedown',handleOnClick)
      selem.removeEventListener('mouseup',handleReleaseClick)
      kelem.removeEventListener('keydown',click)
    }
  },[])

  //the filter component to filter out the type of news
  return (
    <div className='filter'>
      <select name="type" id="type" ref={filters}>
        <option value="top-headlines">Top Headlines</option>
        <option value="everything">Everything</option>
      </select>
      <div className='everything'>
        <label htmlFor="language" id='languages'>Language :</label>
        <select name="language" id="language">
          <option value="any" className="lang">any</option>
          <option value="ar" className="lang">Arabic</option>
          <option value="de" className="lang">German</option>
          <option value="en" className="lang">English</option>
          <option value="fr" className="lang">French</option>
          <option value="it" className="lang">Italian</option>
          <option value="nl" className="lang">Dutch</option>
          <option value="pt" className="lang">Portugese</option>
          <option value="ru" className="lang">Russian</option>
          <option value="sv" className="lang">Swedish</option>
          <option value="zh" className="lang">Chinese</option>
        </select>
        <label htmlFor="sort" id='sorting'>Sort By  :</label>
        <select name="sort" id="sort">
          <option value="none" className="sorts">none</option>
          <option value="relevancy" className="sorts">Relevancy</option>
          <option value="popularity" className="sorts">Popularity</option>
          <option value="publishedAt" className="sorts">Latest</option>
        </select>
      </div>
      <div className='topHeadlines'>
        <label htmlFor="country" id='Country'>Country :</label>
        <select name="country" id="country">
          <option value="none" className='countryCode'>none</option>
          <option value="ae" className="countryCode">Arab</option>
          <option value="ar" className="countryCode">Argentina</option>
          <option value="at" className="countryCode">Austria</option>
          <option value="au" className="countryCode">Australia</option>
          <option value="be" className="countryCode">Belgium</option>
          <option value="bg" className="countryCode">Bulgaria</option>
          <option value="br" className="countryCode">Brazil</option>
          <option value="ca" className="countryCode">Canada</option>
          <option value="ch" className="countryCode">Switzerland</option>
          <option value="cn" className="countryCode">China</option>
          <option value="co" className="countryCode">Columbia</option>
          <option value="cu" className="countryCode">Cuba</option>
          <option value="cz" className="countryCode">Czech Republic</option>
          <option value="de" className="countryCode">Germany</option>
          <option value="eg" className="countryCode">England</option>
          <option value="fr" className="countryCode">France</option>
          <option value="gb" className="countryCode">Unitated Kingdom</option>
          <option value="gr" className="countryCode">Greece</option>
          <option value="hk" className="countryCode">Hong Kong</option>
          <option value="hu" className="countryCode">Hungary</option>
          <option value="id" className="countryCode">Indonesia</option>
          <option value="ie" className="countryCode">Ireland</option>
          <option value="il" className="countryCode">Israel</option>
          <option value="in" className="countryCode">India</option>
          <option value="it" className="countryCode">Italy</option>
          <option value="jp" className="countryCode">Japan</option>
          <option value="kr" className="countryCode">South Korea</option>
          <option value="lt" className="countryCode">Lithuana</option>
          <option value="lv" className="countryCode">Latvia</option>
          <option value="ma" className="countryCode">Morocco</option>
          <option value="mx" className="countryCode">Mexico</option>
          <option value="my" className="countryCode">Malaysia</option>
          <option value="ng" className="countryCode">Nigeria</option>
          <option value="nl" className="countryCode">Netherlands</option>
          <option value="no" className="countryCode">Norway</option>
          <option value="nz" className="countryCode">New Zealand</option>
          <option value="ph" className="countryCode">Philippines</option>
          <option value="pl" className="countryCode">Poland</option>
          <option value="pt" className="countryCode">Portugal</option>
          <option value="ro" className="countryCode">Romania</option>
          <option value="rs" className="countryCode">Serbia</option>
          <option value="ru" className="countryCode">Russia</option>
          <option value="sa" className="countryCode">South Africa</option>
          <option value="se" className="countryCode">Sweden</option>
          <option value="sg" className="countryCode">Singapore</option>
          <option value="si" className="countryCode">Slovenia</option>
          <option value="sk" className="countryCode">Slovakia</option>
          <option value="th" className="countryCode">Thailand</option>
          <option value="tr" className="countryCode">Turkey</option>
          <option value="tw" className="countryCode">Taiwan</option>
          <option value="ua" className='countruCode'>Ukraine</option>
          <option value="us" className='countryCode'>United States</option>
          <option value="ve" className='countryCode'>Venezuela</option>
          <option value="za" className='countryCode'>South Africa</option>
        </select>
        <label htmlFor="category" id='Category'>Category :</label>
        <select name="category" id="category">
          <option value="none" className="cat">none</option>
          <option value="general" className="cat">General</option>
          <option value="entertainment" className="cat">Entertainment</option>          
          <option value="heath" className="cat">Health</option>
          <option value="science" className="cat">Science</option>
          <option value="sports" className="cat">Sports</option>
          <option value="technology" className='cat'>Technology</option>
        </select>
      </div>
      <div className='keywords' ref={key}>
        <label htmlFor="keyword">Keyword:</label>
        <input type='text' name="keyword" id='text' autoComplete='off' placeholder='Enter keyword..' />
        <button ref={search} onClick={handleOnSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default Filter

