
const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); //conectando ao cliente
const config = require("./config.json"); //fazendo o login do requiremento do token
const { MessageEmbed } = require('discord.js');


client.on('ready', () => {
    client.user.setActivity("!info", { type: "LISTENING" })
})


client.on("message", async message => {  //monitora tudo que está acontecendo no chat

    if (message.author.bot) return; //para que não responda outros bots
    if (message.channel.type === "dm") return; //não responda comandos enviados por dm


    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if (comando === "info") {

        const embed = new MessageEmbed();
        embed.setColor('#0099ff');
        embed.setTitle('Some title');
        message.channel.send(embed)
    }

     


});


client.login(config.token);





