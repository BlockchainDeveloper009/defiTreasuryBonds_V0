// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceDataFeed {
    
    function getVersion(address _addr) public view returns (uint256){
        AggregatorV3Interface _priceFeed = AggregatorV3Interface(_addr);
        return _priceFeed.version();
    }
    function getPrice(address _addr, AggregatorV3Interface _priceFeed) 
        public view returns (uint256){
        
        _priceFeed = AggregatorV3Interface(_addr);
        (uint80 roundId, int price, 
        uint startedAt, 
        uint timeStamp,
        uint256 answeredInRound) = _priceFeed.latestRoundData();
        return uint256(price * 1e10);
    }
    function getConversionRate( uint256 ethAmount, uint256 ethPrice) 
        public view returns (uint256){
        //address tokenAddrByNetwork,
        //uint256 ethPrice = getPrice(tokenAddrByNetwork, );
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
        return ethAmountInUsd;
    }

}