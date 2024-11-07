import React from 'react'
const coinPairsData = [
  {
    pair: 'USDT / TRADE',
    description: '✨ Boosted',
    platform: 'Polytrade',
    tvl: '$34,871',
    apr: '141.20%',
    collateral: 'TRADE',
    maturity: '26 Dec 2024',
  },
  {
    pair: 'ETH / USDC',
    description: 'Stable Pair',
    platform: 'Compound',
    tvl: '$500,000',
    apr: '5.43%',
    collateral: 'USDC',
    maturity: '15 Jan 2025',
  },
  {
    pair: 'DAI / WBTC',
    description: 'High Yield',
    platform: 'Aave',
    tvl: '$1,200,000',
    apr: '12.80%',
    collateral: 'WBTC',
    maturity: '10 Nov 2024',
  },
  {
    pair: 'BNB / BUSD',
    description: '✨ Boosted',
    platform: 'PancakeSwap',
    tvl: '$750,000',
    apr: '9.50%',
    collateral: 'BUSD',
    maturity: '30 Dec 2024',
  },
  {
    pair: 'SOL / USDT',
    description: 'High Liquidity',
    platform: 'Solend',
    tvl: '$320,000',
    apr: '18.70%',
    collateral: 'SOL',
    maturity: '1 Feb 2025',
  },
  {
    pair: 'AVAX / ETH',
    description: 'Long Term',
    platform: 'Trader Joe',
    tvl: '$210,000',
    apr: '7.20%',
    collateral: 'ETH',
    maturity: '20 Mar 2025',
  },
]

const Market = () => {
  return (
    <>
      <div className="w-screen mt-20 p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="mx-auto mt-8 max-w-screen-lg px-2">
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-xl  font-bold text-white font-[family-name:var(--font-geist-sans)]">Markets</p>

            <div className="mt-4 sm:mt-0">
              <div className="flex items-center justify-start sm:justify-end"></div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border shadow">
            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-6">Chain</td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-6">
                    Pools ( Asset / Collateral )
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-6">TVL</td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-6">APR</td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-6">CDP</td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-6">MATURITY</td>
                </tr>
              </thead>

              <tbody className="lg:border-gray-300">
                {coinPairsData.map((coinPair, index) => {
                  return (
                    <tr className="" key={index}>
                      <td className="whitespace-no-wrap py-4 text-sm font-bold text-white sm:px-6">
                        Citrea
                        <div className="mt-1 lg:hidden">
                          <p className="font-normal text-white">07 February, 2022</p>
                        </div>
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal  text-red sm:px-6 lg:table-cell">
                      {coinPair.pair}
                      </td>

                      <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-white lg:text-left">
                        {coinPair.tvl}
                        
                      </td>

                      <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-white lg:text-left">
                        {coinPair.apr}
                        
                      </td>
                      <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-white lg:text-left">
                        {coinPair.collateral}
                        
                      </td>
                      <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-white lg:text-left">
                        {coinPair.maturity}
                      </td>


                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Market
