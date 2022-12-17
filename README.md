# discord_self_bot

PLEASE NOTE: THIS PROJECT IS VERY NEW AND I AM THE ONLY PERSON CURRENTLY WORKING ON IT. IT IS LIKELY TO BE ROUGH, BUGGY, AND HARD TO USE.

### Required software to run the bot ###
- - - -
  * [node.js](https://nodejs.org/en/download/). Needed to run the bot.
  * [Git](https://git-scm.com/downloads). Needed to download the bot's files.

### Downloading the bot ###
- - - -
  * On your computer, open the location where you want to download the bot.
  * Run `git clone https://github.com/AureliusCat/discord_self_bot.git'.
  * Open a shell in the directory that was downloaded and run `npm i discord.js-selfbot-v13@latest`.
 
### How to get your Discord token ###
- - - -
  * In Discord, do `Ctrl + Shift + i` on Windows or `Cmd + Option + i` on Mac, respectively.
  * Go into the Application tab, and navigate to Local Store > discord.com
  * Click on Toggle Device Option (it will look like a tablet and phone).
  * Enter 'token' into the search bar, and copy the value in the quotes. It should look like a long string of random characters.
  * Don't give this out to anyone, if you do you run the risk of your account being compromised. You'll need this token soon.

Note: If you change your password or enable/disable two-factor authentication, your token will change. If this happens, and you've already set up the bot, you'll need to change the token by editing the config.json file.
 
### How to get your Discord ID ###
- - - -
  * Enable developer mode.
    * In settings, go to advanced and enable developer mode.
  * In a channel, right click on your profile and click `Copy ID`.
  * You'll need this ID soon.

### Putting your token and ID into config.json ###
- - - -
  * Open config.json in a text editor. This file will be located in the folder you downloaded the bot into.
  * Copy the values into their respective fields. For example, the token field should look like `"token" : "0123456789",`.

Note: You shouldn't have to edit any other file. However if you know what you're doing then feel free to.

### Starting the bot ###
- - - -
  * Open a shell in the bot folder.
  * Run `node .` or `node index.js`.

### Features ###
- - - -
  * Get a help message with the command `<your_prefix>help`.
  * Spam channels of servers.
  * Spam the DMs of members of a server.
  * Ghost ping a member of a server in every channel.
  * Get information about a server.
  * Get information about a member of a server.
  * Flip a coin.
  * Get the latency of the bot.
  * Kill the bot.
