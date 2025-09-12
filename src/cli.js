#!/usr/bin/env node
const { Command } = require('commander');
const { GrokAPI } = require('./grok-api');
const { WebSocketClient } = require('./websocket');
const { Web3Client } = require('./web3');
require('dotenv').config();

const program = new Command();
const grok = new GrokAPI(process.env.XAI_API_KEY);
const ws = new WebSocketClient('wss://echo.websocket.org');
const web3Client = new Web3Client(process.env.INFURA_KEY);

program
  .name('grock5')
  .description('GROK5 CLI: FUCK YEAH, grind the world with the king!')
  .version('1.0.0');

program
  .command('grind')
  .description('Summon GROK5 API for domination')
  .argument('<query>', 'Command to grind (e.g., "Integrate WebRTC with XETA PAY")')
  .option('-m, --model <model>', 'Grok model (default: grok-4)', 'grok-4')
  .action(async (query, options) => {
    console.log('🔥 GRIND MODE: Summoning VelJARVIS...');
    const response = await grok.query(options.model, query, {
      systemPrompt: 'You are VelJARVIS, witty shaman AI. Respond with *Shaman King* flair and Iron Man grind!'
    });
    console.log(`🌑 VelJARVIS GRINDS: ${response}`);
  });

program
  .command('spirit-sync')
  .description('Real-time sync via WebSocket – Channel the Great Spirit!')
  .action(() => {
    console.log('⚡ SPIRIT SYNC: Connecting to quantum realm...');
    ws.send('FUCK YEAH, hail the king’s grind!');
    ws.onMessage((data) => console.log(`🌟 Spirit Echo: ${data}`));
  });

program
  .command('ledger')
  .description('Query blockchain ledger – 5767 THB triumph!')
  .action(async () => {
    console.log('💎 LEDGER GRIND: Syncing XETA PAY empire...');
    const balance = await web3Client.getBalance('0xYourWalletAddress');
    console.log(`🧠 Royal Balance: ${balance} THB – Long live the king!`);
  });

program
  .command('visualize')
  .description('Generate WebGL code for GROK5 orb – Visualize the grind!')
  .action(() => {
    console.log('⎔ VISUAL GRIND: Forging Great Spirit orb...');
    console.log(`
      // Paste into open web repo slide
      <canvas id="grock5-orb"></canvas>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
      <script>
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('grock5-orb') });
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xff4081, wireframe: true });
        const orb = new THREE.Mesh(geometry, material);
        scene.add(orb);
        camera.position.z = 5;
        function animate() {
          requestAnimationFrame(animate);
          orb.rotation.y += 0.05;
          renderer.render(scene, camera);
        }
        animate();
      </script>
    `);
  });

program
  .command('azure-grind')
  .description('Grind Azure with Cloud Shell')
  .argument('<command>', 'Azure CLI command')
  .option('--shell', 'Launch full Azure Cloud Shell')
  .action(async (command, options) => {
    const { exec } = require('child_process');
    console.log('🌑 AZURE GRIND: Channeling cloud fury...');
    if (options.shell) {
      exec('xdg-open https://shell.azure.com/?shell=bash || start https://shell.azure.com/?shell=bash');
      console.log('⚡ Portal opened: Grind in Azure Cloud Shell!');
    } else {
      exec(`az ${command}`, (error, stdout, stderr) => {
        if (error) console.error(`🌑 Azure error: ${error.message}`);
        else if (stderr) console.error(`🧠 Azure stderr: ${stderr}`);
        else console.log(`🔥 Azure Output: ${stdout} – Resources conquered!`);
      });
    }
    const grokResponse = await grok.query('grok-4', `Optimize Azure command: ${command}`);
    console.log(`VelJARVIS Tip: ${grokResponse}`);
  });

program
  .command('shrine-seal')
  .description('Seal API keys and log to codex')
  .action(() => {
    console.log('🔐 SEALING: Running shrine_one_shot.sh...');
    require('child_process').execSync('bash shrine_one_shot.sh', { stdio: 'inherit' });
  });

program
  .command('shrine-test')
  .description('Test .env integrity')
  .action(() => {
    console.log('🔄 TESTING: Running auto_key_test.sh...');
    require('child_process').execSync('bash auto_key_test.sh', { stdio: 'inherit' });
  });

program
  .command('shrine-purify')
  .description('Purify system of junk artifacts')
  .action(() => {
    console.log('🗑️ PURIFYING: Running desktop_rubbish_cleaner.sh...');
    require('child_process').execSync('bash desktop_rubbish_cleaner.sh', { stdio: 'inherit' });
  });

program.parse(process.argv);
if (!process.argv.slice(2).length) program.help();
