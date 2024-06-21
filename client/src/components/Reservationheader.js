import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RedeemIcon from "@mui/icons-material/Redeem";

const Container = styled.div`
  height: 50px;
  background-color: darkorange;
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  ${mobile({
    fontSize: "17px",
    height: "70px",
    textAlign: "center",
    paddingBottom: "10px",
  })}

  @media screen and (min-width: 850px) {
    height: 65px;
    padding: 20px;
    font-size: 10px;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerLeft = styled.p`
  height: 45px;
  color: white;
  text-align: left;
  font-weight: bold;
  padding-left: 25px;
  font-size: 25px;
  ${mobile({
    fontSize: "20px",
    height: "60px",
    textAlign: "left",
    paddingLeft: "5px",
  })}

  @media screen and (min-width: 850px) {
    font-size: 20px;
    justify-content: center;
    padding-top: 10px;
  }
`;

const ContainerRight = styled.p`
  height: 45px;
  color: white;
  text-align: right !important;
  padding-right: 25px;
  font-weight: bold;
  font-size: 20px;
  ${mobile({
    fontSize: "12px",
    height: "65px",
    textAlign: "right",
    paddingRight: "10px",
  })}

  @media screen and (min-width: 850px) {
    font-size: 20px;
    justify-content: center;
    padding-top: 7px;
    padding-bottom: 7px;
  }
`;

const Reservationheader = () => {
  return (
    <>
      <Container>
        <ContainerLeft>
          Phone :{" "}
          <a href="tel:+13364682300" style={{ color: "white" }}>
            336-468-2300
          </a>{" "}
          |{" "}
          <a
            href="mailto:littleheavenlodge@gmail.com"
            style={{ color: "white" }}
          >
            littleheavenlodge@gmail.com
          </a>
        </ContainerLeft>
        <ContainerRight>
          <RedeemIcon
            style={{
              justifyContent: "center",
              fontSize: "35px",
              padding: "3px",
              marginRight: "7px",
            }}
          />{" "}
          <a
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "10px",
            }}
            href="https://secure.thinkreservations.com/littleheavenbedandbreakfast/gift-certificates"
          >
            {" "}
            Gift Certificates{" "}
          </a>
          |
          <CalendarMonthIcon
            style={{
              justifyContent: "center",
              fontSize: "35px",
              padding: "3px",
              marginRight: "7px",
            }}
          />{" "}
          <a
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "10px",
            }}
            href="https://secure.thinkreservations.com/littleheavenbedandbreakfast/reservations"
          >
            {" "}
            Reservations{" "}
          </a>
        </ContainerRight>
      </Container>
    </>
  );
};

export default Reservationheader;
