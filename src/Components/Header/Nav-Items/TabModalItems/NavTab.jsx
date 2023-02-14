import { Box, css, Dialog, DialogActions, DialogContent, DialogTitle, Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import {CiBadgeDollar} from 'react-icons/ci'
import {FaHiking} from 'react-icons/fa'
import styled, { keyframes } from "styled-components";
import MyBiz from "./MyBiz";
import NavTabItem from "./NavTabItem";


const styles = makeStyles({
    
})
const NavTab = () => {
    const classes = styles();
    const [openBiz, setOpenBiz] = useState(false)
    const rotateCenter = keyframes`
    0%{transform:rotateY(0)}100%{transform:rotateY(180deg)}
    `;
    const OfferIcon = styled.i`
        font-size: 30px;
        color: #ffffff;
        animation: ${rotateCenter} .7s ease-out infinite backwards; 
    `;
  return <>
            <Box 
            sx={{
                width:{xs:'60%',sm:'60%',md:'65%',lg:'65%',},
                height:'auto',
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:'15px'
            }}>
                <NavTabItem  value='offers' icon={<OfferIcon><CiBadgeDollar/></OfferIcon>} heading='Super offers' description='Explore great deals and offers'/>
                <MyBiz value='myBiz'/>
                <NavTabItem value='trips' icon={<FaHiking/>} heading='MyTrips' description='Manage Your Bookings'/>
            </Box>
            
        </>;
};

export default NavTab;
