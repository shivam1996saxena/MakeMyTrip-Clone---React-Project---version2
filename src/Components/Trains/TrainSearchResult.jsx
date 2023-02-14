import { Box, color, Container, display } from '@mui/system';
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HiCurrencyRupee } from 'react-icons/hi';
import { Button, Divider, Icon, Stack } from '@mui/material';
import { RiTrainFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const TrainSearchResult = ({

  from,
  to,
  departDate,
  returnDate,
  trip,
  trains,
  setTrains,
  filteredTrains,
  setFilteredTrains,
  handlepayment,
  handlePaymentClose,
  darkMode
}) => {

  const [paymentPage, showPaymentPage] = useState(false);
  const closePayment = () => showPaymentPage(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
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
            {filteredTrains.length>0
            ? filteredTrains.map((data, index) => (
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
                }><RiTrainFill/></Icon>
                <Typography textAlign={'center'} sx={{width:'15%', fontSize: '13px'}} >
                {`Train number `}<strong>{data.train_number}</strong>
                </Typography>
                <Typography textAlign={'center'} variant='h3' width='10%' fontSize={'17px'}>{data.departure.departureTime}</Typography>
                <Typography textAlign={'center'} fontWeight='600' component={'p'} width='10%' variant='h2' fontSize={'17px'} >{data.from}</Typography>
                <Box
                display={'flex'}
                flexDirection='column'
                width='30%'
                >
                    <Typography textAlign={'center'} component={'p'}>{`${data.duration} hrs`}</Typography>
                    <Divider/>
                    <Typography textAlign={'center'} component={'p'}>{`${data.kilometers} kms`}</Typography>
                </Box>
                <Typography textAlign={'center'} fontSize={'17px'} width={'10%'} variant='h3'>{data.departure.departureTime}</Typography>
                <Typography textAlign={'center'} fontSize={'17px'} fontWeight='600' width={'10%'} variant='h2' component={'p'}>{data.to}</Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails
            sx={{
                padding:'0px 100px'
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
                    width:'60%'
                }}
                fullWidth
                >
                <Typography component='p' 
                sx={{
                    width:'100%'
                }}
                >
                        Train Details :
                </Typography>
                <Typography component={'p'} variant='h4' fontWeight={'800'} fontSize='18px' p={'0px 30px'}>
                    {`Train Number : ${data.train_number}`}
                </Typography>
                <Typography component={'p'} variant='h4' fontWeight={'800'} fontSize='18px' p={'0px 30px'}>
                    {`distance : ${data.kilometers}`}
                </Typography>
                <Typography component={'p'} variant='h4' fontWeight={'800'} fontSize='18px' p={'0px 30px'}>
                    {`From : ${data.from}`}
                </Typography>
                <Typography component={'p'} variant='h4' fontWeight={'800'} fontSize='18px' p={'0px 30px'}>
                    {`To : ${data.to}`}
                </Typography>
                <Typography component={'p'} variant='subtitle2' fontSize='16px' p={'0px 30px'}>
                {`Departure Date : ${data.departure.departureDate} | ${data.departure.departureTime}`}  
                </Typography>
                <Typography component={'p'} variant='subtitle2' fontSize='16px' p={'0px 30px'}>
                {trip === 'round' ? `Return Date : ${returnDate}` : 'Return Date : Round trip is turned off' }
                </Typography>
                </Box>
                <Box
                sx={{
                    display:'flex',
                    width:'20%',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:'30px'
                }}
                >
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
                    <Typography variant='h3' fontWeight={'800'} fontSize={'25px'}>
                        {trip === 'round' ? `${parseInt(data.price)*2}` : `${data.price}`}
                    </Typography>
                </Box>
                <Box
                sx={{
                    display:'flex',
                    width:'20%',
                    justifyContent:'center',
                    alignItems:'center'
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
                    mt:'5%'
                }}
                >
                    <Typography textAlign={'center'} color='primary'  variant='h3' fontSize={'30px'} > No Trains found for this route.</Typography>
                </Box>
            </>
            }
        </Box>
      </Container> 
    </>
  )
}

export default TrainSearchResult
