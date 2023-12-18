import { createContext, useState } from "react";

export const TaskContext = createContext<string[]>([]); 

export const TaskContextProvider = ({children}: any, tasks: string) => {

    return (
        <TaskContext.Provider value={[tasks]}>
            {children}
        </TaskContext.Provider>
    )
}