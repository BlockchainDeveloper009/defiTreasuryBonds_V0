const { task } = require("hardhat/config")

task("block-number", "Print numbrs").setAction(
    async(taskArgs, hre) => {
        hre.ethers.provider.getBlockNumber()

        console.log

    }
)

async function verify(contractAddress, args) {
    console.log("verifying contract...");
    try {
        await run("verify:verify",{
            address: contractAddress,
        constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        } else {
            console.log(e)
        }
    }
}

const verify = async (contractAddress, args) => {
    console.log("verifying contract...");
    try {
        await run("verify:verify",{
            address: contractAddress,
        constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        } else {
            console.log(e)
        }
    }
}