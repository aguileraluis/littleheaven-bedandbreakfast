import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Container = styled.div`
    height: 45px;
    background-color: darkorange;
    color: white;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    ${mobile({ fontSize: '17px', height: '65px', textAlign: 'center', paddingBottom: '20px'})}
`;

const ContainerLeft = styled.p`
    height: 45px;
    color: white;
    text-align: left;
    font-weight: bold;
    
    padding-left: 25px;
    font-size: 20px;
    ${mobile({ fontSize: '17px', height: '60px', textAlign: 'left', paddingLeft: '10px'})}
`;

const ContainerRight = styled.p`
    height: 45px;
    color: white;
    text-align: right !important;
    padding-right: 25px;
    font-weight: bold;
    font-size: 20px;
    ${mobile({ fontSize: '17px', height: '60px', textAlign: 'right', paddingRight: '10px'})}
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