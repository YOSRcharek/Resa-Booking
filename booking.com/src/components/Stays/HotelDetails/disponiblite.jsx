import React, { useState } from 'react';
import {
  Container,
  Box,
  CssBaseline,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TableContainer,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AppointementBooking from '../SearchPage/appointment-booking';
import styles from "./disponibilitie.module.css";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import  { useEffect } from 'react';
export const Disponibilite = () => {
  const [startValue, onStartValueChange] = useState(new Date());
  const [endValue, onEndValueChange] = useState(new Date());
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);
  const [selector, setSelector] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(2);
  const [price, setPrice] = useState(0); // State to store price
  const location = useLocation();
  const id = location.pathname.split('/')[3];
  const currentMonth = startValue.toLocaleString('default', { month: 'long' });
  const currentDay = startValue.toLocaleString('default', { weekday: 'long' });
  const currentDayNum = startValue.getDate();
  
  const endMonth = endValue.toLocaleString('default', { month: 'long' });
  const endDay = endValue.toLocaleString('default', { weekday: 'long' });
  const endDayNum = endValue.getDate();

  const handleStartDate = () => {
    setStartDate(!startDate);
    setEndDate(false);
    setSelector(false);
  };

  const handleEndDate = () => {
    setStartDate(false);
    setEndDate(!endDate);
    setSelector(false);
  };

  const handleSelector = () => {
    setStartDate(false);
    setEndDate(false);
    setSelector(!selector);
  };

  const handleAdults = (v) => {
    setAdults((prev) => Math.max(prev + v, 1));
  };

  const handleChildren = (v) => {
    setChildren((prev) => Math.max(prev + v, 0));
  };

  const handleRooms = (v) => {
    setRooms((prev) => Math.max(prev + v, 1));
  };



  const createCheckoutSession = async () => {
    try {
      const response = await axios.post('http://localhost:3000/stripe/create-checkout-session', {
        totalPrice: 2000, // Example total price (in dollars)
        propertyId: id, // Example property ID
        paymentMethodTypes: ['card'], // Supported payment methods
        successUrl: 'https://your-website.com/success', // Success URL
        cancelUrl: 'https://your-website.com/cancel' // Cancel URL
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Handle the response, including the session ID
      const sessionurl = response.data.url;
  
      // Redirect the user to the Stripe Checkout page
      window.location.href = sessionurl
    } catch (error) {
      console.error('Error creating Checkout session:', error);
    }
  };
  // Define the book function to call fetchData
  const book = async () => {
    createCheckoutSession()
  /*  if (!startValue || !endValue) {
      console.log('Please select both start and end dates.');
      return;
    }
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    
      const formattedStartDate = formatDate(startValue);
      const formattedEndDate = formatDate(endValue);
    const start = new Date(startValue);
    const end = new Date(endValue);
    const timeDiff = end - start;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const totalPrice = (days * price)*0.1;

    console.log(`PropertyId: ${id}`); 
    console.log(`Check in: ${formattedStartDate}`);
    console.log(`Check out: ${formattedEndDate}`);
    console.log(`Total Days: ${days}`);
    console.log(`Adults: ${adults}`);
    console.log(`Children: ${children}`);
    console.log(`Rooms: ${rooms}`);
    console.log(`Total Price: $${totalPrice}`);
 */ };
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', padding: '0 40px' }}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ backgroundColor: '#f9f9f9', borderRadius: 2 }}>
          <TableContainer component={Paper} sx={{ margin: '0 auto', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Disponibilité
            </Typography>
            <Typography variant="body2" color="error">
              Veuillez sélectionner des dates pour voir les disponibilités et les tarifs de cet établissement.
            </Typography>
            <Box sx={{ marginBottom: '5rem' }} />
            
             {/* Fixed Div to Box */}
             <div className={styles.main}>
            <div className={styles.Dispo}>
                <div className={styles.searchDealsBars}>
                    
                    <div className={styles.calender}>
                        <div className={styles.calenderPermnantItems}>
                            <div>
                                <svg fill="#BDBDBD" focusable="false" height="20" role="presentation" width="20"
                                    viewBox="0 0 128 128">
                                    <path
                                        d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-68-43.3h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm0 28h-12v-12h12zm26 0h-12v-12h12zm0-28h-12v-12h12z"
                                        fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <div onClick={handleStartDate}>
                                <p>{currentDay}</p>
                                <p>{currentDayNum}</p>
                                <p>{currentMonth}</p>
                                -
                            </div>
                            <div>
                                -
                            </div>
                            <div onClick={handleEndDate}>
                                <p>
                                    {endDay}
                                </p>

                                <p>
                                    {endDayNum}

                                </p>
                                <p>
                                    {endMonth}

                                </p>

                            </div>
                        </div>
                        <div className={styles.calender}>
                            {startDate && <div className={styles.calenderItem}>
                            
                            <AppointementBooking
                            onChange={(event) => onStartValueChange(new Date(event.valueText))}
                            value={startValue}
                            onPriceChange={setPrice} // Pass price callback
                          />
                            </div>}
                            {endDate && <div className={styles.calenderItem2}>
                            <AppointementBooking
                            onChange={(event) => onEndValueChange(new Date(event.valueText))}
                            value={endValue}
                            onPriceChange={setPrice} // Pass price callback
                          />
                                            
                            </div>}
                        </div>
                    </div>
                    <div className={styles.selector}>
                        <div className={styles.manIcon}>
                            <img
                                src="https://cf.bstatic.com/static/img/cross_product_index/guest/b2e5f2aa32b71ca0fc66aa671e4e958bcd69b7d0.svg"
                                alt="manSVG"/>
                        </div>
                        <div className={styles.selectorItems} onClick={() => handleSelector()}>
                            <p>
                                {adults} adults .
                            </p>
                            <p>
                                {children} children .
                            </p>
                            <p>
                                {rooms} rooms
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://cf.bstatic.com/static/img/cross_product_index/toggle/fb6f63d62231f9fe552d79b5448620b2e63c726e.svg"
                                alt="corousel"/>
                        </div>
                        {selector && <div className={styles.selectorDropDown}>
                            <div className={styles.adult}>
                                <div>
                                    <h4>Adults</h4>
                                </div>
                                <div>
                                    <div className={styles.button}>
                                        <button
                                            onClick={() => handleAdults(-1)}
                                        >-
                                        </button>
                                    </div>
                                    <div>
                                        <h4>{adults}</h4>
                                    </div>
                                    <div className={styles.button}>
                                        <button
                                            onClick={() => handleAdults(1)}

                                        >+
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.adult}>
                                <div>
                                    <h4>Children</h4>

                                </div>
                                <div>
                                    <div className={styles.button}>

                                        <button
                                            onClick={() => handleChildren(-1)}
                                        >-
                                        </button>
                                    </div>
                                    <div>
                                        <h4>{children}</h4>
                                    </div>
                                    <div className={styles.button}>

                                        <button
                                            onClick={() => handleChildren(1)}

                                        >+
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.adult}>
                                <div>
                                    <h4>Rooms</h4>

                                </div>
                                <div>
                                    <div className={styles.button}>

                                        <button
                                            onClick={() => handleRooms(-1)}
                                        >-
                                        </button>
                                    </div>
                                    <div>
                                        <h4>{rooms}</h4>
                                    </div>
                                    <div className={styles.button}>
                                        <button
                                            onClick={() => handleRooms(1)}
                                        >+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className={styles.button}>
                    
                            <Button onClick={book}> Book </Button>
                    
                    </div>
                </div>
                
            </div>
             </div>
            
            
            
            
             {/* Ensure `suggestions` prop is correctly provided */}
            <Box sx={{ marginBottom: '5rem' }} /> {/* Fixed Div to Box */}
            <Table sx={{ minWidth: 550, marginTop: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Type d'hébergement</TableCell>
                  <TableCell>Nombre de voyageurs</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box>
                      <Typography variant="body1" component="div">
                        <strong>Appartement 2 Chambres</strong>
                      </Typography>
                      <Typography variant="body2">Chambre 1: 1 lit double</Typography>
                      <Typography variant="body2">Chambre 2: 1 lit double</Typography>
                      <Typography variant="body2">Salon: 1 canapé-lit</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">×6</Typography>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      Voir les tarifs
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </LocalizationProvider>
    </Container>
  );
};
function endDatePicker(D, M, day) {
  let month = [];
  for (let i = 0; i < 12; i++) {
      month.push(0)
  }
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "March";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "Aug";
  month[8] = "Sept";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  let weekday = [];
  for (let i = 0; i < 7; i++) {
      weekday.push(0)
  }
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thur";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  let currentDay = weekday[D];

  let currentMonth = month[M];

  return [currentMonth, currentDay, day]
}
