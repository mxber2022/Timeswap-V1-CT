'use client'

import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { createConfig, WagmiProvider, useAccount } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http } from 'viem'
import { mainnet } from 'viem/chains'
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector'
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core'
import { mergeNetworks } from '@dynamic-labs/sdk-react-core'

export default function Providers({ children }: { children: React.ReactNode }) {
  const evmNetworks = [
    {
      iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
      blockExplorerUrls: ['https://explorer-holesky.morphl2.io/'],
      chainId: 5115,
      name: 'CitreaTestnet',
      rpcUrls: ['https://rpc.testnet.citrea.xyz'],
      nativeCurrency: {
        name: 'Citrea',
        symbol: 'CBTC',
        decimals: 18,
      },
      networkId: 5115,
    },
  ]

  // const DynamicSettings = {
  //   overrides: {
  //     evmNetworks: (networks: any) => mergeNetworks(evmNetworks, networks),
  //   },
  // }

  const config = createConfig({
    chains: [mainnet],
    multiInjectedProviderDiscovery: false,
    transports: {
      [mainnet.id]: http(),
    },
  })

  const queryClient = new QueryClient()

  return (
    <DynamicContextProvider
      theme="auto"
      settings={{
        environmentId: 'ad66709f-a7b6-4f48-8f3f-4970d539978f',
        walletConnectors: [EthereumWalletConnectors],
        overrides: { evmNetworks },
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  )
}
