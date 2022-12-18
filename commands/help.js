const { prefix } = require(`../settings/config.json`);

const helpM = `\`\`\`ini
[${prefix}ping] - Replies with the latency of the bot
[${prefix}kill] - Kills the bot process
[${prefix}uinfo] - Replies with information about you
[${prefix}sinfo] - Replies with information about the guild
[${prefix}help] - Replies with this message
[${prefix}ghost <mention>] - Ghost pings the mentioned user
[${prefix}flip] - Flips a coin, heads or tails
[${prefix}sserv start <message>] - Spams all channels of the guild with the given message
[${prefix}sserv stop] - Stops the spam
\`\`\``;

module.exports = {
	name: 'help',
	description: 'Replies with the help message',
	execute(message) {
		message.reply(helpM);
	},
};
