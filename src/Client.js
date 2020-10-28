Discord = require('discord.js');
const ChannelManager = require('./ChannelManager.js');

class Client extends Discord.Client {
  constructor(data) {
    super(data);

    this.channels = null;
    this.channels = new ChannelManager(this);
  }
};

module.exports = Client