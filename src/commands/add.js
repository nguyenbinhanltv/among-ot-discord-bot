const Command = require('../Command');

module.exports = class Add extends Command {
  constructor() {
    super({
      name: 'add',
      aliases: ['invite'],
      description: 'Shows the bot\'s invite link'
    });
  }

  run({
    message
  }) {
    message.channel.send('**Click this link to add Among-ot to your server:**https://discord.com/api/oauth2/authorize?client_id=760398762571989002&permissions=12861440&redirect_uri=among-ot.codes%2Fadd&scope=bot\n');
  }
}