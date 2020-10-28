const IDiscord = require('./src/index.js');
const Discord = require('discord.js')

const client = new IDiscord.Client()

client.on('ready', () => {
  console.log('ready');
});

client.on('message', (message) => {
  console.log(client.channels)
});

client.login(process.env.discordtoken, () => {});