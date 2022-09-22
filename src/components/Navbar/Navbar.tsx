import React from "react";
import styled from "styled-components";
import image from "../../assets/logos/bg-header-desktop.svg";
import mobileImage from "../../assets/logos/bg-header-mobile.svg";

const StyledHeader = styled.header`
  width: 100vw;
  height: 25vh;
  background: url(${image}) no-repeat;
  background-size: cover;
  background-color: #5ba4a4;

  @media (max-width: 800px) {
    background: url(${mobileImage}) no-repeat;
    background-size: cover;
    background-color: #5ba4a4;
  }
`;

const Navbar = () => {
  return <StyledHeader />;
};

export default Navbar;
