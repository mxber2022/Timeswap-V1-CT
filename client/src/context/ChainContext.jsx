"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
const ChainContext = createContext(undefined);
export const ChainProvider = ({ children }) => {
  const [chainDetail, setChainDetail] = useState(null);
  return (
    <ChainContext.Provider value={{ chainDetail, setChainDetail }}>
      {children}
    </ChainContext.Provider>
  );
};

export const useChain = () => {
  const context = useContext(ChainContext);
  if (!context) {
    throw new Error("useChain must be used within a ChainProvider");
  }
  return context;
};
