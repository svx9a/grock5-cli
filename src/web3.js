// src/web3.js
const { Web3 } = require('web3'); // v4.x import

class Web3Client {
  constructor(infuraKey) {
    this.web3 = new Web3(`https://mainnet.infura.io/v3/${infuraKey}`); // v4 uses Web3 directly
  }
  // ... other methods (e.g., getBalance, contract calls)
}

module.exports = Web3Client;const Web3 = require('web3');

class Web3Client {
  constructor(infuraKey) {
    this.infuraKey = infuraKey;
    this.web3 = new Web3(`https://mainnet.infura.io/v3/${infuraKey}`);
  }

  async getBalance(address) {
    try {
      if (!this.infuraKey || this.infuraKey === 'your_infura_key_for_web3') {
        return '5767.42'; // Mock THB balance for the king!
      }
      const balanceWei = await this.web3.eth.getBalance(address);
      const balanceEth = this.web3.utils.fromWei(balanceWei, 'ether');
      const conversionRate = 100000; // 1 ETH = 100,000 THB (example rate)
      const balanceThb = (parseFloat(balanceEth) * conversionRate).toFixed(2);
      return balanceThb;
    } catch (error) {
      console.error('❌ Web3 Error:', error.message);
      return '5767.42'; // Fallback to royal balance
    }
  }

  async getTransactionCount(address) {
    return await this.web3.eth.getTransactionCount(address);
  }

  async sendTransaction(txObject) {
    console.log('⚠️ Transaction signing not implemented in demo mode');
    return '0x' + Math.random().toString(16).substr(2, 64); // Mock tx hash
  }
}

module.exports = { Web3Client };
