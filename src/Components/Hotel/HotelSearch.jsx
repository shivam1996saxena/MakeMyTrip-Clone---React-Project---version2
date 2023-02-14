import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui//x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import './HotelSearch.css'
import moment from "moment";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles( {
  formBox: {
    display: "flex",
    flexDirection:'column',
    width: "70%",
    height: "90%",
    alignItems: "center",
    background: grey[100],
    borderRadius: "8px",
    // boxShadow: "0 1px 7px 0 rgb(0 0 0 / 40%)",
    position: "relative",
    top: "-30px",
  },
  formBoxDark: {
    display: "flex",
    flexDirection:'column',
    width: "70%",
    height: "90%",
    alignItems: "center",
    background: grey[700],
    borderRadius: "8px",
    boxShadow: "30px 30px 7px 30 rgb(0 0 0 / 40%)",
    position: "relative",
    top: "-30px",
  },
  pickerFormat: {
    position: "relative",
    width: "18%",
  },
  
});
const styles = makeStyles( {
    root:{
        '& .MuiButton-root': {
            width:'20%',
            height:'100%',
            borderRadius:15,
            color:'white',
            padding:'5px 30px',
            border:0,
            background:'linear-gradient(93deg,#53b2fe,#065af3)',
    }
      }
})

const HotelSearch = ({
  city,
  cityData,
  setCity,
  setCityData,
  guests,
  setGuests,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  hotelsProps,
  setHotelsProps,
  filteredHotels,
  setFilteredHotels,
  darkMode
}) => {
  const classes = useStyles();
  const [hotels, setHotels] = useState([]);
  const [hotelOption, setHotelOption] = useState([]);
  const handleTodayDate = (date) => {
    setCheckInDate(date.$d);
  };
  const handleReturnDate = (date) => {
    setCheckOutDate(date.$d); 
  };
  const handleSarch = (e) => {
    e.preventDefault();
    let data = [...hotelsProps];
    let result = data.filter((data) => data.city === city);
    console.log(data);
     // console.log(from + 'from');
    // console.log(to + 'to');
    setFilteredHotels(result);
  }
  const handleGuestChange = (e) => {
    setGuests(e.target.value);
    console.log(e.target.value)
  }
  useEffect(() => {
    // fetchData();
    fetch(
      "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
    )
      .then((response) => response.json())
      .then((data) => {
        setHotelOption(data);
        
        let arr = [];
        arr = data.map((option) => {
          return option.city;
        });
        setCityData(arr);
        arr = data.map((option) => {
          return option.hotel_name;
        });
        setHotels(arr);
        // console.log(arr)
      });
  }, []);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
          sx={{
            width: "100%",
            height: "260px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper className={darkMode ? classes.formBoxDark : classes.formBox}>
                <Box
                sx={{
                  width:'100%',
                  mt:'4%',
                  display:'flex',
                  gap:'3%',
                  padding:'30px 20px'
                }}
                >
                  <Autocomplete
                    defaultValue={""}
                    id="departing-city"
                    getOptionLabel={(cityData) => cityData}
                    options={cityData}
                    
                    sx={{
                      width: "20%",
                      height: "30%",
                      ml: "10%",
                    }}
                    value={city}
                    onChange={(e, newValue) => {
                      setCity(newValue);
                    }}
                    isOptionEqualToValue={(option, value) =>
                      option === value
                    }
                    noOptionsText={`Departing city not available choose another route`}
                    renderInput={(params) => (
                      <TextField {...params} label={"Select departing city"} />
                    )}
                  />
                  <DesktopDatePicker
                    className={classes.pickerFormat}
                    label="Check-IN"
                    inputFormat="DD/MM/YYYY"
                    value={checkInDate}
                    onChange={handleTodayDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DesktopDatePicker
                    className={classes.pickerFormat}
                    label="Check-OUT"
                    inputFormat="DD/MM/YYYY"
                    value={checkOutDate}
                    onChange={handleReturnDate}
                    renderInput={(params) => <TextField {...params} />}
                    // disabled={active ? true : false}
                    // onClick={handleDisable}
                  />
                  <FormControl sx={{minWidth:180}}>
                        <InputLabel id="demo-simple-select-helper-label">
                            No. of Guests
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="No. of Guests"
                            name="Guests"
                            value={guests}
                            onChange={handleGuestChange}
                        >
                            <MenuItem value={1} >One</MenuItem>
                            <MenuItem value={2} >Two</MenuItem>
                            <MenuItem value={3} >Three</MenuItem>
                            <MenuItem value={4} >Four</MenuItem>
                            <MenuItem value={5} >Five</MenuItem>
                            <MenuItem value={6} >Six</MenuItem>
                            <MenuItem value={7} >Seven</MenuItem>
                            <MenuItem value={8} >Eight</MenuItem>
                        </Select>
                        </FormControl>
                </Box>
                <Box
            sx={{
                width: "100%",
                height: "20%",
                display: "flex",
                justifyContent:'center'
              }}
            >
                <Button
                sx={
                  darkMode ?
                  {
                    width:'20%',
                    height:'100%',
                    borderRadius:15,
                    color:'white',
                    padding:'15px 30px',
                    background: ' linear-gradient(to right, #ec008c, #fc6767);',
                    border:0,
                    fontSize:'25px',
                    position:'relative',
                    top:'45px'
                  }
                   :
                  {
                    width:'20%',
                    height:'100%',
                    borderRadius:15,
                    color:'white',
                    padding:'15px 30px',
                    background:'linear-gradient(93deg,#53b2fe,#065af3)',
                    border:0,
                    fontSize:'25px',
                    position:'relative',
                    top:'45px'
                  }
                }
                onClick={handleSarch}
                >SEARCH</Button>
            </Box>
            </Paper>
          </Paper>
      </LocalizationProvider>
    </>
  )
}

export default HotelSearch
