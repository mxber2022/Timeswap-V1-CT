import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import { ChainId } from '@uniswap/sdk-core'
import * as dotenv from 'dotenv'
import 'hardhat-contract-sizer'
import 'hardhat-deploy'
import 'solidity-coverage'

dotenv.config()

export default {
  allowUnlimitedContractSize: true,
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    factoryDeployer: 0,
    factoryOwner: 0,
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    CitreaTestnet: {
      url: `https://rpc.testnet.citrea.xyz`,
      accounts: [`0x${process.env['PRIVATE_KEY']}`],
      ChainId: 5115,
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true,
  },
  mocha: {
    timeout: 60000,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
}
