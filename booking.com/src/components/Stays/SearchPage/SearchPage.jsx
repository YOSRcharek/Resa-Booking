import {useEffect, useState} from "react";
import {HotelDataComponent} from "./HotelDataComponent";
import {FilteringBox} from "./FilteringBox";
import {SearchBox} from "./SearchBox";
import styles from "./SearchBox.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom/cjs/react-router-dom";
import axios from 'axios';

export const SearchPage = () => {
    const hotelData = useSelector(state => state.hotelsData.hotels);
    const [showData, setShowData] = useState(hotelData)
    const [price, setPrice] = useState(false)
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
            if (Number(e.target.value) === 1500) {
                const filteredAbove1500 = hotelData.filter((el) => {
                    return (Number(el.discountedPrice) > 1500)
                })
                setShowData([...filteredAbove1500])
            } else if (Number(e.target.value) === 1000) {
                const filteredAbove1500 = hotelData.filter((el) => {
                    return ((Number(el.discountedPrice) >= 1000) && (Number(el.discountedPrice) < 1500));
                })
                setShowData([...filteredAbove1500])
            } else if (Number(e.target.value) === 0) {
                const filteredAbove1500 = hotelData.filter((el) => {
                    return (Number(el.discountedPrice) <= 1000)
                })
                setShowData([...filteredAbove1500])
            }
            setPrice(!price)
        } else {
            setShowData(hotelData)
        }
    }

    const filterStar = (e) => {
        if (e.target.checked) {
            const filteredData = showData.filter((el) => {
                return (Number(el.rating) === Number(e.target.value))
            });
            setShowData([...filteredData])
        } else {
            setShowData(hotelData)
        }
    }

    const filterPolicy = (e) => {
        if (e.target.checked) {
            if (e.target.value === "cancellation") {
                const filteredAbove1500 = showData.filter((el) => {
                    return (el.cancellation === "Free")
                })
                setShowData([...filteredAbove1500])
            }
            if (e.target.value === "breakFast") {
                const filteredAbove1500 = showData.filter((el) => {
                    return (el.breakFast === "Included")
                })
                setShowData([...filteredAbove1500])
            }
        } else {
            setShowData(hotelData)
        }
    }

    const filterSearch = (search) => {
        const filteredData = hotelData.filter((e) => {
            return (e.name.toLowerCase().includes(search.toLowerCase()))
        })
        setShowData(filteredData)
    }

   

    return <>
    
        <div className={styles.searchPageContainer}>
            <div className={styles.left}>
                <SearchBox filterSearch={filterSearch} data={prefilledData}/>
                <FilteringBox filterPrice={filterPrice} filterStar={filterStar} filterPolicy={filterPolicy}/>
            </div>

            <div className={styles.hotelListContainer}>
           
                {properties.map((e, i) => {
                     const roomSize = e.apartment_spaces.length > 0 ? e.apartment_spaces[0].area : 'N/A'; // Default value if no rooms
   
                    return <HotelDataComponent 
                                          type={e.type} 
                                               key={e._id}
                                               id={e._id}
                                               name={e.name} 
                                               breakFast={e.amenities.breakFast}
                                               city={e.location.city}
                                               roomSize={roomSize}
                                               url={e.apartment_spaces.length > 0 ? e.apartment_spaces[0].photos[1] : ''} // Adjust accordingly
                                               cancelationPolicy={e.policies.cancelationPolicy}
                                               bedSize={e.beds_number}
                                               rating={e.overall_rating}
                                             
                    />
                })}
            </div>
        </div>


    </>
}
