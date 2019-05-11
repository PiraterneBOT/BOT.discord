const Discord = require('discord.js');
const client = new Discord.Client();
const invites = {};

client.on("ready", () => {
  console.log("Jeg er klar!");
});

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
