module.exports = {
	name: 'dmspam',
	description: 'Repeatedly sends the given message to the DMs of all members of the server that the command was sent in',
	async execute(message, args) {

		let undelivered = 0;

		message.guild.members.cache.filter(mbr => !mbr.user.bot).foreach(mbr => mbr.send('test').catch(() => undelivered++)).then(
			message.channel.send(`Messages sent. ${undelivered} members couldn't receive it.`).catch(console.error)
		);

		//console.log(message.guild.members.cache.map(mbr => mbr.user.id));
		
	},
};