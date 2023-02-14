import {
    Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui//x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Confetti from "react-confetti/dist/Confetti";

const makeThisStyle = makeStyles({
    picker: {
        width:'45%'
    }
});

const Payment = ({ payment, handlePaymentClose }) => {
  const classes = makeThisStyle();
  const [paymentMode, setPaymentMode] = useState("");
  const [cardExpiry, setCardExpiry] = useState();
//   const { register, handleSubmit, control } = useForm();
  const onAgree = (data) => console.log(data);
  const [showPassword, setShowPassword] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };

  const handleCardExpiryChange = (date) => {
    setCardExpiry(date);
  };
//   const onSubmit = (data) => console.log(data)
  const closeAlert = () =>{
    setTimeout(() => {
        setOpenAlert(false)
        handlePaymentClose();
    }, 1500);
  }
  const handlePaynow = () => {
    // handleSubmit()
    setOpenAlert(true)
    closeAlert()
  }
  return (
    <>  
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Dialog
          open={payment}
          onClose={handlePaymentClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          classes={classes.paper}
          >
          <DialogTitle id="alert-dialog-title">
            <Collapse in={openAlert}>
                <Alert severity="success">
                <AlertTitle><strong>Booked</strong></AlertTitle>
                Tickets are booked, Happy Journey  — <strong>Payment Done</strong>
                </Alert>
            </Collapse>
            <Typography variant="h4" fontSize={"22px"} textTransform='uppercase' fontWeight={'600'} textAlign="center">
              Payment Form
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Paper
              sx={{
                width: "500px",
                height: "500px",
                padding: "20px 30px",
                display: "flex",
                flexDirection: "column",
                gap: "3%",
              }}
            >
              <Box sx={{ width: "100%", gap: "5%" }} display="flex">
                <TextField
                  name="firstName"
                  width="45%"
                  required
                  label="First Name"
                //   inputRef={register}
                  placeholder="Enter first name"
                />
                <TextField
                  width="45%"
                  label="Last Name"
                  placeholder="Enter last name"
                  name="lastName"
                //   inputRef={register}
                />
              </Box>

              <Box sx={{ width: "100%", gap: "5%" }} display="flex">
                <TextField
                  label="Email"
                  name="email"
                //   inputRef={register}
                  type={"email"}
                  placeholder="Enter your E-mail"
                  sx={{ width: "75%", gap: "5%" }}
                />
              </Box>

              <Box sx={{ width: "100%" }}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label">
                            Payment Mode
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Payment Mode"
                            name="Payment Mode"
                            sx={{ width: "35%" }}
                            value={paymentMode}
                            onChange={handlePaymentModeChange}
                        >
                            <MenuItem value="debit-card" >Debit Card</MenuItem>
                            <MenuItem value="credit-card" >Credit Card</MenuItem>
                            <MenuItem value="upi" >UPI</MenuItem>
                        </Select>
                        </FormControl>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                {paymentMode !== '' ? paymentMode !== "upi" ? 
                  <>
                    <TextField
                      label="Card holder name"
                      name="cardHolderName"
                    //   inputRef={register}
                      placeholder="Enter card holder name"
                      sx={{ width: "75%" }}
                    />
                    <TextField
                      label="Card number"
                      name="cardNumber"
                    //   inputRef={register}
                      type={"text"}
                      placeholder="Enter card number"
                      sx={{ width: "75%" }}
                    />
                    <Box
                    sx={{
                        display:'flex',
                        gap:'5%',
                        width:'100%'
                    }}
                    >
                    <DesktopDatePicker
                      className={classes.picker}
                      label="Card Expiry Date"
                      name='cardExpiryDate'
                      inputFormat="DD/MM/YYYY"
                    //   inputRef={register}
                      value={cardExpiry}
                      onChange={handleCardExpiryChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <FormControl sx={{ m: 0, width: "25%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        CVV
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        // inputRef={register}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="CVV"
                    />
                    </FormControl>
                    </Box>
                  </>
                 : 
                  <>
                    <TextField
                    name="firstName"
                    sx={{ width: "75%", gap: "5%" }}
                    required
                    label="Enter Bank Name"
                    //   inputRef={register}
                    placeholder="Enter first name"
                    />
                    <TextField
                    label="Enter UPI id"
                    name="email"
                    //   inputRef={register}
                    type={"email"}
                    placeholder="Enter your E-mail"
                    sx={{ width: "55%", gap: "5%" }}
                    />
                  </>
                  : ''
                }
              </Box>
            </Paper>

          </DialogContent>
          <DialogActions>
            <Button onClick={handlePaymentClose} variant='outlined'>Cancel</Button>
            <Button onClick={handlePaynow} autoFocus variant="contained" >
              Pay Now
            </Button>
          </DialogActions>
        </Dialog>
        {/* </form> */}
      </LocalizationProvider>
    </>
  );
};

export default Payment;
