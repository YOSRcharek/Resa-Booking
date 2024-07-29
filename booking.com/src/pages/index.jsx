// src/App.js

import React, { useState } from 'react';
import "./index.css";
import { FaHeart } from 'react-icons/fa';

import {  FaArrowRight } from 'react-icons/fa';
import { PiHeartFill  } from "react-icons/pi";

const hotel = {
	photoUrl: '/villes/mahdia.png',
	breakFast: true,
	name: 'Blumar Resort & Spa',
	city: 'Hammamet',
	distance: '8.7 km du centre',
	airportShuttle: true,
	roomType: 'Chambre Double',
	roomSize: '1 Lit Double',
	type: 'Hotel',
	nights: 9,
	adults: 2,
	price: 3943,
	ratingText: 'Bien',
	overall_rating: 7.0
  };
function Index() {
	const [isFavorited, setIsFavorited] = useState(false);

	const handleFavoriteClick = () => {
	  setIsFavorited(!isFavorited);
	};
  return (  
	<div className="maindiv">
	<div className="image-section">
	  <img src={hotel.photoUrl} alt={hotel.name} className="image" />
	  {hotel.breakFast && <div className="overlay">Tous Brunchs sont compris</div>}
	  <button className={`heart-icon ${isFavorited ? 'favorited' : ''}`} onClick={handleFavoriteClick}>
          <PiHeartFill />
        </button>
	</div>
	  
	   <div className="datadiv">
	  <h3>{hotel.name}  <span className="stars">★★★★</span> </h3>
      <div className="content-section">
         <p className="city">
          <a href="#">{hotel.city}</a> - <a href="#">Indiquer sur la carte</a> - {hotel.distance}
        </p>
        {hotel.airportShuttle && <button className="airport-taxi">Taxi aéroport gratuit</button>}
        <div className="room-info">
          <h5>Chambre Double</h5>
          <p>{hotel.roomSize}</p>
        </div>
        <div className="amenities">
          <p>✔ Tous les repas sont compris</p>
          <p>✔ Annulation gratuite</p>
          <p>✔ Aucun prépaiement requis – Payez sur place</p>
        </div>
       
      
        <button className="availability-button">Voir les disponibilités <FaArrowRight /></button>
        </div>
			  
	   </div>
   
	  <div>
	 
	   <div className="rating">
          
          <span className="scores-text"><span className='hide'>helloBien</span>Bien<span className='hide'>he</span></span>
		
		  <div className="score">7.0</div>
        </div>
		<div className="new-booking">Nouveau sur Resa</div>
		<br></br>
		<h5 >{hotel.type}</h5>
		<span className="amount"> <span></span>9 nuits, 2 adultes 
		  <div className="price">TND 3943</div>
		  <div className="amount">Des frais supplémentaires<br></br> peuvent s'appliquer</div></span>
	  </div>

   </div>
  );
}

export default Index;










