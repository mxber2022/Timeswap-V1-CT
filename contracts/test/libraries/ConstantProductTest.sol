// SPDX-License-Identifier: MIT
pragma solidity =0.8.1;

import {ConstantProduct} from '../../libraries/ConstantProduct.sol';
import {IPair} from '../../interfaces/IPair.sol';

contract ConstantProductTest {
    using ConstantProduct for IPair.State;

    function checkConstantProduct(
        IPair.State memory state,
        uint112 xReserve,
        uint128 yAdjusted,
        uint128 zAdjusted
    ) external pure {
        state.checkConstantProduct(
            xReserve,
            yAdjusted,
            zAdjusted
        );
    }
}