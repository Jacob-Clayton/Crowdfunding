import { ethers } from "hardhat";

async function main() {

  const CrowdFunding = await ethers.getContractFactory("CrowdFunding");
  const crowdfunding = await CrowdFunding.deploy();

  await CrowdFunding.deployed();

  console.log(
    `Crowdfunding deployed to ${crowdfunding.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
