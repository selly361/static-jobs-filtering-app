import React, { useContext } from "react";
import styled from "styled-components";
import { JobsContextProvider } from "../../../context/JobsProvider";
import JobCard from "../JobCard/JobCard";
import { motion, AnimatePresence } from 'framer-motion'

const Wrapper = styled(motion.main)`
  padding-top: 3rem;
  width: 80vw;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  margin: auto;
  margin-top: 3rem;

  @media (max-width: 760px){
    gap: 3rem;
    width: 95vw;
  }
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

  const animation = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: .15
        }
    }
}


  return (
    <Wrapper 
      variants={animation}
      initial="hidden"
      animate="visible">
      <AnimatePresence>
        {jobs.map(job => <JobCard job={job} />)}
      </AnimatePresence>
    </Wrapper>
  );
};

export default JobList;
