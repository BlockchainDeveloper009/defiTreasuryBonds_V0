const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");

  const polygonMumbai_ETHUSD = "0x0715A7794a1dc8e42615F059dD6e406A6594651A";
  const polygonMainnet_ETHUSD = "0xf9680d99d6c9589e2a93a78a04a279e509205945";
  const GOERLITESTNET_ETHUSD_ADDR = "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e";
  
  describe("PriceDataFeed", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployOneYearLockFixture() {
      const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
      const ONE_GWEI = 1_000_000_000;
  
      const lockedAmount = ONE_GWEI;
      const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;
  
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await ethers.getSigners();
  
      const Lock = await ethers.getContractFactory("PriceDataFeed");
      const lock = await Lock.deploy();
  
      return { lock, unlockTime, lockedAmount, owner, otherAccount };
    }
  
    // describe("Deployment_PriceDataFeed", function () {
    //   it("Should set the right unlockTime", async function () {
    //     const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);
  
    //     expect(await lock.unlockTime()).to.equal(unlockTime);
    //   });
  
    //   it("Should set the right owner", async function () {
    //     const { lock, owner } = await loadFixture(deployOneYearLockFixture);
  
    //     expect(await lock.owner()).to.equal(owner.address);
    //   });
  
    //   it("Should receive and store the funds to lock", async function () {
    //     const { lock, lockedAmount } = await loadFixture(
    //       deployOneYearLockFixture
    //     );
  
    //     expect(await ethers.provider.getBalance(lock.address)).to.equal(
    //       lockedAmount
    //     );
    //   });
  
    //   it("Should fail if the unlockTime is not in the future", async function () {
    //     // We don't use the fixture here because we want a different deployment
    //     const latestTime = await time.latest();
    //     const Lock = await ethers.getContractFactory("Lock");
    //     await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
    //       "Unlock time should be in the future"
    //     );
    //   });
    // });
  
    describe("GetData", function () {
      describe("Validations", function () {

        it("test1", async function () {
            const { lock } = await loadFixture(deployOneYearLockFixture);
            
            const {actual} = await lock.getVersion('0x0715A7794a1dc8e42615F059dD6e406A6594651A');
            console.log('-----');
            console.log(v);
            console.log('-----');
            await expect(actual).to.be.revertedWith(
              "Matched with Version 4"
            );
          });

        it("Should revert with the right error if called too soon", async function () {
          const { lock } = await loadFixture(deployOneYearLockFixture);
  
        //   await expect(lock.withdraw()).to.be.revertedWith(
        //     "You can't withdraw yet"
        //   );
        });
  
        it("Should revert with the right error if called from another account", async function () {
          const { lock, unlockTime, otherAccount } = await loadFixture(
            deployOneYearLockFixture
          );
  
          // We can increase the time in Hardhat Network
          await time.increaseTo(unlockTime);
  
          // We use lock.connect() to send a transaction from another account
        //   await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
        //     "You aren't the owner"
        //   );
        });
  
        it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
          const { lock, unlockTime } = await loadFixture(
            deployOneYearLockFixture
          );
  
          // Transactions are sent using the first signer by default
        //   await time.increaseTo(unlockTime);
  
        //   await expect(lock.withdraw()).not.to.be.reverted;
        });
      });
  
      describe("Events", function () {
        it("Should emit an event on withdrawals", async function () {
          const { lock, unlockTime, lockedAmount } = await loadFixture(
            deployOneYearLockFixture
          );
  
        //   await time.increaseTo(unlockTime);
  
        //   await expect(lock.withdraw())
        //     .to.emit(lock, "Withdrawal")
        //     .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
        });
      });
  
      describe("Transfers", function () {
        it("Should transfer the funds to the owner", async function () {
          const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
            deployOneYearLockFixture
          );
  
          await time.increaseTo(unlockTime);
  
        //   await expect(lock.withdraw()).to.changeEtherBalances(
        //     [owner, lock],
        //     [lockedAmount, -lockedAmount]
        //   );
        });
      });
    });
  });
  