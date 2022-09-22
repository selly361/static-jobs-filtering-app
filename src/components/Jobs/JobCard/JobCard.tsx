import React from 'react'
import styled from 'styled-components'
import { NodeBuilderFlags } from 'typescript'
import { jobType } from '../../../types/types'
import JobDetails from '../JobDetails/JobDetails'



interface PropTypes {
  job: jobType,
}


interface CardProps {
  active: boolean
}

const Card = styled.div<CardProps>`
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 15px 15px -4px hsl(180deg 29% 50% / 20%);
  border-left: 8px solid transparent;
  border-left-color: ${props => props.active ? "#5ba4a4" : 'transparent'};
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
  }
  return (
    <Card active={job.featured ? true : false}>
      <JobDetails {...jobDetailsProps} />
    </Card>
  )
}

export default JobCard

  // "id": 1,
  // "company": "Photosnap",
  // "logo": ".../../../../../assets/images/photosnap.svg",
  // "new": true,
  // "featured": true,
  // "position": "Senior Frontend Developer",
  // "role": "Frontend",
  // "level": "Senior",
  // "postedAt": "1d ago",
  // "contract": "Full Time",
  // "location": "USA Only",
  // "languages": ["HTML", "CSS", "JavaScript"],
  // "tools": []