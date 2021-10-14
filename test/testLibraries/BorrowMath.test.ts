import { BigNumberish } from '@ethersproject/bignumber'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import chai from 'chai'
import { ethers, waffle } from 'hardhat'
import { BorrowMathTest } from '../../typechain/BorrowMathTest'
import BorrowMath from '../libraries/BorrowMath'
import { expect } from '../shared/Expect'
import { now } from '../shared/Helper'

let signers: SignerWithAddress[]

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

const state: StateParams = {
  reserves: { asset: 0n, collateral: 0n },
  totalLiquidity: 0n,
  totalClaims: { bond: 0n, insurance: 0n },
  totalDebtCreated: 0n,
  x: 5000n,
  y: 10000n,
  z: 10000n,
}

const stateTest: StateTestParams = {
  asset: 5000n,
  interest: 10000n,
  cdp: 10000n,
}

let borrowMathTestContract: BorrowMathTest
let maturity: BigNumberish;

const assetOut: bigint = 10n
const interestIncrease: bigint = 30n
const cdpIncrease: bigint = 50n
const fee: bigint = 2n

describe('BorrowMath', () => {

  before(async () => {
    signers = await ethers.getSigners()
    maturity = await now() + 10000n;
    const BorrowMathTestContactFactory = await ethers.getContractFactory('BorrowMathTest')
    borrowMathTestContract = (await BorrowMathTestContactFactory.deploy()) as BorrowMathTest
    await borrowMathTestContract.deployed()
  })

  it('Check should return true', async () => {
    const returnValue1 = await borrowMathTestContract.check(state, assetOut, interestIncrease, cdpIncrease, fee)
    let returnValue2 = await BorrowMath.check(stateTest, assetOut, interestIncrease, cdpIncrease, fee);
    expect(returnValue1).to.be.true;
    expect(returnValue2).to.be.true;
    expect(returnValue1).to.equal(returnValue2);
  })

  it('GetBond should return the expected bondOut', async () => {
    const returnValue1 = await borrowMathTestContract.getDebt(maturity, assetOut, interestIncrease);
    let returnValue2 = await BorrowMath.getDebt(BigInt(maturity.toString()), assetOut, interestIncrease, (await now()));
    expect(returnValue1).to.be.equalBigInt(returnValue2);
  })

  it('GetInsurance should return the expected InsuranceOut', async () => {
    const returnValue1 = await borrowMathTestContract.getCollateral(maturity, state, assetOut, interestIncrease);
    let returnValue2 = await BorrowMath.getCollateral(BigInt(maturity.toString()), stateTest, assetOut, interestIncrease, (await now()));
    expect(returnValue1).to.be.equalBigInt(returnValue2);
  })

  it('Check should be reverted', async () => {
    const interestIncrease: bigint = 1n
    maturity = await now() + 10000n;
    const BorrowMathTestContactFactory = await ethers.getContractFactory('BorrowMathTest')
    borrowMathTestContract = (await BorrowMathTestContactFactory.deploy()) as BorrowMathTest
    await borrowMathTestContract.deployed()
    expect(await BorrowMath.check(stateTest, assetOut, interestIncrease, cdpIncrease, fee)).to.be.equal("interestIncrease < minimum");
    await expect(borrowMathTestContract.check(state, assetOut, interestIncrease, cdpIncrease, fee)).to.be.revertedWith("Minimum");
    
  })

})
