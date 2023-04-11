import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x24B3c7704709ed1491473F30393FFc93cFB0FC34";
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("Fallout", CONTRACT_ADDRESS, signer);

    await contract.Fal1out();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
