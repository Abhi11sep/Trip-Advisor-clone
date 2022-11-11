import React from 'react'
import BedIcon from '@mui/icons-material/Bed';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LanguageIcon from '@mui/icons-material/Language';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ChevronDownIcon } from '@chakra-ui/icons'
import '../Components/Option.css';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button } from '@chakra-ui/react';

const Options = () => {
    return (
        <div style={{
            display: 'flex', justifyContent: 'space-between', width: '80%'
            , margin: 'auto', marginTop: '20px', marginBottom: "20px"
        }}>
            <button className="example" style={{
                display: 'flex', width: '180px',
                justifyContent: 'space-evenly', borderRadius: '5px',
               
            }}>

                <h3 style={{ paddingLeft: '15px' }}>Hotels</h3><BedIcon style={{ marginTop: '15px' }} /> &nbsp;

            </button>
            <button className="example" style={{
                display: 'flex', width: '180px',
                justifyContent: 'space-between', borderRadius: '5px',
                
            }}>
                <h3 style={{ paddingLeft: '5px' }}>Holidays Homes</h3>
                <NightShelterIcon style={{ marginTop: '15px' }} /> &nbsp;

            </button>
            <button className="example" style={{
                display: 'flex', width: '180px',
                justifyContent: 'space-between', borderRadius: '5px',
                
            }}>
                <h3 style={{ paddingLeft: '15px' }}>Things Todo</h3>
                <PlaylistAddCheckIcon style={{ marginTop: '15px' }} /> &nbsp;

            </button>
            <button className="example" style={{
                display: 'flex', width: '180px',
                justifyContent: 'space-between', borderRadius: '5px',
                
            }}>  <h3 style={{ paddingLeft: '15px' }}>Restaurents</h3>
                <RestaurantIcon style={{ marginTop: '15px' }} /> &nbsp;

            </button>

            <button className="example" style={{
                display: 'flex', width: '180px',
                justifyContent: 'space-between', borderRadius: '5px',
              
            }}>  <h3 style={{ paddingLeft: '15px' }}>Travel Stories</h3>
                <LanguageIcon style={{ marginTop: '15px' }} /> &nbsp;

            </button>

            {/* <button style={{
                display: 'flex', width: '180px',
                justifyContent: 'space-between', borderRadius: '5px',
                backgroundColor: 'white'
            }}>  <h3 style={{ paddingLeft: '15px' }}>More</h3>
                <MoreHorizIcon style={{ marginTop: '15px' }} /> &nbsp;

            </button> */}
            <Menu>
                <MenuButton className="example" transition='all 0.2s'

                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'outline' }}
                    style={{
                        display: 'flex', width: '180px',
                        justifyContent: 'space-between', borderRadius: '5px',
                     
                    }}
                >
                    <h3 style={{ paddingLeft: '5px', display: 'inline' }}>More</h3>
                    <MoreHorizIcon style={{ marginLeft: '15px', marginTop: '-15px' }} />

                </MenuButton>
                <MenuList style={{
                    border: '2px solid black',
                    backgroundColor: 'silver',
                    marginLeft: '0px',zIndex:'15px'
                }}>
                    {/* <MenuItem style={{ border: 'none',textAlign:'left', padding: '5px 5px', fontSize: '18px', backgroundColor: 'white' }}>Add a Place</MenuItem> */}
                    <MenuItem style={{ border: 'none',textAlign:'left', padding: '5px 5px', fontSize: '18px', backgroundColor: 'white' }}>Airlines</MenuItem>

                    {/* <MenuItem style={{ border: 'none',textAlign:'left', padding: '5px 5px', fontSize: '18px', backgroundColor: 'white' }}>Car Hire</MenuItem> */}
                    {/* <MenuItem style={{ border: 'none',textAlign:'left', padding: '5px 5px', fontSize: '18px', backgroundColor: 'white' }}>Curises</MenuItem> */}
                    <MenuItem style={{ border: 'none',textAlign:'left', padding: '5px 5px', fontSize: '18px', backgroundColor: 'white' }}>Flights</MenuItem>
                    {/* <MenuItem style={{ border: 'none',textAlign:'left', padding: '5px 5px', fontSize: '18px', backgroundColor: 'white' }}>Help Centre</MenuItem> */}
                    <MenuItem style={{ border: 'none',textAlign:'left', padding: '5px 5px', fontSize: '18px', backgroundColor: 'white' }}>Package Holidays</MenuItem>
                    {/* <MenuItem style={{ border: 'none',textAlign:'left', padding: '5px 5px', fontSize: '18px', backgroundColor: 'white' }}>Travel Forums</MenuItem> */}
                    <MenuItem style={{ border: 'none',textAlign:'left', padding: '5px 25px 5px 5px', fontSize: '18px', backgroundColor: 'white'}}>Traveller's Choice</MenuItem>
                </MenuList>
            </Menu>

        </div>
    )
}

export default Options