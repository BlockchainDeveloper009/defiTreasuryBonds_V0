const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  

  describe("bASIC", function () {
    
    async function deployDataFixture() {

       
        
//let _debondBondAddress = otherAccount[1];
        // Contracts are deployed using the first signer/account by default
        const [owner,_addr2,_addr3,_addr4,_addr5] = await ethers.getSigners();
        let _executableAddress = owner.address;
        let _debondBondAddress = _addr2.address;
        let _bankAddress =_addr3.address;
        let _bankDataAddress=_addr4.address;
        let _oracleAddress=_addr5.address;
        let _USDCAddress="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

        let wrapped_eth_address ="0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
        console.log(`loadfixture start`);
        console.log(`_executableAddress =${_executableAddress}`);
        console.log(`_debondBondAddress =${_debondBondAddress}`);
        console.log(`loadfixture ends-----------`);
        const DebondMath = await ethers.getContractFactory("DebondMath");
        const debondMath = await DebondMath.deploy();

        const Lock = await ethers.getContractFactory("treasuryDBond", 
        {libraries: {"DebondMath":""}});
        const lock = await Lock.deploy(
            _executableAddress,
            _debondBondAddress,
            _bankAddress
           
            ); /* _bankDataAddress,
            _oracleAddress,
            _USDCAddress*/
        
        return { lock, _executableAddress, _debondBondAddress, _bankAddress, _bankDataAddress , _oracleAddress ,  _USDCAddress};
    }
    describe("GETVERSION", function () {
        it("gets Version", async function () {
          
            const { lock } = await loadFixture(deployDataFixture);
          console.log("------------------");
        //  console.log(t);
        
        
          //lock.in
          //const {_tokenAddress, ir, _periodTimestamp}  = await lock.classValues(1);
          console.log("========================================================");
         // const { _Version }  = await t.getVersion();
         let _Version  = await lock.getVersion();
        console.log(_Version)
         const ownerBalance = 0;
         expect(await lock.getVersion()).to.equal(ownerBalance);
          
         
          //expect(await lock.unlockTime()).to.equal(unlockTime);
        });


       
    });

    describe("CREATE", function () {
        it("Should set the right classid Details", async function () {
          
          const { lock} = await loadFixture(deployDataFixture);
          console.log("------------------");
         // console.log(t);
        //      console.log(`lock =${lock}`);
        //   console.log(`_executableAddress =${_executableAddress}`);
        //   console.log(`_debondBondAddress =${_debondBondAddress}`);
        //   console.log(`_bankAddress =${_bankAddress}`);
        //   console.log(`_bankDataAddress =${_bankDataAddress}`);
        //   console.log(`_oracleAddress =${_oracleAddress}`);
        //   console.log(`_USDCAddress =${_USDCAddress}`);
          //lock.in
          //const {_tokenAddress, ir, _periodTimestamp}  = await lock.classValues(1);
          console.log("========================================================");
          const {_tokenAddress, ir, _periodTimestamp}  = await lock.classValues(1);
          console.log(`_tokenAddress= ${_tokenAddress}`)
          console.log(`ir= ${ir}`)
          console.log(`_periodTimestamp= ${_periodTimestamp}`)
          //expect(await lock.unlockTime()).to.equal(unlockTime);
          
          const transactionResponse  = await lock.classValues(1);
          const transactionReceipt  = await transactionResponse.wait(1);
          const { gasUsed, effectiveGasPrice } = transactionReceipt
          const gasCost = gasUsed.mul(effectiveGasPrice);

          console.log(gasCost);



        });


       
    });

    describe("nonceValues", function () {
        it("Should set the right nonceValues Details", async function () {
            const { lock, _executableAddress, _debondBondAddress, _bankAddress, _bankDataAddress , _oracleAddress ,  _USDCAddress } = await loadFixture(deployDataFixture);
            
            
            //lock.in
            //const} {_tokenAddress, ir, _periodTimestamp}  = await lock.classValues(1);
            var t  = await lock.nonceValues(1 , 1);
            console.log(`_issuanceDate= ${t}`)
            
           // console.log(`_maturityDate= ${_maturityDate}`)  
            //expect(await lock.unlockTime()).to.equal(unlockTime);
          });

    
    

       
    });

   


  });


  /*
https://ethereum.stackexchange.com/questions/123519/how-to-get-more-than-20-signers-with-ethers-js-hardhat-waffles
   for( let i=0; i < nb; i++){
                // Get a new wallet
                wallet = ethers.Wallet.createRandom();
                // add the provider from Hardhat
                wallet =  wallet.connect(ethers.provider);
                // send ETH to the new wallet so it can perform a tx
                await addr1.sendTransaction({to: wallet.address, value: ethers.utils.parseEther("1")});
                
                await ctx.connect(wallet).CallYouContract())
            }
            
            https://ethereum.stackexchange.com/questions/112772/how-to-pass-constructor-argument-with-hardhat
            
            */

            /*
 _executableAddress: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  _debondBondAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  _bankAddress: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
  _bankDataAddress: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
  _oracleAddress: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
  _USDCAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'

            */