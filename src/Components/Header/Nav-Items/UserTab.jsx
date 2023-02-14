import { KeyboardArrowDownSharp } from "@mui/icons-material";
import { Box, Button, IconButton, Menu, MenuItem,  } from "@mui/material";
import React, { useState } from "react";
import {AiOutlinePoweroff,AiOutlineUser} from 'react-icons/ai'
import {MdLightMode} from 'react-icons/md'
import {GiNightSleep} from 'react-icons/gi'
import { useNavigate } from "react-router";
const UserTab = (props) => {
    const navigate = useNavigate();
    const [anchorE, setAnchorE] = useState(null);
    const open = Boolean(anchorE);
    const handleUserTab = (e) => {
        setAnchorE(e.currentTarget )
    }
    const handleCloseUserTab = (e) => {
        setAnchorE(null);
    }
    const handleLogout = () => {
        navigate('/');
    }
  return <>
            <Box
            sx={{
                width:{xs:'25%',sm:'25%',md:'20%',lg:'20%'},
                display:'flex'
            }}
            >
              <Box 
              sx={{
                width:{xs:'70%',sm:'70%',md:'55%',lg:'55%'},
                height:'90%',
                display:'flex',
                alignItems:'center' 
            }}> 
                <Button sx={{fontSize:'10px'}} color="inherit" id='user-button' 
                // startIcon={<AiOutlineUser/>} 
                endIcon={<KeyboardArrowDownSharp/>} 
                onClick={handleUserTab}
                aria-control={open ? 'userTab' : undefined}
                aria-haspopup={true}
                aria-expanded={open ? 'true' : undefined}
                >
                    {`Hello ${props.username}`}
                </Button>
                <Menu 
                id='userTab' 
                open={open} 
                onClose={handleCloseUserTab}
                anchorEl={anchorE}
                MenuListProps={{
                    "aria-labelledby" : 'user-button',
                }}
                >
                    <MenuItem>
                       <Button onClick={handleLogout} variant="outlined" color="primary">Logout</Button>
                    </MenuItem>
                </Menu>
              </Box>
              <IconButton onClick={()=>props.setDarkMode(!props.darkMode)} >{props.darkMode ? <GiNightSleep/> : <MdLightMode/>}</IconButton>  
            </Box>
        </>;
};

export default UserTab;
