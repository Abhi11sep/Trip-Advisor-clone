import React, { useState } from "react";
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Sceneic=()=>{
  const [items, setItems] = useState([{
    pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/2b/0f/merkmal-des-dal-sees.jpg?w=300&h=300&s=1',
    title:'Dal Lake',

  }, {
    pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=300&h=300&s=1',
    title:'Paradise Beach'
  }, {
    pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=300&h=300&s=1',
    title:'Double Decker Living Root Bridge'
  },{
    pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/cb/a2/the-morning-show.jpg?w=300&h=300&s=1',
    title:'Tiger Hill'
  }, {
    pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/dc/15/aru-city.jpg?w=300&h=300&s=1',
    title:'Aru Valley'
  }, {
    pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/54/4a/57/photo0jpg.jpg?w=300&h=300&s=1',
    title:'7th mile View Point'
  },{
    pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/07/0b/38/the-road-takes-you-deeper.jpg?w=300&h=300&s=1',
    title:'Binsar Wildlife Sanctuary'
  }, {
    pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/2c/e7/df/baspa-river.jpg?w=300&h=300&s=1',
    title:'kinnaur'
  }]);


  return (
    <div  style={{marginTop:'80px'}}>
    
    <p style={{textAlign:'left',marginLeft:"150px",fontSize:'27px',
        fontWeight:'600'}}>Scenic autumn spots</p>
      
      <div className="carousel-wrapper" style={{width:'90%',margin:'auto'}}>
        <Carousel breakPoints={breakPoints} >
          {items.map((item) => (
           <div >
            <img src={item.pic} width='280px'/>
            <p style={{padding:"2px 15px",textAlign:'left',fontWeight:'600',
            fontSize:'18px',marginTop:'0px',lineHeight:'20px'}}>{item.title}</p>
           </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Sceneic;
