module.exports = {
	name: 'userinfo',
	description: 'Replies with information about a user',
	async execute(message, args, client) {

		const a = message.author;

        const info = `\`\`\`ini
[Username] - ${a.tag}
[ID] - ${a.id}
[Time Created] - ${a.createdAt}
[Connected Accounts] - ${a.connectedAccounts.map(account => account.type)}
[Biography] - ${a.bio}
[Nitro Type] - ${a.nitroType}
[NSFW Allowed?] - ${a.nsfwAllowed}
[Bot?] - ${a.bot}
[System Account?] - ${a.system}
\`\`\``;

		message.reply(info);
	},
};