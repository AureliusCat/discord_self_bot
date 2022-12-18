module.exports = {
	name: 'kill',
	aliases: ['stop', 'end'],
	usage: null,
	description: 'Kills the node process',
	execute() {
		process.exit();
	},
};