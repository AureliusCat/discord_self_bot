module.exports = {
	name: 'tcolor',
    aliases: ['tc', 'textcolor', 'mc', 'mcolor', 'messagecolor'],
    usage: '<color> <message>',
	description: 'Changes the color of the text',
	execute(message, args) {

		var lang = ``;
        var start = ``;
        var end = ``;
        var text = ``;

        switch(args[0]) {
            case(`red`) :
                lang = `diff`;
                start = `- `;
                break;
            case(`orange`) :
                lang = `css`;
                start = `[`;
                end = `]`;
                break
            case(`yellow`) :
                lang = `fix`;
                break;
            case(`dgreen`) :
                lang = `bash`;
                start = `"`;
                end = `"`;
                break;
            case(`lgreen`) :
                lang = `diff`;
                start = `+ `;
                break;
            case('blue') :
                lang = `ini`;
                start = `[`;
                end = `]`;
                break;
        }

        args.shift()
        text = args.join(' ');

        message.reply(`\`\`\`${lang}\n${start + text + end}\n\`\`\``);
	},
};