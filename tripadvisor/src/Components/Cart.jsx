import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import React, { useContext } from 'react'
import { CartContext } from '../CartCon/CartContextProvider'
import { removefrombasket } from '../CartCon/action';
import { Button } from '@chakra-ui/react';

const Cart = () => {

  const { state, dispatch } = useContext(CartContext);

  console.log("cart", state)
  return (
    <div style={{ backgroundColor: '#e1e3e6',paddingBottom:'250px' }}>
      <h1 style={{
        backgroundColor: "white", color: '#051D40',
        paddingBottom: "25px"
      }}>Your basket</h1>
    
    <div style={{
      display: 'grid', gap: '35px', gridTemplateRows: 'auto',
      gridTemplateColumns: 'repeat(3,1fr)',
      padding: '0px',width:'90%',marginLeft:"auto",marginRight:'auto',
      marginTop:'50px',marginBottom:'50px'
      
    }}>
      {state.map((item) => (
        <div>
          <div  style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          padding:'20px',borderRadius:'25px',lineHeight:'20px',
          backgroundColor:'white'}}>
            <img src={item.photo ? item.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} width='300px' height='250px' />
            <h2>{item.name}</h2>

            <p>Rating : {item.rating ? item.rating :"4.3"}  out of 5</p>
            <p>Price Range : {item.price_level? item.price_level : "$-$$" }</p>
            <p>Reviews : {item.num_reviews ? item.num_reviews: "8"}</p>
            <p> Ranking : {item.ranking ? item.ranking : "#904 of 12,413 Restaurants in city"}</p>
            <p><LocationOnIcon />{item.address ? item.address :"Ground Floor 1936 H C Sen Road, Near Yes Bank,India"}</p>
            <p><PhoneIcon />{item.phone ? item.phone : "+91 11 2392 0931"}</p>
            <Button style={{
              backgroundColor: '#051D40', color: 'white',
              fontSize: '18px', padding: '5px 25px', borderRadius: '25px'
            }} variant='solid'>
              <a href='https://www.trivago.com/' style={{ textDecoration: "none", color: 'white' }}>View Deal</a>
            </Button>
            <Button style={{
              backgroundColor: '#051D40', color: 'white',
              fontSize: '18px', padding: '5px 20px', marginLeft: '15px', borderRadius: '25px'
            }} variant='solid'
            onClick={() => dispatch(removefrombasket(item.location_id))}>
              Remove from Basket
            </Button>
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Cart