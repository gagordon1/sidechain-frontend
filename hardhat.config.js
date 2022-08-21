require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { API_URL } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         url: API_URL
      }
   }
};
