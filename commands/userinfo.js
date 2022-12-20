module.exports = {
	name: 'uinfo',
	aliases: ['ui', 'userinfo', 'mi', 'minfo', 'myinfo'],
	usage: null,
	description: 'Replies with information about a user',
	execute(message) {

		const a = message.author;
		const data = [];

		data.push(`**Username:** ${a.tag}`);
		data.push(`**ID:** ${a.id}`);
		data.push(`**Time Created:** ${a.createdAt}`);
		data.push(`**Connected Accounts:** ${a.connectedAccounts.map(account => account.type).join(', ')}`);
		data.push(`**Bio:** ${a.bio}`);
		data.push(`**Nitro Type:** ${a.nitroType}`);
		data.push(`**NSFW Allowed?:** ${a.nsfwAllowed}`);
		data.push(`**Bot?:** ${a.bot}`);
		data.push(`**System Account?:** ${a.system}`);

		message.reply(data.join('\n'));
	},
};