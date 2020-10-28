Permissions = require('./Permissions.js');
Discord = require('discord.js');

class Role extends Discord.Role {
  _patch(data) {
    super._patch(data);

    this.permissions = new Permissions(data.permissions);
  }
}

module.exports = Role;