const { prefix } = require(`../config.json`);

const helpMessage = `\`\`\`ini
[${prefix}ping] - Replies with the latency of the bot
[${prefix}kill] - Kills the bot process
[${prefix}userinfo] - Replies with information about the mentioned user
[${prefix}servinfo -m] - Replies with information about the guild, -m is members
[${prefix}help] - Replies with this message
[${prefix}ghost <mention>] - Ghost pings the mentioned user
[${prefix}coinflip] - Flips a coin, heads or tails
[${prefix}dmspam] - Spams the DMs of all members of the guild with the given message
[${prefix}spamserver] - Spams all channels of the guild with the given message
\`\`\``;

module.exports = {
	name: 'help',
	description: 'Replies with the help message',
	execute(message) {
		message.reply(helpMessage);
	},
};
