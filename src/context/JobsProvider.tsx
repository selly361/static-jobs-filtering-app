import React, { useEffect, useState, ReactNode, createContext } from "react";
import { JsxElement } from "typescript";
import data from "../assets/data.json";
import { jobType } from "../types/types";

type CtxProps = {
  jobs: jobType[];
  filterCategories: string[];
  addCategory: Function;
  removeCategory: Function;
  setFilterCategories: Function;
  setJobs: Function;
};

export const JobsContextProvider = createContext<
  | CtxProps
  | {
    filterCategories: [];
    jobs: [];
    addCategory: Function;
    removeCategory: Function;
    setFilterCategories: Function;
    setJobs: Function;
  }
>({
  filterCategories: [],
  jobs: [],
  addCategory: () => { },
  removeCategory: () => { },
  setFilterCategories: () => { },
  setJobs: () => { },
});

interface PropTypes {
  children: ReactNode;
}

const JobsProvider = ({ children }: PropTypes) => {
  const [jobs, setJobs] = useState<jobType[]>(data);
  const [filterCategories, setFilterCategories] = useState<string[]>([]);

  const addCategory = (category: string) => {
    if (!filterCategories.includes(category)) {
      setFilterCategories((prev) => [...prev, category]);
    }
  };

  const removeCategory = (category: string) => {
    let categories = filterCategories;
    categories = categories.filter((cate) => cate !== category);
    setFilterCategories(categories);
  };


  const compare = (arr: string[]) => {
    let same = filterCategories.every(a => arr.includes(a))
    return same
  }

  const handleFilter = () => {
    let copy = data;
    copy = copy.filter(job => compare(job.categories))
    setJobs(copy)
  }

useEffect(() => {
  handleFilter()
}, [filterCategories])

  return (
    <JobsContextProvider.Provider
      value={{
        addCategory,
        removeCategory,
        filterCategories,
        setFilterCategories,
        setJobs,
        jobs,
      }}
    >
      {children}
    </JobsContextProvider.Provider>
  );
};

export default JobsProvider;
