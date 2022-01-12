require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/7AMpTyn9PLWUDxZvEBI-xjUcaiSqxXCE',
            accounts: ['f96612726fc90705cf626cf68b43826216def95570d8a9bf8e91b0ac4fe1376a'],
        },
    },
};