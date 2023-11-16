import React, { useEffect, useRef, useState } from 'react'
import './news.css'
import './card.css'
import Card from './Card'
import Pageview from './Pageview'
function News(props) {
  let [apiKey,setAPI]=useState("dedb12ee3ad5462c9e439caee52e9c41")
  let url,data
  const [news,setNews]=useState([])
  let total=useRef(0)
  useEffect(()=>{

    const fetching=async ()=>{
      data=await fetch(url).then((value)=>{
        return value.json();
      })
      setNews(Array.from(data.articles))  
      total.current=Math.floor(data.totalResults/40)+1
      console.log(url)
    }

    if(props.type==="everything"){
      props.reset();
      url= `https://newsapi.org/v2/${props.type}?apiKey=${apiKey}&q=${(props.keyword==="")?"all":props.keyword}&language=${(props.language==="any")?"":props.language}&sortBy=${(props.sort==="none")?"":props.sort}&pageSize=40&page=${props.page}`
      fetching();      
    }else{
      props.reset()
      url= `https://newsapi.org/v2/${props.type}?apiKey=${apiKey}&q=${(props.keyword==="")?"all":props.keyword}&country=${(props.country==="none")?"":props.country}&category=${(props.category==="none")?"":props.category}&pageSize=40&page=${props.page}`
      fetching();
    }
    return
  },[props])
  return (
    <div className='news'>  
      {
       news.map((element)=>{
        return <Card key={element.content} heading={element.title} description={element.content} imageUrl={element.urlToImage} url={element.url} />
       })
      }
      <Pageview total={total.current} page={props.page} pageUp={props.pageUp} pageDown={props.pageDown} />
    </div>
  )
}

News.propTypes = {

}

export default News


