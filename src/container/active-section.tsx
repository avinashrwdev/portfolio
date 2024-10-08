"use client";

import React, {useState, createContext, useContext} from "react";
import { SectionName } from "@/lib/types";

type ActiveSectionContextProvideProps = {
  children : React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection : SectionName;
  setActiveSection : React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick : number;
  setTimeOfLastClick : React.Dispatch<React.SetStateAction<number>>
};

export const ActiveSectionContext = 
  createContext <ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvide({
  children,
}:ActiveSectionContextProvideProps){
  const [activeSection, setActiveSection] = useState<SectionName>("#home")
  const [timeOfLastClick, setTimeOfLastClick] = useState(0) 
  
  return(
    <ActiveSectionContext.Provider
    value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick
    }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);

  if (context === null){
    throw new Error(
      "useActiveSectionContext msut be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}