
const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); //conectando ao cliente
const config = require("./config.json"); //fazendo o login do requiremento do token
const { MessageEmbed } = require('discord.js');
const path = require('path');
const commands = require('./commands/audio-command.js');




client.on('ready', () => {
    client.user.setActivity("!info", { type: "LISTENING" })
    console.log('The client is ready');
});


client.on("message", async message => {  //monitora tudo que está acontecendo no chat

    if (message.author.bot) return; //para que não responda outros bots
    if (message.channel.type === "dm") return; //não responda comandos enviados por dm
    if(!message.content.startsWith(config.prefix))return; //usa somente um prefixo fixo 



    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();




    if ( comando === 'info') {

        const embed = new MessageEmbed();
        embed.setColor('#000000');
        embed.setTitle('Info');
        embed.setAuthor('New', 'https://cdn.discordapp.com/attachments/872157580418486322/877577467693518878/discord-logo.png')
        embed.setDescription('New is a discord bot for friends to friends.')
        embed.setThumbnail('https://cdn.discordapp.com/attachments/872157580418486322/877577467693518878/discord-logo.png')
        embed.addFields(
            { name: 'Pessoas', value: '!gian', inline: true },
            { name: 'Frases', value: '!construção', inline: true },
        );
        embed.setImage('https://cdn.discordapp.com/attachments/872157580418486322/877577467693518878/discord-logo.png')
        message.channel.send(embed);

    };

    if(comando === 'gian'){
      
      const embed = new MessageEmbed();
      embed.setColor('#000000');
      embed.setTitle('Parquinho do Gian');
      embed.setDescription('Para gente!')
      embed.setAuthor('New', 'https://cdn.discordapp.com/attachments/872157580418486322/877577467693518878/discord-logo.png')
      embed.setThumbnail('https://cdn.discordapp.com/attachments/720410505742778388/875543822845771776/unknown.png')
      embed.addFields(
          { name: 'Comandos do Gian', value: '!porra, !chupa' }
      );
      embed.setImage('https://cdn.discordapp.com/attachments/872155221944598618/877953023261941770/unknown.png')
      message.channel.send(embed);
      

    };
       
   

     


});

client.login(config.token); //setando o token e terminando o bot





