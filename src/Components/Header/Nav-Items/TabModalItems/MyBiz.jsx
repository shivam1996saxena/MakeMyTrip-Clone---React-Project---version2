import { Box, Typography } from "@mui/material";
import React from "react";

const MyBiz = () => {
  return <>
             <Box
            sx={{
                width:{xs:'20%',sm:'20%',md:'25%',lg:'25%'},
                display:'flex',
                alignItems:'center'
            }}
            >
            <Box component={'img'} src='https://promos.makemytrip.com/images/myBiz/appsignup/mybizlogodt.webp' width={'15%'} display='flex' fontSize={'25px'} justifyContent={'center'} alignItems={'center'}></Box>    
            <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                width:'80%',
                justifyContent:'center',
                cursor:'pointer'
            }}
            >
                <Typography height={'50%'} width={'80%'} textAlign='end' fontSize={'12px'} fontWeight='500'>Introducing myBiz
                </Typography>
                <Typography height={'50%'} variant="subtitle" width={'80%'} textAlign='end' fontSize={'10px'} fontWeight='100'>Business travel solution
                </Typography>    
            </Box>    
            </Box>    
        </>;
};

export default MyBiz;
