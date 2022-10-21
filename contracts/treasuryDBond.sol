// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@debond-protocol/debond-bank-contracts/BankBondManager.sol";

contract treasuryDBond is BankBondManager,Ownable {
    uint256 version = 0;

    constructor (
    address _executableAddress,
    address _debondBondAddress,
    address _bankAddress,    
    address _bankDataAddress,
    address _oracleAddress,  
    address _USDCAddress
    ) BankBondManager
    (

    _executableAddress,
    _debondBondAddress,
    _bankAddress,    
    _bankDataAddress,
    _oracleAddress,  
    _USDCAddress

    )
    
    {
        executableAddress   = _executableAddress;
        debondBondAddress   = _debondBondAddress;
        bankAddress         = _bankAddress;
        bankStorageAddress  = _bankDataAddress;
        oracleAddress       = _oracleAddress;
        
    }
    
 //address executableAddress;
       

   
    // address buyerAddr = 23432323;
    // address rndTokenAddr = 343234;
    // uint256 bondPeriod = 30;

    // function issueBondFactory( uint256[] memory _classIds , uint256[] memory _amounts) external onlyBank{
    //     //Types.InterestRateType.FixedRate

    //     //TEST method
    //     BankBondManager.createClass(1, "RND",  rndTokenAddr, 0, bondPeriod );
    //     BankBondManager.createClass(2, "LOWRISKCRYPTO",  rndTokenAddr, 0, bondPeriod );
    //     BankBondManager.createClass(3, "MEDIUMRISKCRYPTO",  rndTokenAddr, 0 , bondPeriod );
    //     BankBondManager.createClass(4, "HIGHRISKCRYPTO",  rndTokenAddr, 1 ,bondPeriod );

    //     //use default class ids available in debond
    //     uint256[] memory _classIds = [ 3, 4, 5];
        
    //     uint256[] memory _amounts= [10, 5, 2] ; //DAI, DGOV, WETH;


    //     BankBondManager.issueBonds(
    //         buyerAddr,
    //         _classIds,
    //         _amounts
    //     );

    // }
    //Step1: create symbol, tokenaddr, 
    //Step2: Bond class creation createClass(1, "RND",  rndTokenAddr, 0, bondPeriod );
        //mapClassValuesFrom
        //mapNonceValuesFrom(        uint256 _issuanceDate,        uint256 _maturityDate)

    function getVersion() external returns (uint256)
    {
        return version;
    }
}