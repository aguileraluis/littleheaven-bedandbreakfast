import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RedeemIcon from "@mui/icons-material/Redeem";

const Container = styled.div`
  height: 60px;
  background-color: darkorange;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 20px;
  ${mobile({
    position: "block",
    fontSize: "15px",
    height: "90px",
    textAlign: "center",
    paddingBottom: "-15px",
    justifyContent: "center",
  })}

  @media screen and (min-width: 850px) {
    height: 50px;
    padding: 25px;
    font-size: 15px;
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
    fontSize: "15px",
    height: "60px",
    textAlign: "left",
    paddingLeft: "5px",
    paddingTop: "15px",
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
  justify-content: center !important;
  font-size: 20px;
  padding-top: 10px;
  ${mobile({
    fontSize: "12px",
    height: "60px",
    textAlign: "right",
    paddingRight: "10px",
    paddingtop: "15px",
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
