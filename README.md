# Timeswap-V1

[![Lint](https://github.com/Timeswap-Labs/Timeswap-V1-Core/actions/workflows/lint.yaml/badge.svg)](https://github.com/Timeswap-Labs/Timeswap-V1-Core/actions/workflows/lint.yaml)
[![Build](https://github.com/Timeswap-Labs/Timeswap-V1-Core/actions/workflows/build.yaml/badge.svg)](https://github.com/Timeswap-Labs/Timeswap-V1-Core/actions/workflows/build.yaml)

This repository contains the core smart contracts of the Timeswap-V1 protocol.

# Initial Setup

- Ensure npm and node.js is installed, if not install the same
- Run npm i to download the required dependncies
- Create a .env file and set the variables as is in .env.sample

# Steps to build & deploy the factory

## On Rinkeby

- Run `npx hardhat run scripts/deploy.js`

## On Hardhat Network

- Run `npx hardhat node` in one shell
- Run `npx hardhat --network localhost run scripts/deploy.js `

# Steps to run the tests

## On Rinkeby

- Run `npx hardhat test`

## On Hardhat Network

- Run `npx hardhat node` in one shell
- Run `npx hardhat --network localhost test `
