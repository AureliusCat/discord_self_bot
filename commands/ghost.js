module.exports = {
	name: 'ghost',
	aliases: ['gp', 'ghostping'],
	usage: '<message>',
	description: 'Pings the mentioned user in every channel that the command was sent in, and instantly deletes the pings',
	execute(message, args, client) {

		const channelIds = message.guild.channels.cache.filter(channel => channel.type == 'GUILD_TEXT').map(channel => channel.id);
  		
		message.delete();

		channelIds.forEach(id => {
			client.channels.cache.get(id).send(args[0]).then(msg => {
				client.channels.cache.get(id).messages.fetch(msg.id).then(message => message.delete());
			});
		});

	},
};