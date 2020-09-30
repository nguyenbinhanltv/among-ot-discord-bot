const Command = require('../Command');
const {
  MessageEmbed
} = require('discord.js');


module.exports = class Commands extends Command {
  constructor() {
    super({
      name: 'help',
      aliases: ['h'],
      description: 'Lists all of the bot\'s commands'
    });
  }

  run({
    message,
    commands,
    prefix,
    client,
    emojis
  }) {
    message.channel.send(
      new MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor(0x7289DA)
      .setDescription([
        commands.filter(c => !c.hidden).map(c => {
          return `**\`${prefix}${c.name}${c.usage ? ` ${c.usage}` : ''}\`** - ${c.description} ${c.new ? emojis.get('new') || '' : ''}`;
        }).join('\n'),
        '',
        '[**Add Among-ot to your server**](https://discord.com/api/oauth2/authorize?client_id=760398762571989002&permissions=12861440&redirect_uri=among-ot.codes%2Fadd&scope=bot)',
        [
          '[GitHub](https://github.com/nguyenbinhanltv/among-ot-discord-bot)',
          `**${client.guilds.cache.size.toLocaleString()} servers**`,
          `Shard ${message.guild.shardID}`
        ].join(' | '),
      ])
    );
  }
}