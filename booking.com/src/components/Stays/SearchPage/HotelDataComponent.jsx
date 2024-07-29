
import "./HotelDataComponent.module.css";
import {Link} from "react-router-dom";

import React, { useState } from 'react';
import {  FaArrowRight } from 'react-icons/fa';
import { PiHeartFill  } from "react-icons/pi";
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
    const availabilityText = "Check Availability";
    const [isFavorited, setIsFavorited] = useState(false);

	const handleFavoriteClick = () => {
	  setIsFavorited(!isFavorited);
	};
    return (
        <div className="maindiv">
        <div className="image-section">
          <img src={url}  className="image" />
          <div className="overlay">Tous Brunchs sont compris</div>
          <button className={`heart-icon ${isFavorited ? 'favorited' : ''}`} onClick={handleFavoriteClick}>
              <PiHeartFill />
            </button>
        </div>
          
           <div className="datadiv">
          <h3>{name}  <span className="stars">★★★★</span> </h3>
          <div className="content-section">
             <p className="city">
              <a href="#">{city}</a> - <a href="#">Indiquer sur la carte</a> - 8.7 km du centre
            </p>
             <button className="airport-taxi">Taxi aéroport gratuit</button>
            <div className="room-info">
              <h5>Chambre Double</h5>
              <p>{roomSize}</p>
            </div>
            <div className="amenities">
              <p>✔ Tous les repas sont compris</p>
              <p>✔ Annulation gratuite</p>
              <p>✔ Aucun prépaiement requis – Payez sur place</p>
            </div>
           
           
            </div>
                  
           </div>
       
          <div className="left"> 
         
           <div className="rating">
              
              <span className="scores-text"><span className='hide'>helloBienhooholi</span>Bien<span className='hide'>h</span></span>
            
            
              <div className="score">7.0</div>
            </div>
            <div className="new-booking">Nouveau sur Resa</div>
            
            <h5 >{type}</h5>
            <span className="amount"> <span></span>9 nuits, 2 adultes 
              <div className="price">TND 3943</div>
              <div className="amount">Des frais supplémentaires<br></br> peuvent s'appliquer</div></span>
              <Link to={`/search/${id}`} params={{}}>
            <button className="availability-button">Voir disponibilité <FaArrowRight /></button>
               
                    </Link>
          </div>
    
       </div>);
};

export {HotelDataComponent};
