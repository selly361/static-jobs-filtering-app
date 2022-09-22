import React from "react";
import styled from "styled-components";

interface PropTypes {
  company: string;
  logo: string;
  jobsNew: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  location: string;
}

const Container = styled.div``;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;


const JobDetails = ({
  company,
  logo,
  jobsNew,
  featured,
  position,
  postedAt,
  location,
}: PropTypes) => {

  return (
    <Container>
      <Logo src={logo}  alt={`An image logo of ${company}`} />
      <div>
        <section></section>
        <section></section>
        <section></section>
      </div>
    </Container>
  );
};


export default JobDetails;
