
import {getExporePlaces} from "../../../../actions/exporePlacesAction";
import styled from "styled-components";
import { CarouselDiv } from "./CarosueDiv";
import { useHistory } from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlacesExploreData from "./placesExploreData";
import axios from 'axios';

const Box = styled.div`
  width: 240px;
  overflow: hidden;
  margin: 0;

  h1, p {
    margin: 0;
    color: #fff;
  }
`;

const ImgDiv = styled.div`
  height: 180px;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const ImgText = styled.div`
  position: absolute;
  padding: 11px;
  bottom: 0;
  left: 0;
  width: 90%;
  margin-bottom: 0;
  background: linear-gradient(0deg, #000 0, rgba(0, 0, 0, .8) 50%, transparent);

  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const A = styled.div`
  a {
    text-overflow: ellipsis;
    text-decoration: none;
    margin-right: 10px;
    font-size: 14px;
    color: black;
  }
`;
export const LocationCarosueDiv = () => {
  const history = useHistory();
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/explorePlaces");
        setLocations(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once

  const handleNavigation = (destination,articles) => {
    history.push(`/searchPlace/${destination}`, { articles,destination });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CarouselDiv>
      {locations.map((location, index) => (
        <Box key={index} onClick={() => handleNavigation(location.name,location.article)}>
          <ImgDiv style={{ backgroundImage: `url(${location.image})` }}>
            <ImgText>
              <h1>{location.name}</h1>
              <p>{location.country}</p>

            </ImgText>
          </ImgDiv>
          <A>
            {location.properties.map((property, idx) => (
              <a key={idx} href="/">{property}</a>
            ))}
          </A>
        </Box>
      ))}
    </CarouselDiv>
  );
};
