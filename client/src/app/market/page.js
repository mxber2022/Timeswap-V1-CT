'use client'
import React from 'react'
import { useDataContext } from '@/context/DataContext'
const coinPairsData = [
  {
    pair: 'OUSD / CBTC',
    description: '✨ Boosted',
    platform: 'Polytrade',
    tvl: '$0',
    apr: '24%',
    collateral: '120%',
    maturity: '26 Dec 2024',
    tp: '0.009 CBTC/OUSD',
  },
]

const Market = () => {
  const { asset, collateral, fee, protocolFee } = useDataContext()
  return (
    <>
      <div className="w-screen mt-20 p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="mx-auto mt-8 max-w-screen-lg px-2">
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-xl  font-bold text-white font-[family-name:var(--font-geist-sans)]">Markets</p>
          </div>
          <div className="grid grid-cols-1 gap-2 gap-y-4 mt-10 bg-transparent sm:grid-cols-2 sm:p-10 lg:grid-cols-2">
            <div className="max-w-md rounded-xl border bg-transparent p-6 pb-10 text-white">
              <p className="text-lg font-medium">Asset Address</p>
              <div className="mt-4 flex items-center rounded-lg bg-transparent py-1 px-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">{asset}</p>
              </div>
            </div>
            <div className="max-w-md rounded-xl border bg-transparent p-6 pb-10 text-white">
              <p className="text-lg font-medium">Collateral Address</p>
              <div className="mt-4 flex items-center rounded-lg bg-transparent py-1 px-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">{collateral}</p>
              </div>
            </div>
            <div className="max-w-md rounded-xl border bg-transparent p-6 pb-10 text-white">
              <p className="text-lg font-medium">Fee</p>
              <div className="mt-4 flex items-center rounded-lg bg-transparent py-1 px-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">{+fee?.toString()} Wei</p>
              </div>
            </div>
            <div className="max-w-md rounded-xl border bg-transparent p-6 pb-10 text-white">
              <p className="text-lg font-medium"> Protocol Fee</p>
              <div className="mt-4 flex items-center rounded-lg bg-transparent py-1 px-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">{+protocolFee?.toString()} Wei</p>
              </div>
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
                  <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-6">TP</td>
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
                        {coinPair.tp}
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
            <div className="flex flex-row-reverse">
              <button
                
                className="m-2 inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
              >
               Lend
              </button>
              <button
                className="m-2 inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 font-medium text-blue-600 shadow hover:bg-blue-50"
              >
                Borrow
              </button>
              <button
                
                className="m-2 inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 font-medium text-blue-600 shadow hover:bg-blue-50"
              >
                Mint
              </button>
              <button
                
                className="m-2 inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 font-medium text-blue-600 shadow hover:bg-blue-50"
              >
                Burn
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Market
