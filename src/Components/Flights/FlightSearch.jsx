import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui//x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import './FlightSearch.css'

const useStyles = makeStyles( {
  formBox: {
    display: "flex",
    flexDirection:'column',
    width: "70%",
    height: "90%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "30px 30px 7px 30 rgb(0 0 0 / 40%)",
    position: "relative",
    top: "-30px",
  },
  pickerFormat: {
    position: "relative",
    width: "18%",
    height: "30%",
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
const FlightSearch = ({
  from,
  setfrom,
  to,
  setTo,
  flightsProps,
  setFilteredFlights,
  departData,
  setDepartData,
  destinationData,
  setDestinationData,
  departDate,
  setDepartDate,
  returnDate,
  setReturnDate,
  trip,
  setTrip,
  darkMode
}) => {
  const classes = useStyles();
  const [flightOptions, setFlightOptions] = useState([]);


  const handleTodayDate = (date) => {
    setDepartDate(date);
    console.log(date);
  };
  const handleTomorrowDate = (date) => {
    setReturnDate(date);
  };
  const handleTrip = (e) => {
        setTrip(e.target.value)
  }
  
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`
      );
      const data = await response.json();
      setFlightOptions(data);

      console.log(data.from);
      console.log("data");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSarch = (e) => {
    e.preventDefault();
    let data = [...flightsProps];
    console.log(data);
    let result = data.filter((data) => data.from === from && data.to === to);
     // console.log(from + 'from');
    // console.log(to + 'to');
    setFilteredFlights(result);
  }

  useEffect(() => {
    // fetchData();
    fetch(
      "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
    )
      .then((response) => response.json())
      .then((data) => {
        setFlightOptions(data);
        let arr = [];
        arr = data.map((option) => {
          return option.from;
        });
        setDepartData(arr);
        arr = data.map((option) => {
          return option.to;
        });
        setDestinationData(arr);
      });

    // console.log('AirportData')
    // fetch('https://app.goflightlabs.com/flights?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNjA2MTFlOWI3Yzc4ZjA3MTgzYzVmZGQwMzM0ZTE4NjEyYWM0NWYxNWMxMTBlYzEwMzU1NTg5ZjU2Njk3M2Y1NWE2ZThmN2VhZjRhODM3ZjAiLCJpYXQiOjE2NzYwMDUxODgsIm5iZiI6MTY3NjAwNTE4OCwiZXhwIjoxNzA3NTQxMTg4LCJzdWIiOiIyMDAyNyIsInNjb3BlcyI6W119.HLnM8aq-q92roSLyHUMuzZMoKuuFvBlyL48Z8w4oYP7y_jyFxufiF-J4if_FRju9cF7hXK2P58Y1FlYtnnPvGw')
    // .then((response) => response.json())
    // .then((data)=>setAirportData(data));
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
          <Paper className={classes.formBox}>
            <Box
              sx={{
                width: "100%",
                height: "15%",
                display: "flex",
                paddingTop:'24px',
                ml:'16%',
                gap: "20px",
                mt:'10px'
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={trip}
                onChange={handleTrip}

              >
                <FormControlLabel
                
                  value="oneway"
                  control={<Radio />}
                  label="ONEWAY"
                />
                <FormControlLabel
                  value="round"
                  control={<Radio />}
                  label="ROUND TRIP"
                />
              </RadioGroup>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "50%",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                paddingTop:3
              }}
            >
              <Autocomplete
                defaultValue={""}
                id="departing-city"
                getOptionLabel={(departData) => departData}
                options={departData}
                sx={{
                  width: "18%",
                  height: "30%",
                  ml: "10%",
                }}
                value={from}
                onChange={(e, newValue) => {
                  setfrom(newValue);
                }}
                isOptionEqualToValue={(options, value) =>
                  options.from === value
                }
                noOptionsText={`Departing city not available choose another route`}
                renderInput={(params) => (
                  <TextField {...params} label={"Select departing city"} />
                )}
              />
              <Autocomplete
                defaultValue={""}
                id="destination-city"
                getOptionLabel={(destinationData) => destinationData}
                options={destinationData}
                sx={{ width: "18%", height: "30%" }}
                value={to}
                onChange={(e, newValue) => {
                  setTo(newValue);
                }}
                isOptionEqualToValue={(options, value) =>
                  options.from === value
                }
                noOptionsText={`Destination city not available choose another route`}
                renderInput={(params) => (
                  <TextField {...params} label={"Select destination city"} />
                )}
              />
              <DesktopDatePicker
                className={classes.pickerFormat}
                label="DEPARTURE"
                inputFormat="DD/MM/YYYY"
                value={departDate}
                onChange={handleTodayDate}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                disabled={trip === 'oneway' ? true : false}
                className={classes.pickerFormat}
                label="RETURN"
                inputFormat="DD/MM/YYYY"
                value={returnDate}
                onChange={handleTomorrowDate}
                renderInput={(params) => <TextField {...params} />}
              />
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
  );
};

export default FlightSearch;
