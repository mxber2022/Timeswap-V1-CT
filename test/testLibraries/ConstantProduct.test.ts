import chai from 'chai'
import { ethers, waffle } from 'hardhat'
import { ConstantProductTest } from '../../typechain/ConstantProductTest'
import ConstantProduct from '../libraries/ConstantProduct'
import { expect } from '../shared/Expect'

const { solidity } = waffle
chai.use(solidity)

interface Token {
  asset: bigint
  collateral: bigint
}
interface Claims {
  bond: bigint
  insurance: bigint
}
interface StateParams {
  reserves: Token
  totalLiquidity: bigint
  totalClaims: Claims
  totalDebtCreated: bigint
  x: bigint
  y: bigint
  z: bigint
}
interface StateTestParams {
  asset: bigint
  interest: bigint
  cdp: bigint
}

let state: StateParams = {
  reserves: { asset: 10n, collateral: 10n },
  totalLiquidity: 10n,
  totalClaims: { bond: 10n, insurance: 10n },
  totalDebtCreated: 10n,
  x: 100n,
  y: 100n,
  z: 100n,
}

const stateTest: StateTestParams = {
  asset: 100n,
  interest: 100n,
  cdp: 100n,
}

let constantProductTestContract: ConstantProductTest

let assetReserve: bigint = 100n
let interestAdjusted: bigint = 100n
let cdpAdjusted: bigint = 100n

describe('constantProduct', () => {
  before(async () => {
    const constantProductTestContactFactory = await ethers.getContractFactory('ConstantProductTest')
    constantProductTestContract = (await constantProductTestContactFactory.deploy()) as ConstantProductTest
    await constantProductTestContract.deployed()
  })

  it('checkConstantProduct should revert with string Invariance', async () => {
    await expect(
      constantProductTestContract.checkConstantProduct(state, assetReserve, interestAdjusted, cdpAdjusted)
    ).to.be.revertedWith('Invariance')
    expect(ConstantProduct.checkConstantProduct(stateTest, assetReserve, interestAdjusted, cdpAdjusted)).to.be.false
  })

  it('checkConstantProduct should return true', async () => {
    state = {
      reserves: { asset: 100n, collateral: 100n },
      totalLiquidity: 10n,
      totalClaims: { bond: 10n, insurance: 10n },
      totalDebtCreated: 10n,
      x: 20n,
      y: 10n,
      z: 1n,
    }
    assetReserve = 30n
    interestAdjusted = 20n
    cdpAdjusted = 5n
    const constantProductTestContactFactory = await ethers.getContractFactory('ConstantProductTest')
    constantProductTestContract = (await constantProductTestContactFactory.deploy()) as ConstantProductTest
    await constantProductTestContract.deployed()
    expect(await constantProductTestContract.checkConstantProduct(state, assetReserve, interestAdjusted, cdpAdjusted))
      .to.be.true
    // expect(ConstantProduct.checkConstantProduct(stateTest, assetReserve, interestAdjusted, cdpAdjusted)).to.be.true
  })
})
