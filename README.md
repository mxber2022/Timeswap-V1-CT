# Timeswap V1 Core

# Local Development

The following assumes the use of `node@>=14`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`

Here's how you can write that section as a part of your GitHub README:

---

## Deploying Pair Contract

### TimeswapMath Contract Address

- `0x2f94c770761928E4E0d364AC3c888621F75E5E99`

### Asset Token Address

- `0x09a78367B3725Cae7A0fe576B5fCeB9D467E4552`

### Collateral Token Address

- `0xC66e1854F53CF3fb86430CEc5fbe082392AE2cdF`

### Pair Contract Address

- `0x5Af6300197D9fd6ADCE0F544f4B087bf899bebC0`

### Test Results:

- **Create pair deploys a pair contract:**

  - **Status:** ✅ Passed
  - **Time Taken:** 6038ms
  - **Pair Contract Factory Address:** `0x5Af6300197D9fd6ADCE0F544f4B087bf899bebC0`

- **Create pair with same collateral and asset address:**

  - **Status:** ✅ Reverted (as expected)
  - **Time Taken:** 108ms

- **Create pair with same collateral or asset as zero address:**
  - **Status:** ✅ Reverted (as expected)
  - **Time Taken:** 202ms

---

### Summary:

- All tests were executed successfully.
- The contract has been deployed successfully, and pair creation functionality was verified.
- Edge cases such as using the same asset and collateral address or zero addresses were handled properly, with the expected reverts occurring.

### CONTRACT VERIFICATION

npx hardhat verify --network CitreaTestnet 0x41180575cDc0a4B13f77e13527984CDCE2100ED5 --contract contracts/test/TestToken.sol:TestToken "OUSDC" "OUSDC" "54463316145516758329000000000000000000000000000000000000000"

npx hardhat verify --network CitreaTestnet 0x74f8149d1395F462995bf250eeC4a2B03f021774 --contract contracts/test/TestToken.sol:TestToken "CBTC" "CBTC" "54463316145516758329000000000000000000000000000000000000000"

npx hardhat verify --network CitreaTestnet 0x5Af6300197D9fd6ADCE0F544f4B087bf899bebC0 --contract contracts/TimeswapPair.sol:TimeswapPair "0x41180575cDc0a4B13f77e13527984CDCE2100ED5" "0x74f8149d1395F462995bf250eeC4a2B03f021774" 0 0

npx hardhat verify --network CitreaTestnet 0xAc351584FCa597360CCb7984B29873A042361217 --contract contracts/TimeswapFactory.sol:TimeswapFactory 0x5F3d16A35Da619dFA0d607563eb1D14b75Fa25c5 0x2f94c770761928E4E0d364AC3c888621F75E5E99

## DEPLOY CONTRACT

npx hardhat test test/pair/1PairDeployment.test.ts --network CitreaTestnet

## Contract Address

Deploying Pair Contract
TimeswapMath Contract Address: 0x2f94c770761928E4E0d364AC3c888621F75E5E99
Asset Token Address: 0x09a78367B3725Cae7A0fe576B5fCeB9D467E4552
Collateral Token Address: 0xC66e1854F53CF3fb86430CEc5fbe082392AE2cdF
Pair Contract Address: 0x5Af6300197D9fd6ADCE0F544f4B087bf899bebC0

pairContractFactoryYYYYY
Pair Contract Factory Address: 0x5Af6300197D9fd6ADCE0F544f4B087bf899bebC0
✔ Creat pair deploys a pair contract (6038ms)
Asset Token Address: 0x41180575cDc0a4B13f77e13527984CDCE2100ED5
Collateral Token Address: 0x74f8149d1395F462995bf250eeC4a2B03f021774
✔ Create pair with same collateral and asset address: Reverted (108ms)
Asset Token Address: 0xA356D5065E8CD1Dc63FF4ce46E7b351282cd6Dd9
Collateral Token Address: 0xc31955b05B630c6e0c6C7D8347313a4bB7F6a67b
✔ Create pair with same collateral or asset as zero address: Reverted (202ms)

3 passing (55s)
