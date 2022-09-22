import React, { Fragment } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import JobList from './components/Jobs/JobList/JobList';
import Navbar from './components/Navbar/Navbar';
import JobsProvider from './context/JobsProvider';
import { GlobalStyles } from './globalStyles/GlobalStyles';



function App() {
  return (
    <Fragment>
      <JobsProvider>
        <GlobalStyles />
        <Navbar />
        <FilterBar />
        <JobList />
      </JobsProvider>
    </Fragment>
  );
}

export default App;
