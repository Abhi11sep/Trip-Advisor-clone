import React, { useContext, useState } from 'react';
import { Stack, Input, InputGroup } from '@chakra-ui/react'
import axios from 'axios'
import { addtohotels } from '../Context/action';
import { useNavigate } from 'react-router-dom'
import { HotelContext } from '../Context/HotelContextProvider';
import './SearchSpace.css'

const SearchSpace = () => {
  const { state, dispatch } = useContext(HotelContext)
  const [dataq, setDataq] = useState([]);
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(3);
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState("")

  const getCityCoordinates = (city) => {
    return axios({
      method: 'GET',
      url: `https://api.api-ninjas.com/v1/city?name=${city}`,
      headers: {
        "X-Api-Key": process.env.REACT_APP_API_KEY
      }
    });
  };

  const getCity1 = async (lati, long) => {
    try {
      const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`, {
        params: {
          longitude: long,
          latitude: lati
        },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
        },
      });

      return data;

    } catch (error) {
      console.log(error);
    }
  };

  const getCity2 = async (lati, long) => {
    try {
      const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng`, {
        params: {
          longitude: long,
          latitude: lati
        },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
        },
      });

      return data;

    } catch (error) {
      console.log(error);
    }
  };

  const getCity3 = async (lati, long) => {
    try {
      const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng`, {
        params: {
          longitude: long,
          latitude: lati
        },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
        },
      });

      return data;

    } catch (error) {
      console.log(error);
    }
  };

  const goOn = () => {
    dispatch(addtohotels(dataq))
    console.log("state", state)
    navigate('/hotel')
  }

  const startCountdown = () => {
    setSelected(true);
    setCount(3);

    let timer = 3;

    const interval = setInterval(() => {
      timer--;

      if (timer > 0) {
        setCount(timer);
      } else {
        clearInterval(interval);
        setCount(0);
      }
    }, 1000);
  };

  const handleChange = (e) => {
    setCity(e.target.value)
    console.log(city)
    console.log("API", process.env.REACT_APP_API_KEY);
    console.log("RAPID", process.env.REACT_APP_RAPID_API_KEY);
    console.log("HOST", process.env.REACT_APP_RAPID_API_HOST);
    getCityCoordinates(city)
      .then((res) => setLocation(res.data[0]))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  }

  const handleSubmit1 = () => {
    setCategory("Restaurants");
    setLoading(true);

    let long = location.longitude;
    let leti = location.latitude;

    getCity1(leti, long)
      .then((res) => {
        setDataq(res);

        setTimeout(() => {
          setLoading(false);
          startCountdown();
        }, 200);
      })
      .catch(console.log);
  };


  const handleSubmit2 = () => {
    setCategory("Hotels");
    setLoading(true);

    let long = location.longitude;
    let leti = location.latitude;

    getCity1(leti, long)
      .then((res) => {
        setDataq(res);


        setTimeout(() => {
          setLoading(false);
          startCountdown();
        }, 200);
      })
      .catch(console.log);
  };


  const handleSubmit3 = () => {
    setCategory("Attractions");
    setLoading(true);

    let long = location.longitude;
    let leti = location.latitude;

    getCity1(leti, long)
      .then((res) => {
        setDataq(res);

        setTimeout(() => {
          setLoading(false);
          startCountdown();
        }, 200);
      })
      .catch(console.log);
  };

  console.log("data", dataq);
  console.log("coo", location.longitude, location.latitude)

  return (
    <div id='main'>
      <div className="hero-content">
        <div id='search_div'>

          <Stack w="100%">
            <InputGroup>
              <Input
                w="100%"
                type="text"
                placeholder="Where to?"
                onChange={handleChange}
                style={{
                  padding: "12px 20px",
                  fontSize: "20px",
                  borderRadius: "25px",
                  border: "none",
                  boxShadow: "rgba(0,0,0,.35) 0px 5px 15px",
                  boxSizing: "border-box",
                }}
              />
            </InputGroup>
          </Stack>
        </div>
        <div className='overlay'>
          {!category ? (
            <>
              <div id='div_category'>✨ Pick category
              </div>
              <button
                onClick={handleSubmit1}
                className={`option-btn ${selected === "restaurants" ? "active" : ""}`}
              >
                🍽 Restaurants
              </button>

              <button
                onClick={handleSubmit2}
                className={`option-btn ${selected === "hotels" ? "active" : ""}`}
              >
                🏨 Hotels
              </button>

              <button
                onClick={handleSubmit3}
                className={`option-btn ${selected === "attractions" ? "active" : ""}`}
              >
                📍 Attractions
              </button>
            </>
          ) : (
            loading ? (
              <button className="search-btn">
                🔄 Finding {category}...
              </button>
            ) : count > 0 ? (
              <button className="search-btn">
                Search in {count}...
              </button>
            ) : (
              <button onClick={goOn} className="search-btn" >
                Let's Explore the City
              </button>
            )

          )}

        </div>
      </div>


      <img src='https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp' alt="img" />
    </div >
  )
}

export default SearchSpace
