//import dotenv for access to environment variables
const dotenv = require('dotenv');
//import discord.js for access to discord embeds for the help command
const Discord = require('discord.js');



dotenv.config()



//Declare the commands and help_cmd objects
var commands = {};
var help_cmd = {}



//Loops over every file specified in the .env file and loads all the commands
modulesArray = process.env.MODULES;
modulesArray.split(', ').forEach((moduleName) => {
    help_cmd[moduleName] = []
    const moduleObject = require(`./commands/${moduleName}`);
    for (cmd in moduleObject) {
        commands[cmd] = moduleObject[cmd]
        help_cmd[moduleName].push(cmd)
    }
});




/*Loads the help command if the help command is enabled in the .env file
Will overwrite any existing help commands*/
if (process.env.HELP_COMMAND === 'true') {
    commands['help'] = (message, command, args) => {
        var embed = new Discord.MessageEmbed()
        .setDescription(`**Help Command [!help]**`)
        for (key in help_cmd) {
            let value = "";
            help_cmd[key].forEach((command) => {
                value += `** - **\`!${command}\`\n`;
            });
            embed.addField(`${key[0].toUpperCase()}${key.substr(1)}`, value)
        };

        embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL({}));
        message.channel.send(embed);
    };
};



//Exports the final commands object which holds all the commands
module.exports = commands;