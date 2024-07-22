import styled from "styled-components"
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Div = styled.div`
width:240px;
overflow:hidden;
margin: 0 ;
cursor: pointer;
img{
    width:100%;
    height:240px;
    display:block;
    margin-bottom:8px;
    object-fit: cover;
}
p{
    margin: 0;
    margin-right:8px;
}
`
const Title = styled.p`
color: rgb(38, 38, 38);
font-size:14px;


`
const Subtitle = styled.p`
color: #6b6b6b;
font-size:14px;
`
const Price = styled.p`
margin-top:8px !important;
font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom:4px !important;
   
`
const Rating = styled.p`

    padding:5px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    background: #003580;
    color: #fff;
    border-radius: 5.09091px 5.09091px 5.09091px 0;
   
`
const E = styled.p`
font-size: 14px;
color: #262626;
    font-weight: 500;
    line-height: 1;`
const Reviews = styled.p`
font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    margin-top: 2px;
    line-height: 1;
    color: #6b6b6b;`
const FlexDiv = styled.div`
display:flex;
align-items:center;


`

export const BoxDiv = (props) => {
const imageStyle = {
    backgroundImage: `url(${props.url})`,
    height: '300px', // Exemple de hauteur
    width: '300px', // Exemple de largeur
    backgroundSize: 'cover', // Pour couvrir toute la div
    backgroundPosition: 'center', // Centrer l'image
  };
  const history = useHistory();

  const handleClick = () => {
    history.push(`/search/${props.id}`); // Passez l'identifiant unique ici
  };
    return ( 
        <Div onClick={handleClick}>
          <div style={imageStyle}></div>
          <Title>{props.name}</Title>
          <Subtitle>{props.city}</Subtitle>
          <Price>Starting from ₹{props.price}</Price>
          <FlexDiv>
            <Rating>{props.rating}</Rating>
            <Reviews>.&nbsp;&nbsp; {props.reviews} reviews</Reviews>
          </FlexDiv>
        </Div>
     )
}
