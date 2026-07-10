import React from 'react'
import './TopDestination.css'

const TopDestination = () => {
  return (
    <div id='div1'>
      <div id='div2'>
        <div style={{ padding: "35px", marginTop: "150px" }}>
          <img src='https://static.tacdn.com/img2/travelers_choice/TC_logomark_solid_cream.svg' alt='picasa'
            width='120px' />
          <p style={{ color: 'white', fontSize: "35px", fontWeight: '700' }}>Travellers' Choice Best of the Best</p>
          <button style={{
            color: 'white', backgroundColor: 'black', padding: '10px 25px',
            fontSize: '20px', borderRadius: '25px'
          }}>See the winners</button>
        </div>
        <img id='image' src='https://static.tacdn.com/img2/brand/feed/tc_cards_tablet2x.jpeg' alt="img"

        />
      </div>
    </div>

  )
}

export default TopDestination