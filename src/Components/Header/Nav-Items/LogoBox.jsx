import { Box } from "@mui/system";
import React from "react";
import logo from '../../Header/logo.png'

const LogoBox = () => {
  return <>
            <Box
            sx={{
                width:{xs:'20%',sm:'20%',md:'15%',lg:'15%'},
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                cursor:'pointer'
            }}
            >
            <Box
            component={'img'}
            sx={{
                width:{xs:'100%',sm:'100%',md:'85%',lg:'70%'}
            }}
            src={logo}
            />   
            </Box>
        </>;
};

export default LogoBox;
