"use client";

import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useWriteContract, useContractWrite } from "wagmi";
import { ethers } from "ethers";
import { parseGwei } from "viem";

// Your deployed contract addresses
const factoryAddress = "0xAc351584FCa597360CCb7984B29873A042361217";
const timeSwapMathAddress = "0x2f94c770761928E4E0d364AC3c888621F75E5E99";

const abi1 = [
  // Include your contract's ABI here. Specifically, the createPair function signature.
  {
    inputs: [
      { internalType: "address", name: "asset", type: "address" },
      { internalType: "address", name: "collateral", type: "address" },
    ],
    name: "createPair",
    outputs: [{ internalType: "address", name: "pair", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  // Add other necessary ABI details
];

const DeployPair = () => {
  const {
    writeContract,
    isSuccess,
    data: writeContractData,
    status: writeContractStatus,
    error: contracterror,
  } = useWriteContract();
  const { address: userAddress } = useAccount();
  const [pairContractAddress, setPairContractAddress] = useState(
    null
  );

  // State to handle input values for asset and collateral token addresses
  const [assetTokenAddress, setAssetTokenAddress] = useState("");
  const [collateralTokenAddress, setCollateralTokenAddress] =
    useState("");

  async function createPair() {
    console.log("creating pair");
    console.log("assetTokenAddress: ", assetTokenAddress);
    console.log("collateralTokenAddress: ", collateralTokenAddress);
    const gasPrice = ethers.utils.parseUnits("20", "gwei");
    try {
      writeContract({
        abi: abi1,
        address: "0x41790CF2FFA54FB6A3bb853dF0Fe7bd10A5F12c2",
        functionName: "createPair",
        args: [assetTokenAddress, collateralTokenAddress]
      });
      console.log("creating pair completed");
    } catch (e) {
      console.log("error: ", e);
    }
  }
  console.log("writeContractStatus: ", writeContractStatus);
  console.log("contracterror: ", contracterror);
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-white font-bold">Create Timeswap Pair</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Asset Token Address:
          <input
            type="text"
            value={assetTokenAddress}
            className="border border-gray-400 px-8 py-2 rounded-md text-black" 
            onChange={(e) => setAssetTokenAddress(e.target.value)}
            placeholder="Enter Asset Token Address"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Collateral Token Address:
          <input
            type="text"
            value={collateralTokenAddress}
            onChange={(e) => setCollateralTokenAddress(e.target.value)}
            className="border border-gray-400 px-8 py-2 rounded-md text-black" 
            placeholder="Enter Collateral Token Address"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>

      <button
        onClick={createPair}
        style={{ padding: "10px 15px", cursor: "pointer" }}
        className="bg-blue-500 text-white rounded-md border mb-10"
        disabled={!createPair || !assetTokenAddress || !collateralTokenAddress}
      >
        Create Pair
      </button>

      {pairContractAddress && (
        <div>
          <h3>Pair Contract Address</h3>
          <p>{pairContractAddress}</p>
        </div>
      )}
    </div>
  );
};

export default DeployPair;
