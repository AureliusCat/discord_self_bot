module.exports = {
	name: 'kill',
	description: 'Kills the node process',
	execute(message) {
        message.reply(`Clean exit`);
		process.exit();
	},
};