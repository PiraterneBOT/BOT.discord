const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dipatcher.on("end", function();
        if(server.queue[0])
        {
                Play(connection, message);
            }
            else
            {
                connection.disconnect();
            }
        }
    });
}

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Tilslutter sig til et rum på discorden for at spille musik.'
            });
}

async run(message, args)
{
    if(message.member.voicechannel)
    {
        if(!message.guild.voiceConnection)
        {
            if(!servers[message.guild.id])
            {
                 servers[message.guild.id] = {queue: []}
            }
            message.member.boicechannel.join()
                .then(connection =>{
                    var server = servers[message.guild.id];
                    message.reply("Tilsluttet til "Musik" kanalen succesfuldt!");
                    server.queue.push(args);
                    Play(connection, message);
                 })
            }
    }
    else
    {
        message.reply("Du skal være i en kanal, før du kan afspille musik!");
    }
  }
}

module.exports = JoinChannelCommand;
