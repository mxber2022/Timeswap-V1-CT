export const pairAddress = "0x5Af6300197D9fd6ADCE0F544f4B087bf899bebC0";
export const pairAbi =[
  {
      "inputs": [
          {
              "internalType": "contract IERC20",
              "name": "_asset",
              "type": "address"
          },
          {
              "internalType": "contract IERC20",
              "name": "_collateral",
              "type": "address"
          },
          {
              "internalType": "uint16",
              "name": "_fee",
              "type": "uint16"
          },
          {
              "internalType": "uint16",
              "name": "_protocolFee",
              "type": "uint16"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "assetTo",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "dueTo",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "assetOut",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "components": [
                  {
                      "internalType": "uint112",
                      "name": "debt",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "collateral",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint32",
                      "name": "startBlock",
                      "type": "uint32"
                  }
              ],
              "indexed": false,
              "internalType": "struct IPair.Due",
              "name": "dueOut",
              "type": "tuple"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeIn",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "protocolFeeIn",
              "type": "uint256"
          }
      ],
      "name": "Borrow",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "assetTo",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "collateralTo",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "liquidityIn",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "assetOut",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint128",
              "name": "collateralOut",
              "type": "uint128"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeOut",
              "type": "uint256"
          }
      ],
      "name": "Burn",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "protocolFeeOut",
              "type": "uint256"
          }
      ],
      "name": "CollectProtocolFee",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "bondTo",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "insuranceTo",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "assetIn",
              "type": "uint256"
          },
          {
              "components": [
                  {
                      "internalType": "uint112",
                      "name": "bondPrincipal",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "bondInterest",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "insurancePrincipal",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "insuranceInterest",
                      "type": "uint112"
                  }
              ],
              "indexed": false,
              "internalType": "struct IPair.Claims",
              "name": "claimsOut",
              "type": "tuple"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeIn",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "protocolFeeIn",
              "type": "uint256"
          }
      ],
      "name": "Lend",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "liquidityTo",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "dueTo",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "assetIn",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "liquidityOut",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "components": [
                  {
                      "internalType": "uint112",
                      "name": "debt",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "collateral",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint32",
                      "name": "startBlock",
                      "type": "uint32"
                  }
              ],
              "indexed": false,
              "internalType": "struct IPair.Due",
              "name": "dueOut",
              "type": "tuple"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeIn",
              "type": "uint256"
          }
      ],
      "name": "Mint",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
          },
          {
              "indexed": false,
              "internalType": "uint112[]",
              "name": "assetsIn",
              "type": "uint112[]"
          },
          {
              "indexed": false,
              "internalType": "uint112[]",
              "name": "collateralsOut",
              "type": "uint112[]"
          },
          {
              "indexed": false,
              "internalType": "uint128",
              "name": "assetIn",
              "type": "uint128"
          },
          {
              "indexed": false,
              "internalType": "uint128",
              "name": "collateralOut",
              "type": "uint128"
          }
      ],
      "name": "Pay",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint112",
              "name": "x",
              "type": "uint112"
          },
          {
              "indexed": false,
              "internalType": "uint112",
              "name": "y",
              "type": "uint112"
          },
          {
              "indexed": false,
              "internalType": "uint112",
              "name": "z",
              "type": "uint112"
          }
      ],
      "name": "Sync",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "assetTo",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "collateralTo",
              "type": "address"
          },
          {
              "components": [
                  {
                      "internalType": "uint112",
                      "name": "bondPrincipal",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "bondInterest",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "insurancePrincipal",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "insuranceInterest",
                      "type": "uint112"
                  }
              ],
              "indexed": false,
              "internalType": "struct IPair.Claims",
              "name": "claimsIn",
              "type": "tuple"
          },
          {
              "components": [
                  {
                      "internalType": "uint128",
                      "name": "asset",
                      "type": "uint128"
                  },
                  {
                      "internalType": "uint128",
                      "name": "collateral",
                      "type": "uint128"
                  }
              ],
              "indexed": false,
              "internalType": "struct IPair.Tokens",
              "name": "tokensOut",
              "type": "tuple"
          }
      ],
      "name": "Withdraw",
      "type": "event"
  },
  {
      "inputs": [],
      "name": "asset",
      "outputs": [
          {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "maturity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "assetTo",
                      "type": "address"
                  },
                  {
                      "internalType": "address",
                      "name": "dueTo",
                      "type": "address"
                  },
                  {
                      "internalType": "uint112",
                      "name": "xDecrease",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "yIncrease",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "zIncrease",
                      "type": "uint112"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct IPair.BorrowParam",
              "name": "param",
              "type": "tuple"
          }
      ],
      "name": "borrow",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "assetOut",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "components": [
                  {
                      "internalType": "uint112",
                      "name": "debt",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "collateral",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint32",
                      "name": "startBlock",
                      "type": "uint32"
                  }
              ],
              "internalType": "struct IPair.Due",
              "name": "dueOut",
              "type": "tuple"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "maturity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "assetTo",
                      "type": "address"
                  },
                  {
                      "internalType": "address",
                      "name": "collateralTo",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "liquidityIn",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct IPair.BurnParam",
              "name": "param",
              "type": "tuple"
          }
      ],
      "name": "burn",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "assetOut",
              "type": "uint256"
          },
          {
              "internalType": "uint128",
              "name": "collateralOut",
              "type": "uint128"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "claimsOf",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint112",
                      "name": "bondPrincipal",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "bondInterest",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "insurancePrincipal",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "insuranceInterest",
                      "type": "uint112"
                  }
              ],
              "internalType": "struct IPair.Claims",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "collateral",
      "outputs": [
          {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          }
      ],
      "name": "collectProtocolFee",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "protocolFeeOut",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          }
      ],
      "name": "constantProduct",
      "outputs": [
          {
              "internalType": "uint112",
              "name": "",
              "type": "uint112"
          },
          {
              "internalType": "uint112",
              "name": "",
              "type": "uint112"
          },
          {
              "internalType": "uint112",
              "name": "",
              "type": "uint112"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          }
      ],
      "name": "dueOf",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint112",
                      "name": "debt",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "collateral",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint32",
                      "name": "startBlock",
                      "type": "uint32"
                  }
              ],
              "internalType": "struct IPair.Due",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "factory",
      "outputs": [
          {
              "internalType": "contract IFactory",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "fee",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          }
      ],
      "name": "feeStored",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "maturity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "bondTo",
                      "type": "address"
                  },
                  {
                      "internalType": "address",
                      "name": "insuranceTo",
                      "type": "address"
                  },
                  {
                      "internalType": "uint112",
                      "name": "xIncrease",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "yDecrease",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "zDecrease",
                      "type": "uint112"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct IPair.LendParam",
              "name": "param",
              "type": "tuple"
          }
      ],
      "name": "lend",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "assetIn",
              "type": "uint256"
          },
          {
              "components": [
                  {
                      "internalType": "uint112",
                      "name": "bondPrincipal",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "bondInterest",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "insurancePrincipal",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "insuranceInterest",
                      "type": "uint112"
                  }
              ],
              "internalType": "struct IPair.Claims",
              "name": "claimsOut",
              "type": "tuple"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "liquidityOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "maturity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "liquidityTo",
                      "type": "address"
                  },
                  {
                      "internalType": "address",
                      "name": "dueTo",
                      "type": "address"
                  },
                  {
                      "internalType": "uint112",
                      "name": "xIncrease",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "yIncrease",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "zIncrease",
                      "type": "uint112"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct IPair.MintParam",
              "name": "param",
              "type": "tuple"
          }
      ],
      "name": "mint",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "assetIn",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "liquidityOut",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "components": [
                  {
                      "internalType": "uint112",
                      "name": "debt",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "collateral",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint32",
                      "name": "startBlock",
                      "type": "uint32"
                  }
              ],
              "internalType": "struct IPair.Due",
              "name": "dueOut",
              "type": "tuple"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "maturity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "to",
                      "type": "address"
                  },
                  {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256[]",
                      "name": "ids",
                      "type": "uint256[]"
                  },
                  {
                      "internalType": "uint112[]",
                      "name": "assetsIn",
                      "type": "uint112[]"
                  },
                  {
                      "internalType": "uint112[]",
                      "name": "collateralsOut",
                      "type": "uint112[]"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct IPair.PayParam",
              "name": "param",
              "type": "tuple"
          }
      ],
      "name": "pay",
      "outputs": [
          {
              "internalType": "uint128",
              "name": "assetIn",
              "type": "uint128"
          },
          {
              "internalType": "uint128",
              "name": "collateralOut",
              "type": "uint128"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "protocolFee",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "protocolFeeStored",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          }
      ],
      "name": "totalClaims",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint112",
                      "name": "bondPrincipal",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "bondInterest",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "insurancePrincipal",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint112",
                      "name": "insuranceInterest",
                      "type": "uint112"
                  }
              ],
              "internalType": "struct IPair.Claims",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          }
      ],
      "name": "totalDebtCreated",
      "outputs": [
          {
              "internalType": "uint120",
              "name": "",
              "type": "uint120"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "totalDuesOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          }
      ],
      "name": "totalLiquidity",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "maturity",
              "type": "uint256"
          }
      ],
      "name": "totalReserves",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint128",
                      "name": "asset",
                      "type": "uint128"
                  },
                  {
                      "internalType": "uint128",
                      "name": "collateral",
                      "type": "uint128"
                  }
              ],
              "internalType": "struct IPair.Tokens",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "maturity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "assetTo",
                      "type": "address"
                  },
                  {
                      "internalType": "address",
                      "name": "collateralTo",
                      "type": "address"
                  },
                  {
                      "components": [
                          {
                              "internalType": "uint112",
                              "name": "bondPrincipal",
                              "type": "uint112"
                          },
                          {
                              "internalType": "uint112",
                              "name": "bondInterest",
                              "type": "uint112"
                          },
                          {
                              "internalType": "uint112",
                              "name": "insurancePrincipal",
                              "type": "uint112"
                          },
                          {
                              "internalType": "uint112",
                              "name": "insuranceInterest",
                              "type": "uint112"
                          }
                      ],
                      "internalType": "struct IPair.Claims",
                      "name": "claimsIn",
                      "type": "tuple"
                  }
              ],
              "internalType": "struct IPair.WithdrawParam",
              "name": "param",
              "type": "tuple"
          }
      ],
      "name": "withdraw",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint128",
                      "name": "asset",
                      "type": "uint128"
                  },
                  {
                      "internalType": "uint128",
                      "name": "collateral",
                      "type": "uint128"
                  }
              ],
              "internalType": "struct IPair.Tokens",
              "name": "tokensOut",
              "type": "tuple"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  }
]
