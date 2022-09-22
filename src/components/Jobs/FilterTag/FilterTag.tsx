import React, { useContext } from "react";
import styled from "styled-components";
import { JobsContextProvider } from "../../../context/JobsProvider";
import { ReactComponent as RemoveIcon } from "../../../assets/images/icon-remove.svg";
import { motion } from 'framer-motion'


interface PropTypes {
  children: React.ReactNode;
  remove?: boolean;
}

const Tag = styled.h4`
  border: none;
  border-radius: 5px;
  padding: 8px 8px 6px;
  color: #5ba4a4;
  background-color: #eef6f6;
  font-weight: 700;
  transition: 1s ease;
  transition-property: color, background-color;
    
  &:hover {
    cursor: pointer;
    background-color: #5ba4a4;
    color: white;
  }
`;


const RemoveTag = styled.h4`
  border: none;
  border-radius: 5px;
  padding: 8px 8px 6px;
  color: #5ba4a4;
  background-color: #eef6f6;
  font-weight: 700;
  display: flex;
  align-items: center;
`;


const RemoveContainer = styled(motion.div)`
  width: max-content;
  height: max-content;
  display: flex;
`;

const IconContainer = styled.div`
    background-color: #5ba4a4;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: .5rem 1rem;

    &:hover {
    cursor: pointer;
  }

`

const FilterTag = ({ children, remove }: PropTypes) => {
  const { addCategory, removeCategory } = useContext(JobsContextProvider);
  return remove ? (
    <RemoveContainer initial={{ opacity: 0 }} animate={{ opacity: 1}}>
      <RemoveTag>{children}</RemoveTag>
      <IconContainer onClick={() => removeCategory(children)} >
        <RemoveIcon />
      </IconContainer>
    </RemoveContainer>
  ) : (
    <Tag onClick={() => addCategory(children)}>{children}</Tag>
  );
};

export default FilterTag;
