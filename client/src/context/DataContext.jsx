import React, { useState, useEffect, ReactNode } from 'react'
import { useAccount } from 'wagmi'
import { useEthersSigner } from '@/utils/signer'
import { ethers, BigNumber, Contract } from 'ethers'
import { pairAddress, pairAbi } from '@/constant/index'

const DataContext = React.createContext(undefined)
const DataContextProvider = ({ children }) => {
  const { address, chain } = useAccount()
  const [activeChain, setActiveChainId] = useState(chain?.id)
  const [loading, setLoading] = useState(false)
  const [asset, setAsset] = useState('');
  const [collateral, setCollateral] = useState('');
  const [fee, setFee] = useState('');
  const [protocolFee, setProtocolFee] = useState('');
  useEffect(() => {
    setActiveChainId(chain?.id)
  }, [chain?.id])

  const signer = useEthersSigner({ chainId: activeChain })

  const getContractInstance = async (contractAddress, contractAbi) => {
    try {
      console.log('contractAddress', contractAddress)
      console.log('signer', signer)
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer)
      return contractInstance
    } catch (error) {
      console.log('Error in deploying contract')
      return undefined
    }
  }

  const borrow = async (maturity, assetTo, dueTo, xDecrease, yIncrease, zIncrease, data) => {
    setLoading(true)
    try {
        const pairContract = await getContractInstance(pairAddress, pairAbi)
        const tx = await pairContract.borrow(
            maturity,
            assetTo,
            dueTo,
            xDecrease,
            yIncrease,
            zIncrease,
            data
        )
        await tx.wait()
    } catch (error) {
        console.error("Error borrowing:", error)
    } finally {
        setLoading(false)
    }
}
const burn = async (maturity, assetTo, collateralTo, liquidityIn) => {
  setLoading(true)
  try {
      const pairContract = await getContractInstance(pairAddress, pairAbi)
      const tx = await pairContract.burn(
          maturity,
          assetTo,
          collateralTo,
          liquidityIn
      )
      await tx.wait()
  } catch (error) {
      console.error("Error burning:", error)
  } finally {
      setLoading(false)
  }
}
const lend = async (maturity, bondTo, insuranceTo, xIncrease, yDecrease, zDecrease, data) => {
  setLoading(true)
  try {
      const pairContract = await getContractInstance(pairAddress, pairAbi)
      const tx = await pairContract.lend(
          maturity,
          bondTo,
          insuranceTo,
          xIncrease,
          yDecrease,
          zDecrease,
          data
      )
      await tx.wait()
  } catch (error) {
      console.error("Error lending:", error)
  } finally {
      setLoading(false)
  }
}
const mint = async (maturity, liquidityTo, dueTo, xIncrease, yIncrease, zIncrease, data) => {
  setLoading(true)
  try {
      const pairContract = await getContractInstance(pairAddress, pairAbi)
      const tx = await pairContract.mint(
          maturity,
          liquidityTo,
          dueTo,
          xIncrease,
          yIncrease,
          zIncrease,
          data
      )
      await tx.wait()
  } catch (error) {
      console.error("Error in minting:", error)
  } finally {
      setLoading(false)
  }
}



  const getAsset = async () => {
    const pairContract = await getContractInstance(pairAddress, pairAbi)
    let asset = await pairContract.asset();
    let collateral = await pairContract.collateral();
    let fee = await pairContract.fee();
    let protocolFee = await pairContract.protocolFee();
    setFee(fee);
    setProtocolFee(protocolFee);
    setCollateral(collateral);
    setAsset(asset)
  }

  useEffect(() => {
    if (!signer) return
    getAsset()
  }, [signer])

  return <DataContext.Provider value={{
    asset,
    collateral,
    fee,
    protocolFee,
    borrow,
    burn,
    lend,
    mint,
  }}>{children}</DataContext.Provider>
}

export const useDataContext = () => {
  const context = React.useContext(DataContext)
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataContextProvider')
  }
  return context
}

export default DataContextProvider
