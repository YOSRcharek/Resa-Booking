import styled from 'styled-components';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import HomeIcon from '@material-ui/icons/Home';
import SafetyIcon from '@material-ui/icons/Security';
import FirstSection from '../PageSections/FirstSection';
import { getSuggestions } from '../../../actions/suggestionAction';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageSlider from './TopSection/ImageSlider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Rating , Grid,Select, MenuItem, InputLabel, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardMedia, Box, Button, Typography, Modal, Divider, Paper, Avatar, IconButton , List, ListItem, ListItemIcon, ListItemText, CssBaseline, } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import des styles CSS de la carousel
import { Carousel } from 'react-responsive-carousel';
import Maps from './TopSection/maps'
import WifiIcon from '@material-ui/icons/Wifi';
import KitchenIcon from '@material-ui/icons/Kitchen';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import TvIcon from '@material-ui/icons/Tv';
import LockIcon from '@material-ui/icons/Lock';
import SecurityIcon from '@material-ui/icons/Security';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Kitchen from '@material-ui/icons/Kitchen';
import BathtubIcon from '@material-ui/icons/Bathtub';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AccessibleIcon from '@material-ui/icons/Accessible';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import PartyModeIcon from '@mui/icons-material/PartyMode';
import PetsIcon from '@mui/icons-material/Pets';
import './TopSection/header.css';
import React from 'react';
import { SearchDeals } from '../SearchDeals/SearchDeals';
const Cont = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;

`
const P = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  vertical-align: middle;

  padding: 0 4px;
  border-radius: 3px;
  background: #aeaeae;
  color: #fff;
  display: inline;`

const Name = styled.h1`
  color: #262626;
  display: inline;
  font-size: 25px;
  font-weight: 700;
  line-height: 28px;
  margin: 0;
  margin-left: 5px;

`
const NameDiv = styled.div`
  display: flex;
  align-items: center;

  P {
    margin: 0;
  }
`
const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`
const Thumb = styled.div`
  width: 21px;
  height: 21px;
  background-color: #FEBB02;
  margin-left: 5px;
`

const RightDiv = styled.div`
  align-items: center;
  display: grid;
  justify-content: flex-end;
  margin-top: 10px;

  > div {
    display: flex;
    justify-content: flex-end;

    align-items: center;


    img {
      display: block;
      width: 16px;
      height: 16px;
    }

  }

`

const Reserve = styled.div`
  box-sizing: border-box;
  vertical-align: middle;


  min-height: 36px;
  min-width: 36px;

  border-radius: 2px;

  justify-content: center;
  text-align: left;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #0071c2;
  border: 1px solid #0071c2;
  border-radius: 2px;
  margin-left: 20px;

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #ffff;
  }

`

const Tag = styled.div`
  display: flex;
  justify-content: flex-end;

  align-items: center;

  p {
    font-style: italic;
    color: #333 !important;
    text-decoration: none;
    font-weight: bold;
    text-align: right;
    margin-left: 5px;
    font-size: 12px;
  }


`

const Map = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2%;
`
const MapInfo = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #262626;
`

const ShowMap = styled.p`
  cursor: pointer;
  color: #0071c2;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  margin-left: 10px;
  margin-top: 15px;
`
const ImageDiv = styled.div`

  display: grid;
  width: 100%;
  grid-template-areas: "short1 long"
                    "short2 long";

  grid-template-columns:33% 66%;
  grid-template-rows:170px 170px;
  grid-gap: 10px;


`
const ShortImage = styled.div`

  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`

const LargeImage = styled.div`
  grid-area: "long";

  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`

const Container = styled.div`
  width: 100%;`

const FlexDiv = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`

const ImageBox = styled.div`
  background-size: auto;
  background-position: center;
  width: 18.5%;
  height: 110px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;



`

const hotelDetails = {
  location: 'Exceptional location - Inside city center',
  walking: 'Exceptional for walking',
  landmarks: [
    { name: 'Royal Pump Room Museum', distance: '0.1 km' },
    { name: 'Harrogate Turkish Baths', distance: '0.1 km' },
  ],
};
const Div = styled.div`
  margin: 0;
`;

