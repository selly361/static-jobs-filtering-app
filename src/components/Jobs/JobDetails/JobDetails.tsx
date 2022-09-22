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
`;

const Logo = styled.img`
  height: 100px;
  border-radius: 50%;
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

  section:first-child {
    display: flex;
    gap: .9rem;
    align-items: center;
  }

  section:last-child {
    display: flex;
    gap: .3rem;
    align-items: center;
  }

`

const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background-color: #7b8e8e;
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
        <section>
          <CompanyName>{company}</CompanyName>
          {jobsNew && <NewTag>New!</NewTag>}
          {featured && <FeaturedTag>Featured!</FeaturedTag>}
        </section>
        <section>
          <h2>{position}</h2>
        </section>
        <section>
          <p>{postedAt}</p>
          <Dot />
          <p>{contract}</p>
          <Dot />
          <p>{location}</p>
        </section>
      </CompanyInfoWrapper>
    </Container>
  );
};

export default JobDetails;
