import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BathtubIcon from '@mui/icons-material/Bathtub';
import TvIcon from '@mui/icons-material/Tv';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import SecurityIcon from '@mui/icons-material/Security';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LockIcon from '@mui/icons-material/Lock';

const amenitiesIcons = {
  WiFi: WifiIcon,
  Kitchen: KitchenIcon,
  Free_parking: LocalParkingIcon,
  Air_conditioning: AcUnitIcon,
  Heating: BathtubIcon,
  TV: TvIcon,
  Washer: LocalParkingIcon,
  Dryer: LocalParkingIcon,
  Laptop_friendly_workspace: LaptopChromebookIcon,
  Crib: WifiIcon,
  Hair_dryer: WifiIcon,
  Iron: WifiIcon,
  Essentials: LocalParkingIcon,
  Smoke_alarm: SmokeFreeIcon,
  Carbon_monoxide_alarm: SecurityIcon,
  Fire_extinguisher: WifiIcon,
  First_aid_kit: LocalHospitalIcon,
  Lock_on_bedroom_door: LockIcon,
  Hangers: WifiIcon,
  Shampoo: WifiIcon,
  Garden_or_backyard: LocalFloristIcon,
  Patio_or_balcony: WifiIcon,
  BBQ_grill: WifiIcon,
};

export const Amenities = () => {
  const [amenities, setAmenities] = useState({});
  const location = useLocation();
  const id = location.pathname.split('/')[3]; // Extract id from URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/properties/api/${id}`);
        const data = response.data;
        setAmenities(data.amenities); // Assume amenities are within `data.amenities`
      } catch (error) {
        console.error('Error fetching amenities data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Typography variant="h5" component="h3" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        Most Popular Facilities
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(amenities).map(([key, value]) => {
          if (value) {
            const Icon = amenitiesIcons[key];
            if (Icon) {
              return (
                <Grid item xs={6} sm={4} md={3} key={key}>
                  <Box display="flex" alignItems="center">
                    <Icon style={{ marginRight: '0.5rem' }} />
                    <Typography variant="body1">{key.replace(/_/g, ' ')}</Typography>
                  </Box>
                </Grid>
              );
            } else {
              console.warn(`No icon found for key: ${key}`);
            }
          }
          return null;
        })}
      </Grid>
    </>
  );
};
