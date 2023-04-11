import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x94099942864EA81cCF197E9D71ac53310b1468D8";
const PLAYER_ADDRESS = "0x976EA74026E726554dB657fA54763abd0C3a0aa9";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("Token", CONTRACT_ADDRESS, signer);

    await contract.transfer(ethers.Wallet.createRandom().address, 21);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
