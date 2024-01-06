import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 70px;
    background-color: lightgoldenrodyellow;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    ${mobile({padding: '5px', fontSize: '17px', height: '60px', textAlign: 'center'})}
`;

const Announcement = () => {
  return (
    <Container>
        Get Started Today! Take an additional $40.00 off per room now until March 1st, 2024! Book Today! 
    </Container>
  )
}

export default Announcement;