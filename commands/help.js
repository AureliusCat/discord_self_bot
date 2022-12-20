const { prefix } = require(`../settings/config.json`);

module.exports = {
	name: 'help',
	aliases: ['commands'],
	usage: '<command name>',
	description: 'Replies with the help message',
	execute(message, args) {

		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('List of commands:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nYou can send \`${prefix}help <command name>\` to get info on a specific command.`);
		
			return message.reply(data.join(` `), { split: true })
		} 

		else {
		
			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

			if (!command) {
				return message.reply('Invalid command.');
			}

			data.push(`**Name:** ${command.name}`);

			if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
			if (command.description) data.push(`**Description:** ${command.description}`);
			if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

			message.reply(data.join(`\n`), { split: true });
		}
	},
};
