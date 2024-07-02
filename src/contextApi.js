import { useContext, createContext } from "react";
export const userCOntext = createContext();

export const GlobaldataProvider = userCOntext.Provider

export default function useData(){
    return useContext(userCOntext)
}