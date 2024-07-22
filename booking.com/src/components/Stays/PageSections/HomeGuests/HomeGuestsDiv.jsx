import styled from "styled-components"
import {CarouselDiv} from "./CarosueDiv";
import {BoxDiv} from "./BoxDiv";
import {LocationCarosueDiv} from "./LocationCarosueDiv";
import { useEffect, useState } from "react";
import axios from 'axios';

const Cont = styled.div`
width: 100%;
margin: 0 auto;
margin-bottom: 30px;


font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin:0;
    margin-bottom:32px;
    color:#333333;
    margin-left:10%;
`




export const HomeGuestsDiv = () => {
const [homeData, setHomeData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/biens");
        const data = response.data;
        const lastThreeItems = data.slice(-3); // Récupérer les 3 derniers éléments
        setHomeData(lastThreeItems);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

    return ( <Cont>
        <h3> Explore Places</h3>
        <LocationCarosueDiv/>
        <h2> Nos Hébergements</h2>

        <CarouselDiv>


            {homeData.map((i, index) => <BoxDiv key={index} url={i.url} name={i.name} city={i.city}
                                                price={i.price} rating={i.rating}
                                                 reviews={i.reviews} id={i.id}
            />)}


        </CarouselDiv>


    </Cont>)
}