export const HotelDetails = () => {
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
  const rules = [
    {
      icon: <EventAvailableIcon />,
      title: "Arrivée",
      description: "De 15h00 à 22h00\nVous devrez indiquer à l'avance votre heure d'arrivée à l'établissement."
    },
    {
      icon: <EventBusyIcon />,
      title: "Départ",
      description: "De 8h00 à 11h00"
    },
    {
      icon: <CheckCircleOutlineIcon />,
      title: "Annulation / Prépaiement",
      description: "Les conditions d'annulation et de prépaiement varient en fonction du type d'appartement. Veuillez saisir les dates de votre séjour et consulter les conditions de la chambre choisie."
    },
    {
      icon: <ChildFriendlyIcon />,
      title: "Enfants et lits",
      description: (
        <>
          <Typography>Conditions relatives aux enfants</Typography>
          <Typography variant="body2">Tous les enfants sont les bienvenus.</Typography>
          <Typography variant="body2">Pour voir les tarifs et les informations associés à la taille de votre groupe, veuillez ajouter à votre recherche le nombre d'enfants avec qui vous voyagez ainsi que leur âge.</Typography>
          <Box mt={2} p={2} bgcolor="#f7f7f7">
            <Typography variant="body2"><strong>Conditions relatives aux lits bébé et aux lits d'appoint</strong></Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography>0 - 2 ans</Typography>
              <Typography>Lit bébé sur demande</Typography>
              <Typography>Gratuit</Typography>
            </Box>
            <Typography variant="body2">Les suppléments ne sont pas automatiquement calculés dans le montant total de la réservation sur le site et doivent être réglés séparément directement auprès de l'établissement.</Typography>
            <Typography variant="body2">1 lit bébé disponible sur demande</Typography>
            <Typography variant="body2">Tous les lits bébé et lits d'appoint sont soumis à disponibilité.</Typography>
          </Box>
        </>
      )
    },
    {
      icon: <CheckCircleOutlineIcon />,
      title: "Aucune restriction d'âge",
      description: "Aucune restriction relative à l'âge ne s'applique pour l'enregistrement."
    },
    {
      icon: <SmokingRoomsIcon />,
      title: "Fumeurs/Non-fumeurs",
      description: "Cet hébergement est non-fumeurs."
    },
    {
      icon: <PartyModeIcon />,
      title: "Fêtes",
      description: "Les fêtes/événements ne sont pas autorisés."
    },
    {
      icon: <PetsIcon />,
      title: "Animaux domestiques",
      description: "Les animaux de compagnie ne sont pas admis au sein de l'établissement."
    }
  ];
  const guestReviews = [
    {
      id: 1,
      name: "Tonko",
      date: "March 2022",
      rating: 9.2,
      review: "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores.",
      images: ["image1.jpg", "image2.jpg", "image3.jpg"],
      helpful: 0,
      notHelpful: 0,
    },
    // More reviews here...
  ];
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const openFullscreen = () => {
    setIsFullscreen(true);
  };
  
  const closeFullscreen = () => {
    setIsFullscreen(false);
  };
  
  const { id } = useParams(); // Get id from URL params
  const hotelData = useSelector(state => state.hotelsData.hotels);
  const [homeData, setHomeData] = useState(null);
  const [arrivalDate, setArrivalDate] = React.useState(null);
  const [departureDate, setDepartureDate] = React.useState(null);
  const [adults, setAdults] = React.useState(2);
  const [children, setChildren] = React.useState(0);
  const [rooms, setRooms] = React.useState(1);
  const dispatch = useDispatch();
  const suggestions = useSelector(state => state.suggestionsData.suggestions);
  
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/properties/getImages/${id}`);
        setImages(res.data);
        console.log(res.data);
        console.log(id);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/properties");
        const data = response.data;
        setHomeData(data); 
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  // Fetch hotel details based on id
  const filteredData = homeData ? homeData.find(item => item._id === id) : null;

  useEffect(() => {
    if (suggestions.length === 0) {
      dispatch(getSuggestions());
    }
  }, [suggestions]);

  if (!hotelData) {
    return <div>Loading...</div>; 
  }
  return (
    <>
      <FirstSection suggestions={suggestions}/>
      <Container maxWidth="lg" style={{ marginTop: '2rem', padding: '0 40px' }}>
    <div className="App">
      <nav className="breadcrumb">
        <a href="#">Accueil</a> &gt;
        <a href="#">Hôtels</a> &gt;
        <a href="#">Appartements: toutes les options</a> &gt;
        <a href="#">France</a> &gt;
        <a href="#">Île-de-France</a> &gt;
        <a href="#">Offres à l'établissement 2 chambres et une terrasse à Paris! (Appartement), (France)</a>
      </nav>
      
      <div className="property-details">
        <div className="property-header">
          <h1>2 chambres et une terrasse à Paris!</h1>
          <p className="address">
            <span role="img" aria-label="location">📍</span> – <a href="#">Excellent emplacement - voir la carte</a> – 
          </p>
        </div>

        <div className="property-nav">
          <a href="#" className="active">Vue d'ensemble</a>
          <a href="#">Infos sur les appartements et tarifs</a>
          <a href="#">Équipements</a>
          <a href="#">Règles de la maison</a>
          <a href="#">À savoir</a>
          <a href="#">Commentaires clients (5)</a>
        </div>

        <div className="property-actions">
          <button className="reserve-btn">Réservez votre séjour en appartement</button>
          <button className="price-adjust-btn">Nous ajustons nos tarifs</button>
        </div>
      </div>
    </div>
    </Container>
      
      <Container maxWidth="lg" style={{ marginTop: '2rem', padding: '0 35px' ,marginBottom:'2rem'}}>
      {filteredData && (
        <>
          {/* Hotel Images */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardMedia
                      component="img"
                      width="500"
                      height="500"
                      image={images[0]} // Main hotel image
                      alt="Hotel main view"
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    {images.slice(1, 3).map((photo, index) => (
                      <Grid item xs={6} key={index}>
                        <Card>
                          <CardMedia
                            component="img"
                            width="250"
                            height="150"
                            image={photo}
                            alt={`Hotel view ${index + 1}`}
                          />
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: '16px' }}>
                    <Card>
                      <CardMedia
                        component="img"
                        width="500"
                        height="350"
                        image={images[4]}
                        alt="Hotel view 3"
                      />
                    </Card>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Button variant="contained" fullWidth onClick={openFullscreen} style=    {{ padding: '10px 0', backgroundColor: 'transparent', color: '#0073e6',border:"1px solid #0073e6",borderRadius:"5px" }} >
                    See All 90 Photos
                  </Button>
                </Grid>
                     {/* Hotel Details */}
                     <Grid item xs={12}>
  <Box>
    <Typography variant="h4" component="h2" gutterBottom>
      {filteredData.name}
      <Box display="inline" ml={2}>
        {[...Array(filteredData.overall_rating)].map((_, i) => (
          <StarIcon key={i} style={{ color: '#FFD700' }} />
        ))}
      </Box>
    </Typography>
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Box> </Box>
      <Box> 
      <Typography variant="h6" >
          From {filteredData.price}D
        </Typography>
      <button className="reserve-btn" color="primary">
        Select Room
      </button>
    </Box>
    </Box>
    <Typography variant="subtitle1" gutterBottom>
      {filteredData.description}
    </Typography>
    <Divider style={{ margin: '1rem 0' }} />
  </Box>
</Grid>
  {/* Overview */}
  <Grid item xs={12}>
         <Typography variant="h5" component="h3" >
            Overview
          </Typography>

          <Typography variant="body1" style={{ marginBottom: '2rem' }}>
            {filteredData.description}
            helooo 
          </Typography>
          <Divider style={{ margin: '1rem 0' }} />

          {/* Most Popular Facilities */}
          <Typography variant="h5" component="h3" style={{ marginTop: '2rem',marginBottom: '2rem' }}>
            Most Popular Facilities
          </Typography>
       
            <Grid item xs={12}>
 
    <Grid container spacing={2}>
      {Object.entries(filteredData.amenities).map(([key, value]) => {
        if (value) {
          const Icon = amenitiesIcons[key];
          return (
            <Grid item xs={6} sm={4} md={3} key={key}>
              <Box display="flex" alignItems="center">
                <Icon style={{ marginRight: '0.5rem' }} />
                <Typography variant="body1">{key.replace(/_/g, ' ')}</Typography>
              </Box>
            </Grid>
          );
        }
        return null;
      })}
    </Grid>
 
</Grid>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} style={{ padding: '1rem' }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <LocationOnIcon color="primary" />
                  <Typography variant="body1" style={{ marginLeft: '0.5rem' }}>
                    {filteredData.location.city}, {filteredData.location.state}, {filteredData.location.country}
                  </Typography>
                </Box>
                <Divider />
                <Box display="flex" flexDirection="column" my={2}>
                  <Typography variant="body1">
                    Address: {filteredData.location.address}
                  </Typography>
                  <Typography variant="body1">
                    City: {filteredData.location.city}
                  </Typography>
                  <Typography variant="body1">
                    State: {filteredData.location.state}
                  </Typography>
                  <Typography variant="body1">
                    Country: {filteredData.location.country}
                  </Typography>
                </Box>
                <Divider />

                <Box my={2} style={{ height: '200px' }}>
                  <Maps pointx={filteredData.location.coordinates.latitude} pointy={filteredData.location.coordinates.longitude} />
                </Box>
              </Paper>
              <Paper elevation={3} style={{ padding: '1rem', marginTop: '1rem' }}>
                <Typography variant="h6" gutterBottom>
                 Exceptionnel
                </Typography>
                {hotelDetails.landmarks.map((landmark, index) => (
                  <Box key={index} display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body2">{landmark.name}</Typography>
                    <Typography variant="body2">{landmark.distance}</Typography>
                  </Box>
                ))}
                <Divider style={{ margin: '1rem 0' }} />
                <Typography variant="h6" gutterBottom>
                  Property highlights
                </Typography>
                <Box display="flex" flexDirection="column">
                  <Typography variant="body2">In London City Centre</Typography>
                  <Typography variant="body2">Airport transfer</Typography>
                  <Typography variant="body2">Front desk [24-hour]</Typography>
                  <Typography variant="body2">Premium TV channels</Typography>
                </Box>
              </Paper>
              <Paper elevation={3} style={{ padding: '1rem', marginTop: '1rem' }}>
               
                <Typography variant="h6" gutterBottom>
                  Property highlights
                </Typography>
                <Box display="flex" flexDirection="column">
                  <Typography variant="body2">In London City Centre</Typography>
                  <Typography variant="body2">Airport transfer</Typography>
                  <Typography variant="body2">Front desk [24-hour]</Typography>
                  <Typography variant="body2">Premium TV channels</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Modal
            open={isFullscreen}
            onClose={closeFullscreen}
            aria-labelledby="fullscreen-modal-title"
            aria-describedby="fullscreen-modal-description"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ backgroundColor: 'white', padding: '2rem', maxWidth: '90%', maxHeight: '90%', overflow: 'auto' }}>
              <Carousel showArrows={true} infiniteLoop={true}>
                {images.map((imageUrl, index) => (
                  <div key={index}>
                    <img src={imageUrl} alt={`Hotel view ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </Modal>

        </>
      )}
    </Container>
    <Container maxWidth="lg" style={{ marginTop: '2rem', padding: '0 40px' }}>
      <CssBaseline></CssBaseline>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{  backgroundColor: '#f9f9f9', borderRadius: 2 }}>
        <TableContainer component={Paper} sx={{  margin: '0 auto', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Disponibilité
      </Typography>
      <Typography variant="body2" color="error">
        Veuillez sélectionner des dates pour voir les disponibilités et les tarifs de cet établissement.
      </Typography>
      <Div style={{marginBottom: '5rem'}}></Div>
        <SearchDeals suggestions={suggestions}/> 
        <Div style={{marginBottom: '5rem'}}></Div>
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
                <Typography variant="body1">
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
    <Container maxWidth="lg" style={{ marginTop: '2rem', padding: '0 40px' }}>
      <Divider style={{ margin: '1rem 0' }} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} style={{ padding: '1.5rem', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h6" gutterBottom>
              Guest reviews
            </Typography>
            <Typography variant="h4" style={{ color: '#3f51b5' }}>
              4.8
            </Typography>
            <Typography variant="body1" gutterBottom>
              Exceptional <br /> 3,014 reviews
            </Typography>
            <Divider style={{ margin: '1rem 0' }} />
            {[
              { label: 'Location', value: 9.4 },
              { label: 'Staff', value: 9.4 },
              { label: 'Cleanliness', value: 9.4 },
              { label: 'Value for money', value: 9.4 },
              { label: 'Comfort', value: 9.4 },
              { label: 'Facilities', value: 9.4 },
              { label: 'Free WiFi', value: 9.4 },
            ].map((item, index) => (
              <Box key={index} mb={2}>
                <Typography variant="body2">{item.label}</Typography>
                <Box display="flex" alignItems="center">
                  <Box width="100%" mr={1}>
                    <Box bgcolor="#f0f0f0" height="10px" borderRadius="5px" position="relative">
                      <Box bgcolor="#3f51b5" height="10px" borderRadius="5px" width={`${item.value * 10}%`} />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="textSecondary">{item.value}</Typography>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          {guestReviews.map(review => (
            <Paper key={review.id} elevation={3} style={{ padding: '1.5rem', marginBottom: '1rem', backgroundColor: '#f9f9f9' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar>{review.name.charAt(0)}</Avatar>
                <Box ml={2}>
                  <Typography variant="body2">{review.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{review.date}</Typography>
                </Box>
              </Box>
              <Typography variant="h6" color="primary" style={{ marginBottom: '0.5rem' }}>
                {review.rating} Superb
              </Typography>
              <Typography variant="body1" gutterBottom>
                {review.review}
              </Typography>
              <Box display="flex" mt={2} mb={2}>
                {review.images.map((img, index) => (
                  <Box key={index} mr={1}>
                    <img src={img} alt={`Review ${review.id} - Image ${index}`} style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
                  </Box>
                ))}
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
                <Typography variant="body2" style={{ marginRight: '16px' }}>Helpful</Typography>
                <IconButton>
                  <ThumbDownIcon />
                </IconButton>
                <Typography variant="body2">Not helpful</Typography>
              </Box>
            </Paper>
          ))}
          <Button variant="outlined" color="primary" fullWidth style={{ marginTop: '1rem' }}>
            Show all 116 reviews
          </Button>
        </Grid>
      </Grid>
    </Container>
     <Container maxWidth="lg" style={{ marginTop: '2rem', padding: '0 40px' }}>
     <Divider style={{ margin: '1rem 0' }} />
     <Box sx={{ maxWidth: 1000, margin: '2px auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Règles de la maison
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        L'établissement 2 chambres et une terrasse à Paris! accepte les demandes spéciales. Ajoutez la vôtre à la prochaine étape !
      </Typography>
      <List>
        {rules.map((rule, index) => (
          <Box key={index}>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                {rule.icon}
              </ListItemIcon>
              <ListItemText
                primary={rule.title}
                secondary={typeof rule.description === 'string' ? rule.description.split('\n').map((line, i) => (
                  <Typography key={i} variant="body2" color="textSecondary">
                    {line}
                  </Typography>
                )) : rule.description}
              />
            </ListItem>
            {index < rules.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
     </Container>
     <Container maxWidth="lg" style={{ marginTop: '2rem', padding: '0 85px' }}>
      <Divider style={{ margin: '1rem 0' }} />
      <Box sx={{ maxWidth: '100%', margin: '20px auto', padding: 2, fontFamily: 'Arial, sans-serif' }}>
      <Typography variant="h4" gutterBottom>
        Leave a Reply
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Your email address will not be published.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {['Location', 'Staff', 'Cleanliness', 'Value for money', 'Comfort', 'Facilities', 'Free WiFi'].map((item) => (
              <Box key={item} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>{item}</Typography>
                <Rating name={item.toLowerCase().replace(' ', '_')} defaultValue={5} precision={0.5} readOnly />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Text" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Write Your Comment" variant="outlined" fullWidth multiline rows={4} />
            <button className="reserve-btn"  fullWidth>
              Post Comment
            </button>
          </Box>
        </Grid>
      </Grid>
    </Box>

    </Container>
  
    </>
  );
};
