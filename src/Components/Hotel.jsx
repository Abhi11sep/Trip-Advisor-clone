import React, { useContext } from 'react'
import { CartContext } from '../CartCon/CartContextProvider';
import { HotelContext } from '../Context/HotelContextProvider'
import { addtobasket } from '../CartCon/action';
import { Button } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import Footer from './Footer.jsx'
import VoyageGuide from "../LOGO/VoyageGuide.png";
import './Hotel.css'


const Hotel = () => {

  const { state } = useContext(HotelContext);
  const { dispatch } = useContext(CartContext)

  console.log("fnal", state[0])

  return (
    <div style={{ backgroundColor: '#e1e3e6', paddingBottom: '0px' }}>
      <h1 style={{
        backgroundColor: "white", color: '#051D40',
        paddingBottom: "25px", paddingTop: '65px'
      }}>Explore the city</h1>

      <div id='hotel_cards'>
        {state[0].map((item) => (
          <div
            key={item.location_id}
            style={{
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              transition: "0.3s",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 20px 35px rgba(0,0,0,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.12)";
            }}
          >
            {/* Image */}
            <div style={{ position: "relative" }}>
              <img
                src={item.photo?.images?.large?.url || VoyageGuide}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.7), transparent)",
                }}
              />

              <h2
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "18px",
                  color: "#fff",
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                {item.name}
              </h2>
            </div>

            {/* Content */}
            <div style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}>

              {/* Rating */}
              <div className='info_in_cards'>
                <span><strong>⭐ Rating</strong></span>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Rating
                    value={Number(item.rating) || 4}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <span>{item.rating || "4.1"}</span>
                </div>
              </div>

              {/* Reviews */}
              <div className='info_in_cards'>
                <span><strong>📝 Reviews</strong></span>
                <span>{item.num_reviews || "8"}</span>
              </div>

              {/* Ranking */}
              <div className='info_in_cards'>
                <span><strong>🏆 Ranking</strong></span>
                <span>{item.ranking || "#904 in City"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "18px",
                  color: "#666",
                  fontSize: "14px",
                }}
              >
                <LocationOnIcon color="primary" />
                <span>
                  {item.address || "Ground Floor 1936 H C Sen Road"}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "12px",
                  color: "#666",
                  fontSize: "14px",
                }}
              >
                <PhoneIcon color="success" />
                <span>{item.phone || "+91 11 2392 0931"}</span>
              </div>

              {/* Buttons */}
              <div className="buttonContainer">
                <Button className="viewBtn">
                  <a href='https://www.trivago.com/' style={{ textDecoration: "none", color: 'white' }}>🔍 View Deal </a>
                </Button>
                <Button className="saveBtn" onClick={() => dispatch(addtobasket(item))}>
                  ❤️ Save to Basket
                </Button>

              </div>

            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>

  )


}

export default Hotel