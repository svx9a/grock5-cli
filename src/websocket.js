const WebSocket = require('ws');

class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.socket = null;
    this.messageHandlers = [];
  }

  connect() {
    this.socket = new WebSocket(this.url);

    this.socket.on('open', () => {
      console.log('⚡ WebSocket connected to quantum realm!');
    });

    this.socket.on('message', (data) => {
      console.log('🌌 Quantum data received:', data.toString());
      this.messageHandlers.forEach(handler => handler(data.toString()));
    });

    this.socket.on('close', () => {
      console.log('🔌 WebSocket connection closed');
    });

    this.socket.on('error', (error) => {
      console.error('❌ WebSocket error:', error.message);
    });
  }

  send(message) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.log('⚠️ WebSocket not connected. Connecting now...');
      this.connect();
      setTimeout(() => {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
          this.socket.send(message);
        }
      }, 1000);
    }
  }

  onMessage(handler) {
    this.messageHandlers.push(handler);
  }

  close() {
    if (this.socket) {
      this.socket.close();
    }
  }
}

module.exports = { WebSocketClient };
