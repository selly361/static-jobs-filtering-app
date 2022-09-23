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
  contract: string;
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;


  @media  (max-width: 760px){
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;

  @media (max-width: 760px){
    height: 50px;
    width: 50px;
    position: absolute;
    top: -25px;
  }
`;

const CompanyName = styled.h4`
  color: #5ba4a4;
`;

const NewTag = styled.h5`
    display: inline;
    text-transform: uppercase;
    padding: 5px 6px 2px;
    border-radius: 15px;
    color: #fff;
    background-color: #5ba4a4;font-family: 'League Spartan', sans-serif;
`;

const FeaturedTag = styled.h5`
background-color: #2c3a3a;
display: inline;
    text-transform: uppercase;
    padding: 5px 6px 2px;
    border-radius: 15px;
    color: #fff;
`;

const CompanyInfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  div:first-child {
    display: flex;
    gap: .9rem;
    align-items: center;
  }

  div:last-child {
    display: flex;
    gap: .3rem;
    align-items: center;
  }

  @media (max-width: 760px){
    gap: 1rem;
    width: 100%;
    border-bottom: 1px solid #7b8e8e;
    padding-bottom: 2rem;
  }

`

const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background-color: #7b8e8e;
`

const Position = styled.h3`
  font-weight: 500;

`


const JobDetails = ({
  company,
  logo,
  jobsNew,
  featured,
  position,
  postedAt,
  location,
  contract
}: PropTypes) => {
  return (
    <Container>
      <Logo src={logo} alt={`An image logo of ${company}`} />
      <CompanyInfoWrapper>
        <div>
          <CompanyName>{company}</CompanyName>
          {jobsNew && <NewTag>New!</NewTag>}
          {featured && <FeaturedTag>Featured!</FeaturedTag>}
        </div>
        <div>
          <Position>{position}</Position>
        </div>
        <div>
          <p>{postedAt}</p>
          <Dot />
          <p>{contract}</p>
          <Dot />
          <p>{location}</p>
        </div>
      </CompanyInfoWrapper>
    </Container>
  );
};

export default JobDetails;
