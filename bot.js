//import discord.js for access to discord syntax that runs via the discord api
const Discord = require('discord.js');
//import dotenv for access to environment variables
const dotenv = require('dotenv');
//import the commands which have been recognised and loaded
const commands = require('./commandLoader.js');



dotenv.config();



//Creates a discord client object which is the bot
const client = new Discord.Client();



//Command processing function
const processCommand = (message) => {
    //Returns a lowercase version of the command if the case insensitive environment variable is true
    if (process.env.CASE_INSENSITIVE === 'true'){
        command = message.content.substr(1).toLowerCase();
    } else {
        command = message.content.substr(1);
    };
    //Removes the command prefix from the command
    command = command.substr(process.env.COMMAND_PREFIX.length);
    //Splits the command into its seperate arguments
    commandArgs = command.split(' ');
    commandKey = commandArgs[0]
    //Removes the command from the arguments
    commandArgs = commandArgs.slice(1);
    //Checks to see if the command is valid and runs the associated function if necessary
    if (commandKey in commands){
        commands[commandKey](message, commandKey, commandArgs);
    } else {
        message.channel.send("Command not found! Do !help for more information")
    }
}



//Listener to check when the bot first loads
client.on('ready', () => {
	console.log(`The bot has logged in as ${client.user.tag}`);
});



//Lister to check whenever a message is sent
client.on('message', (message) => {
    //Makes sure that the message hasn't been sent by the bot (prevents recursion)
    if (message.author.id === client.user.id){
        return
    }
    //Processes the command if the message starts with the command prefix
    if (message.content.startsWith(process.env.COMMAND_PREFIX)) {
        processCommand(message);
    }
});



//Logs into the bot using the Token
client.login(`${process.env.TOKEN}`);