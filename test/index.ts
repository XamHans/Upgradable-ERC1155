import hre from "hardhat";
const { expect } = require("chai");
import { Contract } from "ethers";

before("get facctories", async function () {
  this.NFTManagerContract = await hre.ethers.getContractFactory("NFTManagerV1");
});

let proxy: Contract;
let tokenId;

it("deploy proxy", async function () {
   proxy = await hre.upgrades.deployProxy(this.NFTManagerContract, {
    kind: "uups",
  }
  );

  // assert(await proxy.name() === 'NFTManager' );
});

it("should create an token", async function () {
  const token = await proxy.createToken('http://uri.de',25, 1)
  console.log('TEST', token );
  expect(token.hash).to.be.not.null

})

 // Tests for NFT minting function of EternalNFT contract using tokenID of the minted NFT
 //  FOUND HERE: https://dev.to/abhinavxt/building-an-nft-minting-dapp-using-hardhat-ethersjs-nextjs-and-tailwindcss-lp
 // NEED ADJUSTMENT TO THIS CONTRACT
 it('Should be able to mint NFT', async () => {
  // Mints a NFT
  // let txn = await nft.createEternalNFT()
  // let tx = await txn.wait()

  // tokenID of the minted NFT
  // let event = tx.events[0]
  // let value = event.args[2]
  // tokenId = value.toNumber()

  // assert.equal(tokenId, 0)

  // // Mints another NFT
  // txn = await nft.createEternalNFT()
  // tx = await txn.wait()

  // // tokenID of the minted NFT
  // event = tx.events[0]
  // value = event.args[2]
  // tokenId = value.toNumber()

  // assert.equal(tokenId, 1)
})
