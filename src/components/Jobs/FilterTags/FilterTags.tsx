import styled from 'styled-components'
import { JobsContextProvider } from '../../../context/JobsProvider'
import FilterTag from '../FilterTag/FilterTag'

interface PropTypes {
  categories: string[]
}

const Container = styled.div`
  display: flex;
  gap: .5rem;
  flex-flow: wrap;
  height: max-content;
  align-items: center;
  justify-content: end;
  width: 40%;
  padding: .2rem;

  @media (max-width: 760px){
    width: 100%;
  justify-content: start;
  }

`




const FilterTags = ({ categories }: PropTypes) => {
  return (
    <Container>
      {categories.map(category => <FilterTag remove={false}>{category}</FilterTag>)}
    </Container>
  )
}

export default FilterTags