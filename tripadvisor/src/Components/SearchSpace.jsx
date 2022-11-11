import React, { useContext, useState } from 'react';
import { Stack, Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import axios from 'axios'
import { addtohotels } from '../Context/action';
import { useNavigate } from 'react-router-dom'
import { HotelContext } from '../Context/HotelContextProvider';



const SearchSpace = () => {
  const { state, dispatch } = useContext(HotelContext)
  const [dataq, setDataq] = useState([]);
  const [final, setFinal] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  

  const getCityCoordinates = (city) => {
    return axios({
      method:'GET',
      url: `https://api.api-ninjas.com/v1/city?name=${city}`,
      headers: {
        "X-Api-Key": "iqOkxHKMmOirQ7Rfn9i4Fg==ig1gKRAx2XXOMoee"
      }
    });
  };

 const getCity1 = async (lati,long) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`, {
      params: {
              longitude:long ,
              latitude:lati
            },
      headers: {
        'x-rapidapi-key': '64378948c5mshf9c719ac5998fdcp1d3825jsn93e8d97e9161',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    
    return data;
    
  } catch (error) {
    console.log(error);
  }
};

const getCity2 = async (lati,long) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng`, {
      params: {
              longitude:long ,
              latitude:lati
            },
      headers: {
        'x-rapidapi-key': '64378948c5mshf9c719ac5998fdcp1d3825jsn93e8d97e9161',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    
    return data;
    
  } catch (error) {
    console.log(error);
  }
};

const getCity3 = async (lati,long) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng`, {
      params: {
              longitude:long ,
              latitude:lati
            },
      headers: {
        'x-rapidapi-key': '64378948c5mshf9c719ac5998fdcp1d3825jsn93e8d97e9161',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    
    return data;
    
  } catch (error) {
    console.log(error);
  }
};

  const goOn=()=>{
    dispatch(addtohotels(dataq))
    console.log("state", state)
     navigate('/hotel')
  }

  const handleChange = (e) => {
    setCity(e.target.value)
    console.log(city)
    getCityCoordinates(city)
    .then((res) => setLocation(res.data[0]))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
   
  }
  // let x = city;

  const handleSubmit1 = () => {
    console.log("tr1", location)
    let long=location.longitude;
    let leti=location.latitude
   getCity1(leti,long)
  //  .then((res) => console.log("into",res))
   .then((res) => setDataq(res))
  .catch((err) => console.log(err));
  }

  const handleSubmit2 = () => {
    console.log("tr1", location)
    let long=location.longitude;
    let leti=location.latitude
   getCity2(leti,long)
  //  .then((res) => console.log("into",res))
   .then((res) => setDataq(res))
  .catch((err) => console.log(err));
  }

  const handleSubmit3 = () => {
    console.log("tr1", location)
    let long=location.longitude;
    let leti=location.latitude
   getCity3(leti,long)
  //  .then((res) => console.log("into",res))
   .then((res) => setDataq(res))
  .catch((err) => console.log(err));
  }

  

  // const getdata=(x)=>{
    
  // }
  console.log("data", dataq);
  console.log("coo",location.longitude,location.latitude)



  return (
    <div style={{ width: '80%', margin: "auto" }}>
      <div style={{
        position: 'absolute', marginLeft: "300px",
        marginTop: '120px'
        , width: "10%", borderRadius: "25px",
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

      }}>

        <Stack spacing={4}>
          <InputGroup>
            {/* <Button style={{border:'none',borderRadius:'45px'}}> */}
            <Input style={{
              padding: '10px 200px', fontSize: '20px',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              borderRadius: "25px", border: 'none'
            }} type='text' placeholder='Where to?'
              onChange={handleChange}
            />
            
            
            {/* </Button> */}
            
           
          </InputGroup>
         
        </Stack>
      </div>
      <div  style={{
        position: 'absolute', marginLeft: "90px",
        marginTop: '180px'
        , width: "70%"}}>
          <button onClick={handleSubmit1} style={{border:'none',backgroundColor:'white',
            fontSize:'20px',padding:'5px 15px',marginRight:"10px",borderRadius:'10px',
            color:'purple'}} >Restaurents</button>
            <button onClick={handleSubmit2}  style={{border:'none',backgroundColor:'white',
            fontSize:'20px',padding:'5px 15px',marginRight:"10px",borderRadius:'10px',
            color:'purple'}}>Hotels</button>
            <button onClick={handleSubmit3} style={{border:'none',backgroundColor:'white',
            fontSize:'20px',padding:'5px 15px',marginRight:"10px",borderRadius:'10px',
            color:'purple'}}>Attractions</button>
            <button onClick={goOn}  style={{border:'none',backgroundColor:'white',
            fontSize:'20px',padding:'5px 15px',marginRight:"0px",borderRadius:'10px',
            color:'white',backgroundColor:'#e07624',marginLeft:'100px'}}>Click to Search</button>
            </div>

      <img style={{ width: "100%" }} src='https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp' />
    </div>
  )
}

export default SearchSpace