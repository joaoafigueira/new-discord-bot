const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("../config.json");
const path = require('path');


client.on('ready', () => {
    console.log('Command ready');
});


client.on("message", async message => {

    
    if (message.author.bot) return; 
    if (message.channel.type === "dm") return; 
    if(!message.content.startsWith(config.prefix))return; 

     
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if(comando === 'porra'){

        const {voice} = message.member
        
        if(!voice.channelID){
            message.reply('Você deve entrar em um canal de voz primeiro!');
            return
        };
 
         voice.channel.join().then((connection) => {
 
            const dispatcher = connection.play(path.join(__dirname, '../audios/oporra.mp3'))    
             dispatcher.on('close', end => {
                 voice.channel.leave();
           }) 
         
         }) 
 
         
     };
 
     if(comando === 'chupa'){
 
         const {voice} = message.member
         
         if(!voice.channelID){
             message.reply('Você deve entrar em um canal de voz primeiro!');
             return
         };
  
          voice.channel.join().then((connection) => {
  
             const dispatcher = connection.play(path.join(__dirname, '../audios/chupa.mp3'))    
              dispatcher.on('close', end => {
                  voice.channel.leave();
            }) 
          
          }) 
  
          
      };

    });
    client.login(config.token);