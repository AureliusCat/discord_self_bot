module.exports = {
	name: 'ping',
	aliases: ['latency'],
	usage: null,
	description: 'Replies with pong',
	execute(message) {
		message.reply(`Latency is ${Date.now() - message.createdTimestamp}ms`);
	},
};