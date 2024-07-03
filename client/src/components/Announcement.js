import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 40px;
  background-color: orange;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  ${mobile({
    padding: "5px",
    fontSize: "15px",
    height: "50px",
    textAlign: "center",
  })}
`;

const Announcement = () => {
  return (
    <Container>
      Use code JULY and stay 2 nights in July to get $50 off second night.
    </Container>
  );
};

export default Announcement;
