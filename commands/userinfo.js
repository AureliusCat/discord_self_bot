module.exports = {
	name: 'userinfo',
	description: 'Replies with information about a user',
	execute(message, args) {
		const member = message.guild.members.cache.filter(mbr => mbr.user.id == args[0]);
		
        const ownerInfo = `\`\`\`ini
[Username] - ${message.author.tag}
[Identification Number] - ${message.author.id}
[Time Created] - ${message.author.createdAt}
[Connected Accounts] - ${message.author.connectedAccounts.map(account => account.type)}
[Biography] - ${message.author.bio}
[Nitro Type] - ${message.author.nitroType}
[NSFW Allowed] - ${message.author.nsfwAllowed}
\`\`\``;

		const memInfo = `\`\`\`ini
[Username] - ${member.username}#${member.discriminator}
[Bot?] - ${member.bot}
[System Account?] - ${member.system}
[Identification Number] - ${member.user.id}
[Time Created] - ${member.createdAt}
[Connected Accounts] - /*member.connectedAccounts.map(account => account.type).catch(() => {})*/
\`\`\``;


		switch(args[0]) {
			case (undefined) :
				message.reply(ownerInfo);
				break;
			default :
				//message.reply().catch(() => message.reply(`Invalid argument`));
				console.log(member);
				message.reply(memInfo);
				break;
		}
	},
};