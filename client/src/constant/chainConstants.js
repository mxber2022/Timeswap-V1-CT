import { baseSepolia } from '@wagmi/core/chains'
import { http } from 'viem'

export const citreaChain = {
  id: 5115,
  name: 'Citrea Testnet',
  nativeCurrency: { name: 'Citrea Testnet', symbol: 'CBTC', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.citrea.xyz'] },
  },
  blockExplorers: {
    default: { name: 'Testnet', url: 'https://explorer.testnet.citrea.xyz/' },
  },
}
export const chainArray = [baseSepolia, citreaChain]

export const transportsObject = {
  [baseSepolia.id]: http(),
  [citreaChain.id]: http(),
}
