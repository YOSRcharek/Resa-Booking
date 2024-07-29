import React, { useCallback, useState, useEffect } from 'react';
import { Datepicker } from '@mobiscroll/react';
import './appointment-booking.css';
import { Container } from '@mui/material';
import {useLocation} from "react-router-dom";

function AppointementBooking({ onChange, value}) {
  const [singleLabels, setSingleLabels] = useState([]);
  const [singleInvalid, setSingleInvalid] = useState([]);
  const location=useLocation()
  const propertyId=location.pathname.split('/')[2]
 
  console.log(propertyId);
  const fetchAvailabilityData = useCallback(async (year, month) => {
    try {
      const response = await fetch(`http://localhost:3000/Availability/propertyById/${propertyId}`);
      const data = await response.json();

      const labels = [];
      const invalid = [];

      data.forEach(entry => {
        entry.available_slots.forEach(slot => {
          const startDate = new Date(slot.start_time);
          const endDate = new Date(slot.end_time);

          console.log(`Start Date: ${startDate}, End Date: ${endDate}, Price: ${slot.price}`); // Debug: Log slot details
          if (slot.price > 0) {
            labels.push({
              start: startDate,
              end: endDate,
              title: '$' + slot.price,
              textColor: '#e1528f',
            });
          } else {
            invalid.push(startDate);
          }
        });
      });

      console.log('Labels:', labels); // Debug: Log labels
      setSingleLabels(labels);
      setSingleInvalid(invalid);
      console.log('Fetched data:', data); // Debug: Log fetched data
    } catch (error) {
      console.error('Error fetching availability data:', error);
    }
  }, [propertyId]);

  const handlePageLoadingSingle = useCallback((args) => {
    const d = args.firstDay;
    fetchAvailabilityData(d.getFullYear(), d.getMonth() + 1);
  }, [fetchAvailabilityData]);

  return (
    <Container>
      <div className="mbsc-form-group">
        <Datepicker
          theme="ios"
          themeVariant="light"
          display="inline"
          controls={['calendar']}
          labels={singleLabels}
          invalid={singleInvalid}
          pages="auto"
          onPageLoading={handlePageLoadingSingle}
          value={value}
          onChange={onChange}
        />
      </div>
    </Container>
  );
}

export default AppointementBooking;
