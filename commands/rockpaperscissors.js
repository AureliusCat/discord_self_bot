module.exports = {
	name: 'rps',
	aliases: null,
	usage: '<your hand>',
	description: 'The rock, paper, and scissors game',
	execute(message, args) {

		const usrHand = args[0];
        const comHand = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        const tie = `You both chose ${usrHand}, it was a tie.`;
        const win = `You chose ${usrHand} and the computer chose ${comHand}, therefore you win!`;
        const loss = `You chose ${usrHand} and the computer chose ${comHand}, so you lost :(`;

        switch(usrHand) {
            case('rock'):
                switch(comHand) {
                    case('rock'):
                        message.reply(tie);
                        break;
                    case('paper'):
                        message.reply(loss);
                        break;
                    case('scissors'):
                        message.reply(win);
                        break;
                }
                break;
            case('paper'):
                switch(comHand) {
                    case('rock'):
                        message.reply(win);
                        break;
                    case('paper'):
                        message.reply(tie);
                        break;
                    case('scissors'):
                        message.reply(loss);
                        break;
                }
                break;
            case('scissors'):
                switch(comHand) {
                    case('rock'):
                        message.reply(loss);
                        break;
                    case('paper'):
                        message.reply(win);
                        break
                    case('scissors'):
                        message.reply(tie);
                        break;
                }
                break;
            default:
                message.reply(`That's not a valid hand.`);
        }
	},
};