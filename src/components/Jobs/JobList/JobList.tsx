import React, { useContext } from "react";
import styled from "styled-components";
import { JobsContextProvider } from "../../../context/JobsProvider";
import JobCard from "../JobCard/JobCard";

const Wrapper = styled.main`
  padding-top: 3rem;
  width: 80vw;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  margin: auto;


`;

const JobList = () => {
  const {
    jobs,
    setJobs,
    addCategory,
    removeCategory,
    filterCategories,
    setFilterCategories,
  } = useContext(JobsContextProvider);



  return (
    <Wrapper>
      {jobs.map(job => <JobCard job={job}  />)}
    </Wrapper>
  );
};

export default JobList;
