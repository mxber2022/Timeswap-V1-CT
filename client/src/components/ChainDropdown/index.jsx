"use client";
import { useChain } from "@/context/ChainContext";
import React, { useEffect } from "react";
import Dropdown from "../Resusables/Dropdown.jsx";
const ChainDropdown = () => {
  const { setChainDetail, chainDetail } = useChain();
  const chains = [
    {
      name: "Citrea Testnet",
      url: "https://explorer.testnet.citrea.xyz/",
      id: "5115",
    },
  ];

  useEffect(() => {
    setChainDetail(chains[0]);
  }, []);

  const handleSelectChain = (chain) => {
    setChainDetail(chain);
    localStorage.setItem("selectedChainId", chain.id);
  };

  return (
    <Dropdown
      items={chains}
      label="Supported Chains"
      onSelect={handleSelectChain}
      selectedItem={chainDetail}
    />
  );
};

export default ChainDropdown;
