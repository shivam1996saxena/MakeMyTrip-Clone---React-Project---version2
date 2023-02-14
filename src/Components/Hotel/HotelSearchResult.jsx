import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Icon, Paper, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React, { useState } from 'react'
import { MdHotel } from 'react-icons/md';
import { HiCurrencyRupee } from 'react-icons/hi';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';

const HotelSearchResult = ({
  city,
  cityData,
  guests,
  checkInDate,
  checkOutDate,
  hotelsProps,
  filteredHotels,
  handlepayment,
  darkMode,
  lightTheme,
  darkTheme
}) => {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
  };
  
  
  function getFormattedDate(date) {
      
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return day + '/' + month + '/' + year;
  }

  
    
  
  

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container 
      sx={{
        display:'flex',
        justifyContent:'center',
        paddingLeft:'0px'
      }}
      >
        <Box 
        sx={{
            width:'90%',
        }}
        >
            

            {console.log(filteredHotels)}
          {filteredHotels.length>0
            ? filteredHotels.map((data, index) => (
            <>
            <Accordion expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)} sx={{padding: '0px 50px'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            
            >
                <Stack direction={'row'} alignItems='center' width={'100%'} spacing={6.5}>
                <Icon 
                sx={ 
                    darkMode ? 
                    {fontSize: '30px', color:'#e91e63', width:'5%'}
                    :
                    {fontSize: '30px', color:'#1976d2', width:'5%'}
                }>
                        <MdHotel/>
                </Icon>
                <Typography textAlign={'center'} sx={{width:'10%'}} >
                {data.city}
                </Typography>

                <Typography textAlign={'center'} fontWeight='300' component={'p'} width='18%' variant='subtitle2' fontSize={'14spx'} >{`Hotel : ${data.hotel_name}`}</Typography>
                <Box
                display={'flex'}
                flexDirection='column'
                width='30%'
                >
                    <Typography textAlign={'center'} fontSize={'15px'} component={'p'}>
                        Check-in : {getFormattedDate(checkInDate)}
                    </Typography>
                    <Divider/>
                    <Typography textAlign={'center'} fontSize={'15px'} component={'p'}>Check-out : {getFormattedDate(checkOutDate)}</Typography>
                </Box>
                <Typography textAlign={'center'} fontSize={'15px'} width={'10%'} variant='h5'><strong>Room type</strong><br/>{`${data.room_type}`}</Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails
            sx={{
                padding:'0px 80px'
            }}
            >
                <Box
                sx={{
                    display:'flex'
                }}
                >
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'3px',
                    width:'50%'
                }}
                fullWidth
                >
                <Typography component='p' 
                sx={{
                    width:'100%'
                }}
                >
                        Hotel Details :
                </Typography>
                <Typography component={'p'} variant='h4' fontSize='16px' p={'0px 30px'}>
                {`City : ${data.city}`}  
                </Typography>
                <Typography component={'p'} variant='subtitle2' fontSize='14px' p={'0px 30px'}>
                {`Hotel Name : ${data.hotel_name}`} <br /><strong> Ratings : {`${data.rating}/10`}</strong>   
                </Typography>
                <Typography component={'p'} variant='h4' fontWeight={'800'} fontSize='14px' p={'0px 30px'}>
                    From : {getFormattedDate(checkInDate)}
                </Typography>
                <Typography component={'p'} variant='h4' fontWeight={'800'} fontSize='14px' p={'0px 30px'}>
                   To : {getFormattedDate(checkOutDate)}
                </Typography>
                <Typography component={'p'} variant='subtitle2' fontSize='14px' p={'0px 30px'}>
                {`Room Type : ${data.room_type}`}  
                </Typography>
                <Typography component={'p'} variant='subtitle2' fontSize='14px' fontWeight='600' p={'0px 30px'}>
                {`Slected Guests : ${guests}`}  
                </Typography>
                </Box>
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    width:'20%',
                    justifyContent:'center',
                    gap:'30px'
                }}
                >   <Box display={'flex'}>
                    <Icon 
                    sx={ 
                        darkMode ? 
                        {fontSize: '30px', color:'#e91e63'}
                        :
                        {fontSize: '30px', color:'#1976d2',}
                    }
                    color={'success'}
                    >
                        <HiCurrencyRupee />
                    </Icon>
                    <Typography textAlign={'center'} variant='h3' fullWidth fontWeight={'800'} fontSize={'16px'}>
                        {guests >= 2 ?  `Total Price : ${(parseInt(data.price_per_night)/2)*guests}` : `${data.price_per_night}` }
                    </Typography>
                    </Box>
                    <Box display={'flex'}>
                    <Icon 
                    sx={ 
                        darkMode ? 
                        {fontSize: '30px', color:'#e91e63'}
                        :
                        {fontSize: '30px', color:'#1976d2',}
                    }
                    color={'success'}
                    >
                        <HiCurrencyRupee />
                    </Icon>
                    <Typography textAlign={'center'} fullWidth variant='h3' fontWeight={'800'} fontSize={'12px'}>
                        {`Rent charges/Night : ${data.price_per_night}`}
                    </Typography>
                    </Box>
                </Box>
                <Box
                sx={{
                    display:'flex',
                    width:'20%',
                    justifyContent:'center',
                    alignItems:'center',
                    ml:'14%'
                }}
                >
                    <Button variant='contained'
                    color= 'primary'
                    sx={{
                        width:'90%',
                        height:'25%',
                        padding:'20px 0px',
                        borderRadius:'10px',
                        ml:3
                    }}
                    component={Link}
                    to={'/payment'}
                    onClick={handlepayment}
                    >Book Ticket
                    </Button>
                </Box>
                </Box>
            </AccordionDetails>
            </Accordion>
            </>
            )) 
            : 
            <>
                <Box
                sx={{
                    width:'100%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    mt:'5%',
                }}
                >
                    <Typography textAlign={'center'} color='primary'  variant='h3' fontSize={'30px'} > No Hotels found for this location.</Typography>
                </Box>
            </>
            }

        </Box>
      </Container>
      </LocalizationProvider>
    </>
  )
}

export default HotelSearchResult
