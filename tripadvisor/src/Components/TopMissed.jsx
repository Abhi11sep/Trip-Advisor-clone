import React, { useState } from "react";
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const TopMissed = () => {
    const [items, setItems] = useState([{
        pic: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/66/68/f6/caption.jpg?w=300&h=300&s=1&cx=988&cy=664&chk=v1_d1b5b3f4c384c764b7e1',
        title: 'Tulum-Mexico',

    }, {
        pic: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/60/b0/bd/bora-bora.jpg?w=300&h=300&s=1',
        title: 'Bora Bora, French'
    }, {
        pic: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/dd/caption.jpg?w=300&h=300&s=1',
        title: 'Tenerife, Spain'
    }, {
        pic: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f4/70/caption.jpg?w=300&h=300&s=1',
        title: 'Hawaii'
    }, {
        pic: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cd/04/e4/caption.jpg?w=300&h=300&s=1',
        title: 'Miami, FL'
    }, {
        pic: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/65/5f/4b/caption.jpg?w=300&h=300&s=1&cx=1321&cy=849&chk=v1_14f7826859b4f964e5b2',
        title: 'Dominican'
    }, {
        pic: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bf/69/b0/caption.jpg?w=300&h=300&s=1',
        title: 'Myrtle Beach, SC'
    }, {
        pic: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5e/c2/caption.jpg?w=300&h=300&s=1',
        title: 'Bali, Indonesia'
    }]);


    return (
        <div style={{ marginTop: '80px' }}>

            <p style={{
                textAlign: 'left', marginLeft: "150px", fontSize: '27px',
                fontWeight: '600'
            }}>Top destinations for beach lovers</p>
            <p style={{
                color: 'grey', textAlign: 'left', marginLeft: "150px",
                marginTop: '-25px', marginBottom: '30px'
            }}>Recommended based on your activity</p>
            <div className="carousel-wrapper" style={{ width: '90%', margin: 'auto' }}>
                <Carousel breakPoints={breakPoints} >
                    {items.map((item) => (
                        <div >
                            <img src={item.pic} width='280px' />
                            <p style={{
                                padding: "2px 15px", textAlign: 'left', fontWeight: '700',
                                fontSize: '30px', marginTop: '-50px', lineHeight: '20px',
                                color: 'white'
                            }}>{item.title}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default TopMissed;
