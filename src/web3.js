const Web3 = require('web3');

const web3 = new Web3('https://mainnet.infura.io/v3/b069ae197c98434797d0cd4591b468b4');

async function mintGlyph({ name, symbol }) {
    console.log(`ξ Minting Glyph: ${JSON.stringify({ name, symbol })}`);
    const tokenId = Math.floor(Date.now() / 1000);
    const owner = '0xSV9_KRIS';
    return { tokenId, owner };
}

module.exports = { mintGlyph };