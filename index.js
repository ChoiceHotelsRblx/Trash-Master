const Discord = require('discord.js');
const client = new Discord.Client();
const ffmpeg = require('ffmpeg');
client.on("message", function (message){


    if (message.content == "+help")
    message.channel.send({embed: {
      color: 422091,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "commands!",
      
      description: "+okok",
      fields: [{
          name: "+okok",
          value: "says meow"
        },
        {
          name: "+twitch",
          value: "Go figure."
        },
        {
          name: "+free food",
          value: "No."
  
          ,name: "+bye",
          value: "Go figure."
  
          ,name: "+who am i",
          value: "Tells you who you are."
  
          ,name: "+far away",
          value: "where."
  
          ,name: "+Free money!",
          value: "Im not saying how much..."
  
          ,name: "+ping",
          value: "no ping"
  
  
  
  
  
  
  
  
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "+help"
      }
    }
  });
  
  let voiceChannel = "voiceChannel"



  
    if (message.content == "+twitch")
    ( 
      message.reply("https://www.twitch.tv/nathandoesathing")
    )
  
    if (message.content == "+free food")
    ( 
      message.reply("no")
    )

    if (message.content == "+bye")
    ( 
      message.reply("Bye!")
    )

    client.on("ready", () => {
      const channel = client.channels.get("513341150548066315");
      if (!channel) return console.error("The channel does not exist!");
      channel.join().then(connection => {
        // Yay, it worked!
        console.log("Successfully connected.");
      }).catch(e => {
        // Oh no, it errored! Let's log it to console :)
        console.error(e);
      });
    });

    
    if (message.content == "+rps")
    ( 
      message.reply(`${myArray}`)
    )
    
   

  
    if (message.content == "+who am i")
    ( 
      message.reply("a discord user")
    )
  
  console.log('Bot loaded. Have fun!')
  
  console.log("No,Mayonase is not an instrument")
  
  if (message.content == "+Who made you?")
    ( 
      message.reply("K.Round#0210")
    )
  

    
      
  if (message.content == "+far away")
    ( 
      message.reply("where")
    )
    
  if (message.content == "+okok")
    ( 
      message.reply("meow")
    )
  
  if (message.content == "+real music")
    ( 
      message.reply("go in a voice channel and do +real music2")
    )
  
    client.on("guildCreate", guild => {
      var found = false;
      guild.channels.forEach(function(channel, id) {
          // If a channel is already found, nothing more needs to be done
          if(found == true || channel.type != "text") {
            return;
          }
          // If the channel isn't found and the bot has permission to 
          // send and read messages in the channel, send a welcome message there
          if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
            found = true;
            return channel.send("Thanks for inviting me, blablabla")
          }
      })
   });
  
  
  
    if (message.content == "+real music2")
    ( 
      message.channel.sendMessage("!play https://www.youtube.com/watch?v=fro6je9L5kg")
    )
  
  
    if (message.content == "+communism")
    ( 
      message.reply("")
    )



  
    if (message.content.startsWith("+sing")) {
      if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
              .then(connection =>
          console.log("here we go!")
        
  
              .catch(console.error))
      } else
      {
          message.channel.send("please join voice channel first!")
      }
  }

  if (message.content == "+Free money!")
    ( 
      message.reply("How much?")
    )
  
    if (message.content == "+ping")
    ( 
      message.reply("no ping")
    )
  
    if (message.content == "+nnn")
    ( 
      message.reply("❌🌰📅")
    )
  
  
  ;client.on ("ready", function() {}
     
  
  
  ,
  console.log("Ready!"));
  
  
  if (message.content == "")
    ( 
      message.reply("❌🌰📅")
    )
    });


  
 
client.login('NTAzNjI2ODg0Nzk4NzQyNTQx.DucZwg.894swqKlz1qrFRxUrpS3ImuLYrA');