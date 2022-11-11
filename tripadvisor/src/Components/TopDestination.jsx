import React from 'react'

const TopDestination = () => {
  return (
    <div style={{backgroundColor:'#004F32' ,marginTop:'80px'}}>
    <div style={{display:"flex",
    justifyContent:'space-between',width:'80%',margin:'auto'}}>
    <div style={{padding:"35px",marginTop:"150px"}}>
        <img src='https://static.tacdn.com/img2/travelers_choice/TC_logomark_solid_cream.svg' alt='picasa'
         width='120px' />
        <p style={{color:'white',fontSize:"35px",fontWeight:'700'}}>Travellers' Choice Best of the Best</p>
        <button style={{color:'white',backgroundColor:'black',padding:'10px 25px',
        fontSize:'20px',borderRadius:'25px'}}>See the winners</button>
    </div>
        <img src='https://static.tacdn.com/img2/brand/feed/tc_cards_tablet2x.jpeg'
            width="900px" height='600px' style={{objectFit: 'cover',
                    objectPosition: '95% 95%'}}
        />
    </div>
    </div>
    
  )
}

export default TopDestination