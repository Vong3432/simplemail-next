import React, { createContext, Dispatch, SetStateAction, useReducer, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { DemoRowItemProps } from "../components/demo/DemoRowItem";

export interface DemoContextProps {
    currentDemo: DemoRowItemProps | null
    setCurrentDemo: Dispatch<SetStateAction<DemoRowItemProps | null>>
}

export const DemoContext = createContext<DemoContextProps | null>(null);

export const DemoContextProvider = (props: any) => {

    const [currentDemo, setCurrentDemo] = useState<DemoRowItemProps | null>(null)

    return (
        <DemoContext.Provider value={{ currentDemo, setCurrentDemo }}>
            {props.children}
        </DemoContext.Provider>
    )
};

