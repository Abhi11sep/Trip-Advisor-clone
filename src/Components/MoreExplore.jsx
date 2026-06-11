import React from 'react'

const MoreExplore = () => {
  return (
    <div  style={{marginTop:'80px'}}>
      
        <div style={{backgroundColor:'#FAF1ED',padding:'15px 0px 25px 0px'}} >
        <p style={{textAlign:'left',marginLeft:"150px",fontSize:'27px',
        fontWeight:'600'}}>More to explore</p>
        <div style={{backgroundColor:'#FAF1ED',display:'flex',
        justifyContent:'space-between',width:'80%',margin:'auto'}}>
        <div style={{backgroundColor:'white', width:'30%'}}>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=400&h=-1&s=1"  width='100%'  alt="picaca"/>
             <p style={{color:'black',fontSize:'18px'}}>From VoyageGuide</p>
             <a style={{color:'black',fontSize:'20px',padding:' 0px 15px'}} href='https://www.tripadvisor.com/Articles-li0M2AUf6tr4-Best_hill_stations_in_south_india.html'>5 Beautiful hill stations in South India</a>
        </div>
        <div style={{backgroundColor:'white', width:'30%',paddingBottom:'35px'}}>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=400&h=-1&s=1" width='100%' alt="picaca"/>
             <p style={{color:'black',fontSize:'18px'}}>From VoyageGuide</p>
             <a style={{color:'black',fontSize:'20px',padding:'5px 15px'}} href='https://www.tripadvisor.com/Articles-lPcMIbudrFsY-Gorgeous_places_in_india_for_your_bucket_list.html'>gorgeous places in India that have to be seen to be believed</a>
        </div>
        <div style={{backgroundColor:'white', width:'30%'}}>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/2e/9a/2520956e-5665-4e9f.jpg?w=400&h=-1&s=1"  width='100%'  alt="picaca"/>
             <p style={{color:'black',fontSize:'18px'}}>From VoyageGuide</p>
             <a style={{color:'black',fontSize:'20px',padding:' 0px 15px'}} href='https://www.tripadvisor.com/Articles-lsgYPejlYTtE-Best_time_to_visit_dubai.html'>The best time to visit Dubai for great weather and deals </a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default MoreExplore