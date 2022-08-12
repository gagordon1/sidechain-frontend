# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

To set up test network locally:
cd to sidechain backend and run python3 app.py
in this directory, run "npm run serve" - this starts a local ETH network
run "node src/deployTestNetwork.js" - this deploys some contracts to populate the new blockchain

run "npm start" to start the frontend server
