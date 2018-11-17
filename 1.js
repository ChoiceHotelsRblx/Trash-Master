const Discord = require ("discord.js");
const bot = new Discord.Client();
bot.on("message", function (message){

  if (message.content == "twitch")
  ( 
    message.reply("https://www.twitch.tv/nathandoesathing")
  )

  if (message.content == "free food")
  ( 
    message.reply("no")
  )
  if (message.content == "bye")
  ( 
    message.reply("Bye!")
  )

  if (message.content == "help")
  ( 
    message.reply("bye,free food,nathan,hello.who am i,ping,Free money!,okok,ping and twitch are the commands.")
  )


  
  if (message.content == "nathan")
  ( 
    message.reply()
  )


  if (message.content == "who am i")
  ( 
    message.reply("a discord user")
  )

console.log('Bot loaded. Have fun!')

console.log("No,Mayonase is not an instrument")

if (message.content == "Who made you?")
  ( 
    message.reply("K.Round#0210")
  )

    
if (message.content == "far away")
  ( 
    message.reply("where")
  )
  
if (message.content == "okok")
  ( 
    message.reply("meow")
  )


if (message.content == "Free money!")
  ( 
    message.reply("How much?")
  )

  if (message.content == "ping")
  ( 
    message.reply("no ping")
  )

  if (message.content == "nnn")
  ( 
    message.reply("❌🌰📅")
  )


;bot.on ("ready", function() {}

,
console.log("Ready!"));

bot.user.setPresence({ game: { name: 'angery', type: "dnd"}});

if (message.content === 'wait what') {
  message.react('👀');
}

bot.user.setPresence({ game: { name: 'sharing tips on how to hug nathan', type: "streaming", url: "https://www.twitch.tv/nathandoesathing"}});





});
bot.login("NTAzNjI2ODg0Nzk4NzQyNTQx.DsnsSQ.MM1Z9WsAE9si8yPGcgPeF0Zq8OI")