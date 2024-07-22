import React, { useCallback, useState } from 'react';
import { Datepicker, Page, getJson } from '@mobiscroll/react';
import './appointment-booking.css';
import { Container } from '@mui/material';

function AppointementBooking({ onChange, value }) {
  const min = 'dyndatetime(y,m,d)';
  const max = 'dyndatetime(y,m+6,d)';
  const [singleLabels, setSingleLabels] = useState([]);
  const [singleInvalid, setSingleInvalid] = useState([]);

  const handlePageLoadingSingle = useCallback((args) => {
    const d = args.firstDay;
    const invalid = [];
    const labels = [];

    getJson(
      'https://trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
      (bookings) => {
        for (let i = 0; i < bookings.length; ++i) {
          const booking = bookings[i];
          const d = new Date(booking.d);

          if (booking.price > 0) {
            labels.push({
              start: d,
              title: '$' + booking.price,
              textColor: '#e1528f',
            });
          } else {
            invalid.push(d);
          }
        }
        setSingleLabels(labels);
        setSingleInvalid(invalid);
      },
      'jsonp',
    );
  }, []);

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
