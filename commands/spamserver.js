var interval;

module.exports = {
	name: 'spamserver',
	description: 'Repeatedly sends the given message in all channels of the guild that the message was sent',
	execute(message, args, client) {

        const channelIds = message.guild.channels.cache.filter(channel => channel.type == 'GUILD_TEXT').map(channel => channel.id);

        const intervalFunc  = () => {
            let message = ``;
            for (let i = 1; i < args.length; i++) {
                message += args[i] + ` `;
            }
                channelIds.forEach(id => {
                    client.channels.cache.get(id).send(message).catch(() => {});
                });
        }

        if (args[0] == `start`) {
            interval = setInterval(intervalFunc, 1000);
        }

        if (args[0] == `stop`) {
            clearInterval(interval);
        }
    },
};