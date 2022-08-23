require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { RINKEBY_API_URL, GOERLI_API_URL } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "rinkeby",
  networks : {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: RINKEBY_API_URL
    },
    goerli : {
      url : GOERLI_API_URL
    }
  }

};
