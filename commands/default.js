/*This is an example command module. The listed in the help command will be
same as the file name. Each command should be take in 3 arguments and although not necessary,
ideally use the variable names message, command and args. Each command is a seperate property which
stores an anonymous function*/

module.exports = {
    "ping": function (message, command, args) {
        message.channel.send("Pong!")
    },
    "pong": function (message, command, args) {
        message.channel.send("Ping!")
    }
}