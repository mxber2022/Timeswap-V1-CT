import chai from 'chai'
import { ethers, waffle } from 'hardhat'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { SafeBalanceTest } from '../../typechain/SafeBalanceTest'
import { IERC20 } from '../../typechain/IERC20'
import { testTokenNew } from '../shared/TestToken'

let signers: SignerWithAddress[]

const { solidity } = waffle
chai.use(solidity)
const { expect } = chai

describe('Checking SafeBalance', () => {
  let token: IERC20
  let safeBalTestContract: SafeBalanceTest
  let tokenMinted = 1000n // randomNumbers
  let tokenTransfer = 600n // randomNumber; but should be less than the tokens minted

  before(async () => {
    signers = await ethers.getSigners()

  })

  beforeEach(async () => {
    token = await testTokenNew('Ether', 'WETH', tokenMinted)
    const SafeBalanceTestContactFactory = await ethers.getContractFactory('SafeBalanceTest');
    safeBalTestContract = (await SafeBalanceTestContactFactory.deploy()) as SafeBalanceTest
    await safeBalTestContract.deployed()
    token.transfer(safeBalTestContract.address, tokenTransfer)
  })

  
  it('Should return the balance transferred', async () => {
    let safeBalance = await safeBalTestContract.safeBalance(token.address);
    expect(safeBalance).to.be.equal(tokenTransfer)
  })
  it('Should revert', async () => {
    await expect(token.transfer(safeBalTestContract.address, tokenTransfer)).to.be.revertedWith("ERC20: transfer amount exceeds balance");
  })
})
