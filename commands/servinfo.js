module.exports = {
	name: 'sinfo',
	aliases: ['si', 'servinfo', 'serverinfo', 'gi', 'ginfo', 'guildinfo'],
	usage: null,
	description: 'Replies with information about the server',
	execute(message) {

		const g = message.guild;
		const data = [];

		data.push(`**Name:** ${g.name}`);
		data.push(`**ID:** ${g.id}`);
		data.push(`**Owner ID:** ${g.ownerId}`);
		data.push(`**Member Count:** ${g.memberCount}`);
		data.push(`**Preferred Locale:** ${g.preferredLocale}`);
		data.push(`**Premium Tier:** ${g.premiumTier}`);
		data.push(`**Premium Subscription Count:** ${g.premiumSubscriptionCount}`);
		data.push(`**MFA Level:** ${g.mfaLevel}`);
		data.push(`**Verification Level:** ${g.verificationLevel}`);
		data.push(`**NSFW Level:** ${g.nsfwLevel}`);
		data.push(`**Explicit Content Filter:** ${g.explicitContentFilter}`);
		data.push(`**Roles:** \`${g.roles.cache.map(role => role.name).join(', ')}\``);

                message.reply(data.join('\n'));
	},
};