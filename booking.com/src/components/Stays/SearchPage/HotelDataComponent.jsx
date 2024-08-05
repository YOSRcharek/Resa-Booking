
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import React, { useState } from 'react';
import {  FaArrowRight } from 'react-icons/fa';
import { PiHeartFill  } from "react-icons/pi";
import styles from "./HotelDataComponent.module.css"
const HotelDataComponent = (props) => {
    const {
        type,
        url,
        id,
        view,
        price,
        name,
        city,
        distance,
        bedSize,
        roomSize,
        cancelationPolicy,
        cancellation,
        reviews,
        rating,
        breakFast,
        availableRooms,
        discountedPrice
    } = props
    const [isFavorited, setIsFavorited] = useState(false);

	const handleFavoriteClick = () => {
	  setIsFavorited(!isFavorited);
	};
  const history = useHistory();

  const destination = localStorage.getItem('destination');
  const handleNavigation = () => {
    history.push(`/search/${destination}/${id}`);
  };
    return (
        <div className={styles.maindiv}  onClick={() => handleNavigation()}>
        <div className={styles.ImageSection}>
          <img src={url}  className={styles.image} />
          <div className={styles.overlay}>Tous Brunchs sont compris</div>
          <button
  className={`${styles.heartIcon} ${isFavorited ? styles.favorited : ''}`}
  onClick={handleFavoriteClick}
>    <PiHeartFill />
            </button>
        </div>
          
           <div className={styles.datadiv}>
          <h3>{name}  <span className={styles.stars}>★★★★</span> </h3>
          <div className={styles.contentSection}>
             <p className={styles.city}>
              <a href="#">{city}</a> - <a href="#">Indiquer sur la carte</a> - 8.7 km du centre
            </p>
             <button className={styles.airportTaxi}>Taxi aéroport gratuit</button>
            <div className={styles.roomInfo}>
              <h5>Chambre Double</h5>
              <p>{roomSize}</p>
            </div>
            <div className={styles.amenities}>
            <div className={styles.verticalLine}></div>
              <p>✔ Tous les repas sont compris</p>
              <p>✔ Annulation gratuite</p>
              <p>✔ Aucun prépaiement requis – Payez sur place</p>
            </div>
           
           
            </div>
                  
           </div>
       
          <div className={styles.left}> 
         
           <div className={styles.rating}>
              
              <span className={styles.scoresText}><span className={styles.hide}>helloBienhooholi</span>Bien<span className={styles.hide}>h</span></span>
            
            
              <div className={styles.score}>7.0</div>
            </div>
            <div className={styles.newBooking}>Nouveau sur Resa</div>
            
            <h5 >{type}</h5>
            <span className={styles.amount}> <span></span>9 nuits, 2 adultes 
              <div className={styles.price}>TND 3943</div>
              <div className={styles.amount}>Des frais supplémentaires<br></br> peuvent s'appliquer</div></span>
            
  <button className={styles.availabilityButton} onClick={() => handleNavigation()}>
    Voir disponibilité <FaArrowRight />
  </button>
          </div>
    
       </div>);
};

export {HotelDataComponent};
