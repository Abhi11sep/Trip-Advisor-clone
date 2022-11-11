import React from "react";
import axios from "axios";
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];
const getdata = () => {
  return axios.get(`http://localhost:8080/products`)
}

const Experience = () => {
  const [items, setItems] = React.useState([]);
  // const items=[{
  //   pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/cb/ed/caption.jpg?w=300&h=300&s=1',
  //   title:'Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi',

  // }, {
  //   pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/97/0c/e8/caption.jpg?w=300&h=300&s=1',
  //   title:'Private Day Tour of Taj Mahal and Agra Fort By Superfast Train - All Inclusive'
  // }, {
  //   pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/71/c0/4d/caption.jpg?w=300&h=300&s=1',
  //   title:'5-Hour Private Mumbai Sightseeing Tour (Travellers Choice Award Winner)'
  // },{
  //   pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5a/ea/82/caption.jpg?w=300&h=300&s=1',
  //   title:'All Inclusive Day Trip to Taj Mahal, Agra Fort and Baby Taj from Delhi by Car'
  // }, {
  //   pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f5/18/12/coffee-plant-laden-with.jpg?w=300&h=300&s=1',
  //   title:'Private Mercara Coorg Coffee and Spice Estate Tour'
  // }, {
  //   pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f1/42/c3/caption.jpg?w=300&h=300&s=1',
  //   title:'Fontainhas Heritage Walk by Make It Happen'
  // }, {
  //   pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0e/f6/1f/caption.jpg?w=300&h=300&s=1',
  //   title:'Full-Day Private Old and New Delhi Combo Tour'
  // },{
  //   pic:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/5f/f1/caption.jpg?w=300&h=300&s=1',
  //   title:'Highlights of Mumbai Private Sightseeing Tour:Winner of TRAVELLERS CHOICE AWARD'
  // }];


  React.useEffect(() => {
    getdata()
      .then((res) => setItems(res.data))
  }, [])
  console.log(items)


  return (
    <div style={{ marginTop: '80px' }}>

      <p style={{
        textAlign: 'left', marginLeft: "150px", fontSize: '27px',
        fontWeight: '600'
      }}>Top experiences on Tripadvisor</p>
      <div className="carousel-wrapper" style={{ width: '90%', margin: 'auto' }}>
        <Carousel breakPoints={breakPoints} >
          {items.map((item) => (
            <div >
              <img src={item.pic} width='280px' height='280px' />
              <p style={{
                padding: "2px 15px", textAlign: 'left', fontWeight: '600',
                fontSize: '18px', marginTop: '0px', lineHeight: '20px'
              }}>{item.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Experience;
