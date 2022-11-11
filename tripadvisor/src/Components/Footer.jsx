import axios from 'axios';
import img1 from '../LOGO/VoyageGuide.png'
import {
  FormControl, ModalCloseButton, ModalHeader,
  ModalBody, Button, useDisclosure, Modal, ModalOverlay, ModalFooter,
  ModalContent, FormLabel, Input, Center
} from '@chakra-ui/react';
import { useState, useRef } from 'react';

const init = {
  pic: "",
  title: ""
}


const Footer = () => {
  const [product, setProduct] = useState(init);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [token, setToken] = useState("")
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })

  const handleChangeproduct = (e) => {
    setProduct({ ...product, [e.target.name]:e.target.value})
  }

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })
  }
 console.log(product);

  const handleSubmitproduct = () => {
    axios({
      method: "POST",
      url: "http://localhost:8080/products",
      data: product
    })
   
  }

  const handleLogin = () => {
    axios({
      method: "POST",
      url: `https://reqres.in/api/login`,
      data: loginDetails,
    })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const { email, password } = loginDetails;
  console.log(token)

  return (<div style={{ marginTop: '80px' }}>
    <div style={{ textAlign: 'left', display: 'flex', backgroundColor: "#FAF1ED", fontFamily: "sans-serif", paddingLeft: '150px' }}>
      <div style={{ width: "60%", padding: "0px" }}>
        <div style={{ display: "flex" }}>
          <div>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ fontSize: "16px", color: "#333333", lineHeight: "25px" }}>About Tripadvisor</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>About us</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Press</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Resources and Policies</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Careers</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Trust & safety</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Contact us</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Accessibility Statement</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ fontSize: "16px", color: "#333333", lineHeight: "25px" }}>Explore</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Write a review</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Add a Place</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Join</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Travellers' Choice</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>GreenLeaders</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Help Centre</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Travel Articles</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ fontSize: "16px", color: "#333333", lineHeight: "25px" }}>Do Business With Us</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Owners & DMO/CVB</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Business Advantage</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Sponsored Placements</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Access our Content API</li>

              <li style={{ fontSize: "16px", color: "#333333", lineHeight: "25px" }}>Get The App</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>iPhone App</li>
              <li style={{ fontWeight: "700", fontSize: "14px", color: "#545454", lineHeight: "17px" }}>Android App</li>
            </ul>
          </div>

        </div>

        <div>
          <div style={{ width: '100%' }}>
            <p style={{ marginLeft: "40px", marginBottom: "-15px", fontSize: "12px" }}>© 2022 Tripadvisor LLC All rights reserved.</p>
            <div>
              <div style={{ display: "flex", marginLeft: '40px', width: '80%' }}>
                <p style={{ marginRight: "20px" }}><u>Terms of Use</u></p>
                <p style={{ marginRight: "20px" }}><u>Privacy and Cookies Statement</u></p>
                <p style={{ marginRight: "20px" }}><u>Cookie consen</u>t</p>
                <p style={{ marginRight: "20px" }}><u>Site Map</u></p>
              </div>
              <div style={{ display: "flex", marginLeft: '40px', marginTop: "-30px", width: '100%' }}>
                <p style={{ marginRight: "20px" }}><u>How the site works</u></p>
                <p style={{ marginRight: "20px" }}><u>Contact us</u></p>
              </div>

            </div>

            <p style={{ marginLeft: '40px', marginTop: "-10px", fontSize: "12px" }}>This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. more</p>
          </div>
        </div>

      </div>
      <div>
        <div style={{}}>
          <ul style={{ listStyle: 'none' }} >
            <li style={{ fontSize: "16px", color: "#333333", lineHeight: "25px" }}>Tripadvisor Sites</li>
            <li>Book tours and attraction tickets on <b>Viator</b></li>
          </ul>
          {token === "" ? <div>
            <Button onClick={onOpen} style={{
              color: "white", textDecoration: "none", backgroundColor: 'white', color: "#051D40",
              fontSize: "18px", borderRadius: "25px", marginTop: '15px', marginLeft: '80px', marginRight: '20px', paddingLeft: "25px",
              paddingRight: "25px", paddingTop: '5px', paddingBottom: '0px'
            }}>{token === "" ? "Admin SignIn" : "Welcome Admin"}</Button>

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
                  Sign in to Admin panel of Voyage Guide</ModalHeader>

                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel style={{ fontSize: '20px', color: '#051D40', marginTop: '15px',marginLeft:'50px' }}>Email Address</FormLabel>
                    <Input name="email" type="email" value={email} onChange={handleChange}
                      style={{
                        padding: '5px 55px', borderRadius: '25px', fontSize: '20px',
                        marginTop: '10px',marginLeft:'50px'
                      }}></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel style={{ fontSize: '20px', color: '#051D40', marginTop: '15px',marginLeft:'50px' }}>Password</FormLabel>
                    <Input style={{
                      padding: '5px 55px', borderRadius: '25px', fontSize: '20px',
                      marginTop: '10px',marginLeft:'50px'
                    }} name="password" type="password" value={password} onChange={handleChange}></Input>
                  </FormControl>
                  <Center>
                    <Button style={{color:'white',backgroundColor:"#051D40",
                    padding:'5px 35px',marginTop:'35px',
                    borderRadius:"25px",fontSize:'18px'}} onClick={handleLogin}>
                      LOGIN
                    </Button>
                  </Center>


                </ModalBody>

                <ModalFooter>
                  <Center>
                    <p style={{
                      textAlign: 'center', fontSize: '12px',
                      marginTop: '50px',marginRight:'115px'
                    }}>Welcome to the Admin panel
                      <br></br>
                      This page will redirect you to admin portal</p>
                  </Center>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div> : <div>
            <Button onClick={onOpen} style={{
              color: "white", textDecoration: "none", backgroundColor: 'white', color: "#051D40",
              fontSize: "18px", borderRadius: "25px", marginTop: '15px', marginLeft: '80px', marginRight: '20px', paddingLeft: "25px",
              paddingRight: "25px", paddingTop: '5px', paddingBottom: '5px'
            }}>{token === "" ? "Admin SignIn" : "Welcome Admin"}</Button>

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
                  Admin Login Token : {token}</ModalHeader>

                <ModalBody pb={6} >
                  <br></br>
                  <br></br>

                  <Input style={{ fontsize: '25px', padding: '7px 65px', borderRadius: '25px', textAlign: 'left' ,marginLeft:'50px'}} 
                  placeholder="image source"
                    onChange={handleChangeproduct} type="text" name="pic" value={product.pic} />

                  
                  <br></br><br></br>

                  <Input style={{ fontsize: '25px', padding: '7px 65px', borderRadius: '25px', textAlign: 'left'
                  ,marginLeft:'50px' }} type="text" placeholder="Title"
                    onChange={handleChangeproduct} name="title" value={product.title} />
                 
                  <br></br>
                  <br></br>
                  <Button style={{
                    backgroundColor: '#051D40', color: 'white',
                    padding: '10px 45px', borderRadius: '25px',marginLeft:'100px'
                  }}
                    colorScheme='teal' mr={3} onClick={function () { handleSubmitproduct(); onClose() }}>
                    Add more places
                  </Button>
                </ModalBody>

              </ModalContent>
            </Modal>
          </div>}
        </div>
        <div style={{ marginLeft: '50px' }}>
          <select style={{
            borderRadius: "15px", padding: "5px 20px 5px 5px",
            margin: '50px 15px 55px 15px'
          }}>
            <option>INR</option>
            <option>Dollar</option>
            <option>Euro</option>
            <option>Pound</option>
            <option>Rubles</option>
            <option>Dirham</option>
            <option>Dinar</option>
            <option>Yen</option>
            <option>Yaun</option>
            <option>Real</option>


          </select>
          <select style={{
            borderRadius: "15px", padding: "5px 20px 5px 5px",
            margin: '15px'
          }}>
            <option>India</option>
            <option>America</option>
            <option>London</option>
            <option>Britain</option>
            <option>Russia</option>
            <option>UAE</option>
            <option>China</option>
            <option>Japan</option>
            <option>Canada</option>
            <option>Australia</option>


          </select>
        </div>

        <div style={{ backgroundColor: "white", marginBottom: "15px", marginLeft: "100px", width: "55%" }}>
          <img width="45px" src="https://tse1.mm.bing.net/th?id=OIP.QTyihsvnfYbJL9dQLrhTsgHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" />
          <img width="40px" src="https://tse1.mm.bing.net/th?id=OIP.maD3GoTpodAtk505594YOgHaHu&pid=Api&rs=1&c=1&qlt=95&w=112&h=117" />
          <img width="55px" src="https://tse2.mm.bing.net/th?id=OIP.fb0LUcIKaVkBqExMCDUA9gHaFj&pid=Api&P=0" />
          <img width="40px" src="https://tse2.mm.bing.net/th?id=OIP.7EnJXdlI46eYKUYKt9K8ogHaHa&pid=Api&P=0" />
        </div>
      </div>
    </div>
  </div>

  )
}

export default Footer