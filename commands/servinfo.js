module.exports = {
	name: 'sinfo',
	description: 'Replies with information about the server',
	execute(message) {

                const info = `\`\`\`ini
[Name] - ${message.guild.name}

[ID] - ${message.guild.id}

[Owner ID] - ${message.guild.ownerId}

[Member Count] - ${message.guild.memberCount}

[Preferred Locale] - ${message.guild.preferredLocale}

[Premium Tier] - ${message.guild.premiumTier}

[Premium Subscription Count] - ${message.guild.premiumSubscriptionCount}

[MFA Level] - ${message.guild.mfaLevel}

[Verification Level] - ${message.guild.verificationLevel}

[NSFW Level] - ${message.guild.nsfwLevel}

[Explicit Content Filter] - ${message.guild.explicitContentFilter}

[Roles] - ${message.guild.roles.cache.map(role => ` ${role.name}`)}
\`\`\``;

                message.reply(info);
	},
};