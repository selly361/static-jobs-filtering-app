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

export const JobsContextProvider = createContext<CtxProps | {
    filterCategories: [],
    jobs: [],
    addCategory: Function,
    removeCategory: Function,
    setFilterCategories: Function,
    setJobs: Function,
}>(
    {
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

    const checkIfInCategory = (items: string[]) => {
        const booleanArr = items.map((item) => filterCategories.includes(item));
        let boolean = booleanArr.some((item) => item);
        return boolean;
    };

    useEffect(() => {
        let jobList = jobs;
        if (filterCategories.length) {
            jobList = jobList.filter((job) =>
                checkIfInCategory([job.role, job.level, ...job.tools, ...job.languages])
            );
        }

        setJobs(jobList);
    }, [filterCategories]);

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
