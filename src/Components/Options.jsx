import React from 'react'
import BedIcon from '@mui/icons-material/Bed';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LanguageIcon from '@mui/icons-material/Language';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../Components/Option.css';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { AirportShuttleSharp, LocalAirportSharp } from '@material-ui/icons';

const Options = () => {
    return (
        <div id="main_option" >
            <button className="example">
                <h3>Hotels</h3>
                <BedIcon className='icons' /> &nbsp;
            </button>
            <button className="example">
                <h3>Home Stay</h3>
                <NightShelterIcon className='icons' /> &nbsp;
            </button>
            <button className="example">
                <h3>Things Todo</h3>
                <PlaylistAddCheckIcon className='icons' /> &nbsp;
            </button>
            <button className="example" >
                <h3>Restaurents</h3>
                <RestaurantIcon className='icons' /> &nbsp;
            </button>

            <button className="example">
                <h3>Travel Stories</h3>
                <LanguageIcon className='icons' /> &nbsp;
            </button>

            <button className="example">
                <h3>Airlines</h3>
                <LocalAirportSharp className='icons' /> &nbsp;
            </button>

        </div>
    )
}

export default Options