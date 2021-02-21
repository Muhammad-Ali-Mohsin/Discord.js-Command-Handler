# Discord.js Command Handler
A basic command handler for discord

## Features
- A simple bot template
- Default !ping and !pong commands
- A .env file with configurable options
- A !help command which showcases loaded commands
- Customisable command prefix
- A case insensitive option for commands

# Instructions

The Following Instructions show how to use the bot template

### Install _discord.js_ as well as _dotenv_

This can be done via a simple npm command

    npm install discord
    npm install dotenv

### Put your bot token in the .env file

This can be done via a simple nmp command. Default .env file:

    TOKEN=<INSERT YOUR TOKEN HERE>
    MODULES=default
    CASE_INSENSITIVE=true
    HELP_COMMAND=true
    COMMAND_PREFIX=!

### Load all your modules

Put all your files in the commands directory. Make sure to update the .env file with the module. Append a module with a command and a space

    MODULES=default, new_module

### Run bot.js

Run the command below and your bot should appear online

    node bot.js


