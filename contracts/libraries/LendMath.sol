// SPDX-License-Identifier: MIT
pragma solidity =0.8.1;

import {IPair} from '../interfaces/IPair.sol';
import {FullMath} from './FullMath.sol';
import {ConstantProduct} from './ConstantProduct.sol';
import {SafeCast} from './SafeCast.sol';

library LendMath {
    using FullMath for uint256;
    using ConstantProduct for IPair.State;
    using SafeCast for uint256;

    function check(
        IPair.State memory state,
        uint112 xIncrease,
        uint112 yDecrease,
        uint112 zDecrease,
        uint16 fee
    ) internal pure {
        uint128 feeBase = 0x10000 + fee;
        uint112 xReserve = state.x + xIncrease;
        uint128 yAdjusted = adjust(state.y, yDecrease, feeBase);
        uint128 zAdjusted = adjust(state.z, zDecrease, feeBase);
        state.checkConstantProduct(xReserve, yAdjusted, zAdjusted);

        uint256 minimum = state.y;
        minimum <<= 16;
        minimum *= xIncrease;
        uint256 denominator = state.x;
        denominator += xIncrease;
        denominator *= feeBase;
        denominator <<= 4;
        minimum /= denominator;
        require(yDecrease >= minimum, 'Invalid');
    }

    function adjust(
        uint112 reserve,
        uint112 decrease,
        uint128 feeBase
    ) private pure returns (uint128 adjusted) {
        adjusted = reserve;
        adjusted <<= 16;
        adjusted -= feeBase * decrease;
    }

    function getBond(
        uint256 maturity,
        uint112 xIncrease,
        uint112 yDecrease
    ) internal view returns (uint128 bondOut) {
        uint256 _bondOut = maturity;
        _bondOut -= block.timestamp;
        _bondOut *= yDecrease;
        _bondOut >>= 32;
        _bondOut += xIncrease;
        bondOut = _bondOut.toUint128();
    }

    function getInsurance(
        uint256 maturity,
        IPair.State memory state,
        uint112 xIncrease,
        uint112 zDecrease
    ) internal view returns (uint128 insuranceOut) {
        uint256 _insuranceOut = maturity;
        _insuranceOut -= block.timestamp;
        _insuranceOut *= state.y;
        _insuranceOut += uint256(state.x) << 32;
        uint256 denominator = state.x;
        denominator += xIncrease;
        denominator *= uint256(state.x);
        denominator <<= 32;
        _insuranceOut = _insuranceOut.mulDiv(uint256(xIncrease) * state.z, denominator);
        _insuranceOut += zDecrease;
        insuranceOut = _insuranceOut.toUint128();
    }
}
