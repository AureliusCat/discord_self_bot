module.exports = {
	name: 'ping',
	description: 'Replies with pong',
	execute(message) {
		message.reply(`Latency is ${Date.now() - message.createdTimestamp}ms`);
	},
};