import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { JobsContextProvider } from "../../context/JobsProvider";
import FilterTag from "../Jobs/FilterTag/FilterTag";

const Bar = styled(motion.div)`
  width: 80vw;
  height: max-content;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 15px 15px -4px hsl(180deg 29% 50% / 20%);
  border-left: 8px solid transparent;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  transform: translate(0, -50%);
  gap: 1rem;
  flex-flow: wrap;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;

  @media (max-width: 760px){
    width: 95vw;
  }
`;

const FilterBar = () => {
  const { filterCategories } = useContext(JobsContextProvider);
  return (
    <AnimatePresence>
      {filterCategories.length ? (
        <Bar
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
            {filterCategories.map((c) => (
              <FilterTag remove>{c}</FilterTag>
            ))}
        </Bar>
      ) : null}
    </AnimatePresence>
  );
};

export default FilterBar;
