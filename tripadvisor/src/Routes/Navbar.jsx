import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import img1 from '../LOGO/VoyageGuide.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreateIcon from '@mui/icons-material/Create';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
  FormControl, ModalCloseButton, ModalHeader,
  ModalBody, Button, useDisclosure, Modal, ModalOverlay, ModalFooter,
  ModalContent, FormLabel, Input, Center
} from '@chakra-ui/react';
import imgA from '../LOGO/google.png'
import imgB from '../LOGO/facebbok.png'
import imgC from '../LOGO/email.png'



const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoad1, setIsLoad1] = React.useState(true);
  const [isLoad2, setIsLoad2] = React.useState(true);
  const [isLoad3, setIsLoad3] = React.useState(true);






  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });



  const handleGoogle = () => {
    setIsLoad1(false)
    setInterval(() => {
      // window.location.reload();
      // navigate('/')
      onClose()
    }, 2000);
  }

  const handleFacebook = () => {
    setIsLoad2(false)
    setInterval(() => {
      onClose()
    }, 2000);
  }

  const handleEmail = () => {
    setIsLoad3(false)
    setInterval(() => {
      onClose()
    }, 2000);
  }

  return (
    <div style={{ display: 'flex', backgroundColor: '#051D40' }}>
      <Link to='/'><img style={{ marginLeft: "150px" }} src={img1} alt='picasa' width='100px' /></Link>
      <p style={{ color: "white", textDecoration: "none", marginLeft: '520px' }}>
        <CreateIcon />&nbsp;Review</p>
      <p style={{ color: "white", textDecoration: "none", marginLeft: '35px' }}>
        <FavoriteBorderIcon ></FavoriteBorderIcon>&nbsp;Trip</p>
      <p style={{ color: "white", textDecoration: "none", marginLeft: '35px' }}>
        <NotificationsNoneIcon />&nbsp;Alerts</p>

      <div>
        <Button onClick={onOpen} style={{
          color: "white", textDecoration: "none", backgroundColor: 'white', color: "#051D40",
          fontSize: "18px", borderRadius: "25px", marginTop: "15px", marginLeft: '35px', marginRight: '35px', paddingLeft: "25px",
          paddingRight: "25px", paddingTop: '5px', paddingBottom: '5px'
        }}>{isLoad1 && isLoad2 && isLoad3 ? "User SignIn" : "Welcome User"}</Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}

        >
          <ModalOverlay bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)' />
          <ModalContent style={{
            width: '30%', margin: 'auto', backgroundColor: 'white',
            marginTop: '50px', padding: '25px 35px'
          }}>
            <ModalCloseButton style={{
              marginLeft: '450px', border: 'none',
              backgroundColor: 'white'
            }} />
            <img style={{ borderRadius: "25px", marginLeft: '40px' }} src={img1} alt='picasa' width='100px' />
            <br></br>
            <ModalHeader style={{
              fontSize: '30px', lineHeight: '35px',
              fontWeight: '600', paddingRight: '105px', marginLeft: '40px'
            }}>
              Sign in to unlock the best of Voyage Guide</ModalHeader>

            <ModalBody pb={6}>
              <FormControl>
                {isLoad1 ? <Button onClick={handleGoogle}
                  style={{ backgroundColor: 'white', marginLeft: '30px', borderRadius: '25px', marginTop: '25px' }}><img style={{ marginRight: "20px", marginLeft: '15px' }} src={imgA} alt='picasa' width='30px' /> <p style={{
                    padding: '5px 85px', fontSize: "16px",
                    fontWeight: '500'
                  }}>Continue with Google</p></Button> : <Button
                    isLoading
                    loadingText='Signing using Google'
                    color='teal'
                    variant='outline'
                    spinnerPlacement='end'
                    style={{
                      padding: '15px 95px', marginTop: '50px', marginLeft: '35px',
                      borderRadius: '25px', fontSize: '18px'
                    }}
                  >
                  Continue
                </Button>}

              </FormControl>
              <FormControl>
                {isLoad2 ? <Button onClick={handleFacebook}
                  style={{ backgroundColor: 'white', marginLeft: '30px', borderRadius: '25px', marginTop: '25px' }}><img style={{ marginRight: "20px", marginLeft: '10px' }} src={imgB} alt='picasa' width='40px' /> <p style={{
                    padding: '5px 75px', fontSize: "16px",
                    fontWeight: '500'
                  }}>Continue with Facebook</p></Button> : <Button
                    isLoading
                    loadingText='Signing using Facebook'
                    color='teal'
                    variant='outline'
                    spinnerPlacement='end'
                    style={{
                      padding: '15px 85px', marginTop: '40px', marginLeft: '35px',
                      borderRadius: '25px', fontSize: '18px'
                    }}
                  >
                  Continue
                </Button>}

              </FormControl>
              <FormControl>
                {isLoad3 ? <Button onClick={handleEmail}
                  style={{ backgroundColor: 'white', marginLeft: '30px', borderRadius: '25px', marginTop: '25px' }}><img style={{ marginRight: "20px", marginLeft: '15px' }} src={imgC} alt='picasa' width='30px' /> <p style={{
                    padding: '5px 90px', fontSize: "16px",
                    fontWeight: '500'
                  }}>Continue with E-mail</p></Button> : <Button
                    isLoading
                    loadingText='Signing using E-mail'
                    color='teal'
                    variant='outline'
                    spinnerPlacement='end'
                    style={{
                      padding: '15px 95px', marginTop: '40px', marginLeft: '35px',
                      borderRadius: '25px', fontSize: '18px'
                    }}
                  >
                  Continue
                </Button>}

              </FormControl>


            </ModalBody>

            <ModalFooter>
              <p style={{
                textAlign: 'center', fontSize: '12px',
                marginTop: '50px'
              }}>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.
                <br></br>
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>









      <Link to='/cart'>
        <p style={{
          color: "white", textDecoration: "none",
          marginTop: '25px'
        }}><ShoppingCartIcon />&nbsp; Basket
        </p></Link>
    </div>
  )
}

export default Navbar