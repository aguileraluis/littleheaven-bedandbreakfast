import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Container = styled.div`
    height: 45px;
    background-color: darkorange;
    color: white;
    text-align: left;
    display: flex;
    padding-left: 25px;
    font-size: 25px;
    ${mobile({padding: '5px', fontSize: '17px', height: '60px', textAlign: 'center'})}
`;

const ContainerLeft = styled.p`
    height: 45px;
    color: white;
    text-align: left;
    font-weight: bold;
    display: flex;
    padding-left: 25px;
    font-size: 25px;
    ${mobile({padding: '5px', fontSize: '17px', height: '60px', textAlign: 'left'})}
`;

const ContainerRight = styled.p`
    height: 45px;
    color: white;
    text-align: right !important;
    display: flex;
    font-weight: bold;
    padding-left: 78rem;
    position: sticky;
    font-size: 25px;
    ${mobile({padding: '5px', fontSize: '17px', height: '60px', textAlign: 'right'})}
`;

const Reservationheader = () => {
  return (
    <>
    <Container>
    <ContainerLeft>
        Phone : 336-468-2300 | littleheavenlodge@gmail.com
    </ContainerLeft>
    <ContainerRight>
        <CalendarMonthIcon style={{ justifyContent: 'center', fontSize: '35px', padding: '3px', marginRight: '7px'}}/> | <a style={{textDecoration: 'none', color: 'white', marginLeft: '10px'}} href="/littleheavenbedandbreakfast"> Reservations </a> 
    </ContainerRight>
    </Container>
    </>
   
  )
}

export default Reservationheader;