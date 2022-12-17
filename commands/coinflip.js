module.exports = {
	name: 'coinflip',
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