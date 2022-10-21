// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./libraries/PriceDataFeed.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FundMe {
    address[] private s_funders;
    uint256 private constant MINIMUM_USD =50 * 1e18;
    mapping(address => uint256) public S_addressToAmoundFunded;
    address private immutable i_owner;
    AggregatorV3Interface private s_priceFeed;

    constructor(){
        i_owner = msg.sender;    
    }
    mapping(address => uint256) public s_addressToAmountFunded;

    modifier onlyOwner(){
        //
        // if(msg.sender!= i_owner) revert FundMe_NotOwner();
        _;
    }

    function fund() public payable{
        // require(msg.value.getConverstionRate() >= minimumUsd, "Less than bond balance");
        // funders.push(msg.sender);
        // addressToAmountFunded[msg.sender] = msg.value;

    }
    uint256 public result;
    receive() external payable{
        result=1;
    }
    fallback() external payable{
        result=2;
        //console
    }

    function cheaperWithdraw() public payable onlyOwner {
        address[] memory funders = s_funders;
        //mapping can't be in memory, sorry!
        for(uint256 funderIndex=0; 
        funderIndex<=funders.length;
        funderIndex++
        ) {
            address funder = funders[funderIndex];
            s_addressToAmountFunded[funder]=0;

        }
        s_funders = new address[](0);
        (bool success, )= i_owner.call{value: address(this).balance}("");
        require(success);

    }

    function getOwner() public view returns (address){
        return i_owner;
    }

    function getFunder(uint256 index) public view returns (address){
        return s_funders[index];
    }
     function getAddressToAmountFundex(address funder) public view returns (uint256){
        return 0;//s_funders(index);
    }
     function getPriceFeed(uint256 index) public view returns (AggregatorV3Interface){
        return s_priceFeed;
    }
    function getVersion(address tr) public view returns(uint256){
        AggregatorV3Interface _priceFeed = AggregatorV3Interface(tr);
        

        return _priceFeed.version();
    }
    function getContractVersion() public view returns(uint256){
        return 0;
    }

}