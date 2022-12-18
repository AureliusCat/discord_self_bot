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

        for (let i = 1; i < args.length; i++) {
            text += args[i] + ` `;
        }

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

        const msg = `\`\`\`${lang}\n${start + text + end}\n\`\`\``;

        message.reply(msg);
	},
};