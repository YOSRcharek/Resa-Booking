import {useEffect, useState} from "react";
import {HotelDataComponent} from "./HotelDataComponent";
import {FilteringBox} from "./FilteringBox";
import {SearchBox} from "./SearchBox";
import styles from "./SearchBox.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom/cjs/react-router-dom";
import axios from 'axios';
import FirstSection from "../PageSections/FirstSection";
import { SearchDeals } from "../SearchDeals/SearchDeals";
import { Box, Container } from "@mui/material";
import Maps from "../HotelDetails/TopSection/maps";



export const SearchPage = () => {
    const location = useLocation();
  const { destination } = location.state || {};
  console.log(destination);
    const hotelData = useSelector(state => state.hotelsData.hotels);
    const [showData, setShowData] = useState(hotelData);
    const [price, setPrice] = useState(false);
    const prefilledData = useLocation().state;
    const [properties, setProperties] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/properties')
        .then(response => {
          setProperties(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the properties!', error);
        });
    }, []);

    const filterPrice = (e) => {
        if (e.target.name === "price" && e.target.checked) {
            let filteredData = [];
            if (Number(e.target.value) === 1500) {
                filteredData = hotelData.filter((el) => Number(el.discountedPrice) > 1500);
            } else if (Number(e.target.value) === 1000) {
                filteredData = hotelData.filter((el) => Number(el.discountedPrice) >= 1000 && Number(el.discountedPrice) < 1500);
            } else if (Number(e.target.value) === 0) {
                filteredData = hotelData.filter((el) => Number(el.discountedPrice) <= 1000);
            }
            setShowData(filteredData);
            setPrice(!price);
        } else {
            setShowData(hotelData);
        }
    };

    const filterStar = (e) => {
        if (e.target.checked) {
            const filteredData = hotelData.filter((el) => Number(el.rating) === Number(e.target.value));
            setShowData(filteredData);
        } else {
            setShowData(hotelData);
        }
    };

    const filterPolicy = (e) => {
        if (e.target.checked) {
            let filteredData = [];
            if (e.target.value === "cancellation") {
                filteredData = hotelData.filter((el) => el.cancellation === "Free");
            } else if (e.target.value === "breakFast") {
                filteredData = hotelData.filter((el) => el.breakFast === "Included");
            }
            setShowData(filteredData);
        } else {
            setShowData(hotelData);
        }
    };

    const filterSearch = (search) => {
        const filteredData = hotelData.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()));
        setShowData(filteredData);
    };
 
    return ( 
        <div>
    <SearchDeals suggestions={[]}/> 
    <Container >
      <nav className="breadcrumb">
        <a href="/">Home</a> &gt;
        <a href="/search">Hôtels</a> &gt;
        <a href={`/search/`}>Recherche</a> &gt;
        <a href={`/search/`}>{destination}</a> 
        <a href={`/search/`}>Résultats de votre recherche</a> 
       </nav>
      
     
    </Container>
        <div className={styles.searchPageContainer}>
          
            <div className={styles.left}>
            <Box my={2} style={{ height: '200px' }}>
                  <Maps pointx={15} pointy={50} />
                </Box>
                <FilteringBox filterPrice={filterPrice} filterStar={filterStar} filterPolicy={filterPolicy} />
            </div>
            <div style={{ padding: '25px' }}> <h6>{destination} : Nb établissements trouvés</h6>
            <br></br>
            <div className={styles.hotelListContainer}>
                {properties.length > 0 ? (
                    properties.map((e, i) => {
                        const roomSize = e.apartment_spaces && e.apartment_spaces.length > 0 ? e.apartment_spaces[0].area : 'N/A';
                        const photoUrl = e.apartment_spaces && e.apartment_spaces.length > 0 && e.apartment_spaces[0].photos && e.apartment_spaces[0].photos.length > 1 
                            ? e.apartment_spaces[0].photos[1] 
                            : '';

                        return (
                            <HotelDataComponent
                                key={e._id}
                                type={e.type}
                                id={e._id}
                                name={e.name}
                                breakFast={e.amenities.breakFast}
                                city={e.location.city}
                                roomSize={roomSize}
                                url={photoUrl}
                                cancelationPolicy={e.policies.cancelationPolicy}
                                bedSize={e.beds_number}
                                rating={e.overall_rating}
                            />
                        );
                    })
                ) : (
                    <p>No properties available</p>
                )}
            </div>
        </div>
        </div>
        </div>
    );
};

