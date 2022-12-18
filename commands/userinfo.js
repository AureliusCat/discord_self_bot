module.exports = {
	name: 'uinfo',
	aliases: ['ui', 'userinfo', 'mi', 'minfo', 'myinfo'],
	usage: null,
	description: 'Replies with information about a user',
	execute(message) {

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