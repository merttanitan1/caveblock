//SPDX-License-Identifier: Unlicensed

pragma solidity 0.8.24;

contract Bank{

    address owner;
    uint256 minDep = 0.01 ether;
    
    mapping(address => uint256) balances;

    constructor(){
        owner = msg.sender;
    }
    modifier _onlyOwner{
        require(msg.sender == owner, "You are not Owner.");
        _;
    }

    function deposit() external payable{
        require(msg.value >= minDep, "Minimum deposit amount is 0.01 ether");
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 _amount) external {
        require(_amount <= balances[msg.sender], "Insufficient funds.");
        balances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
    }

    function transfer(address payable _to, uint256 _amount) external{
        require(_amount <= balances[msg.sender], "Insufficient funds.");
        _to.transfer(_amount);
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    function getBalance() external view returns(uint256){
        return balances[msg.sender];
    }
}