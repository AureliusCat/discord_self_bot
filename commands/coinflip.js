module.exports = {
	name: 'flip',
    aliases: ['coin', 'coinflip', 'cointoss'],
    usage: null,
	description: 'Flips a coin, heads or tails',
	execute(message) {
        let num = Math.round(Math.random());
        if (num == 1) {
            message.reply(`heads`);
        } else {
            message.reply(`tails`);
        }
	},
};