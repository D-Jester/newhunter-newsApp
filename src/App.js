//importing components
import Navbar from './components/Navbar'
import News from './components/News';
import Filter from './components/Filter';
import About from './components/About'
import { useState,useRef } from 'react';
import Contact from './components/Contact';
//importing React router elements
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  //filter state variables
  const [type,setType]=useState("top-headlines")
  const [language,setLanguage]=useState("any")
  const [sort,setSort]=useState("none")
  const [country,setCountry]=useState("none")
  const [category,setCategory]=useState("none")
  const [keyword,setKeyword]=useState("")
  let page=useRef(1)//reference page variable

  //defining functions 
  const pageUp=()=>{
    page.current+=1
    setPageChild(page.current)
    return
  }
  const pageDown=()=>{
    page.current-=1
    setPageChild(page.current)
    return
  }
  const reset=()=>{
    page.current=1
  }

  const setFilters=(type,language,sort,country,category,keyword)=>{
    setType(type)
    setLanguage(language)
    setSort(sort)
    setCountry(country)
    setCategory(category)
    setKeyword(keyword)
  }
  const [pageChild,setPageChild]=useState(page.current)//page variable
  return (
    //React dom router  
    <Router>
      <Navbar first='Home' second='Contact' third='About'/>
      <Routes>
        <Route path='/' element={<><Filter function={setFilters} /> <News type={type} language={language} sort={sort} country={country} category={category} keyword={keyword} page={pageChild} pageUp={pageUp} pageDown={pageDown} reset={reset} /> </> } />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
