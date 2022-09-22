import React from 'react'
import styled from 'styled-components'
import { NodeBuilderFlags } from 'typescript'
import { jobType } from '../../../types/types'
import FilterTags from '../FilterTags/FilterTags'
import JobDetails from '../JobDetails/JobDetails'
import { motion } from 'framer-motion'


interface PropTypes {
  job: jobType,
}


interface CardProps {
  active: boolean
}

const Card = styled(motion.div) <CardProps>`
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 15px 15px -4px hsl(180deg 29% 50% / 20%);
  border-left: 8px solid transparent;
  border-left-color: ${props => props.active ? "#5ba4a4" : 'transparent'};
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 760px){
    height: 300px;
    flex-flow: column;
    height: max-content;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
  }
`


const JobCard = ({ job }: PropTypes) => {
  const jobDetailsProps = {
    company: job.company,
    logo: job.logo,
    jobsNew: job.new,
    featured: job.featured,
    position: job.position,
    postedAt: job.postedAt,
    location: job.location,
    contract: job.contract
  }

  const animation = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}

  return (
    <Card active={job.featured ? true : false} variants={animation}       initial="hidden"
    animate="visible">
      <JobDetails {...jobDetailsProps} />
      <FilterTags categories={[job.role, job.level, ...job.tools, ...job.languages]} />
    </Card>
  )
}

export default JobCard
