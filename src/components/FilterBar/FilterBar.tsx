import React, { useContext } from 'react'
import styled from 'styled-components'
import { JobsContextProvider } from '../../context/JobsProvider'
import FilterTag from '../Jobs/FilterTag/FilterTag'




const Bar = styled.div`
  margin: auto;
  width: 80vw;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 15px 15px -4px hsl(180deg 29% 50% / 20%);
  border-left: 8px solid transparent;
  padding: .5rem;
  display: flex;
  align-items: center;
  transform: translate(0, -50%);
  gap: 1rem;
`

const FilterBar = () => {
    const { filterCategories } = useContext(JobsContextProvider)
    return filterCategories.length ? (
        <Bar>
            {filterCategories.map(c => <FilterTag remove>{c}</FilterTag>)}
        </Bar>
    ) : null
}

export default FilterBar