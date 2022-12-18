const { Client, Collection } = require(`discord.js-selfbot-v13`);
const { token, id, prefix } = require(`./settings/config.json`);
const fs = require(`fs`);
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const client = new Client({
	checkUpdate : false
});
client.commands = new Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.login(token);

client.on(`ready`, async () => {
	client.user.setActivity(`for ${prefix}help`, { type: 'WATCHING' });
	console.log(`${client.user.tag} is ready`);
})

client.on(`messageCreate`, message => {

	if (message.author.id !== id) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return; // only owner can use bot
	
	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command');
	}
})

//let channels = client.channels.cache.map(channel => channel.id); array of ids of ALL channels of ALL guilds user is in