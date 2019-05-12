const Discord = require('discord.js');
const client = new Discord.Client();
const invites = {};
const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

client.on("ready", () => {
  console.log("Jeg er klar!");
});

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
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('576800839201718312').send(member + " - <:Ohoj:576814763502206976> & velkommen til discorden."); 
});

global.currentTeamMembers = [];
global.servers = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
    // "ready" isn't really ready. We need to wait a spell.
    wait(1000);

    // Load all invites for all guilds and save them to the cache.
    client.guilds.forEach(g => {
        g.fetchInvites().then(guildInvites => {
            invites[g.id] = guildInvites;
        });
    });
});

client.on('guildMemberAdd', member => {
    // To compare, we need to load the current invite list.
    member.guild.fetchInvites().then(guildInvites => {
        // This is the *existing* invites for the guild.
        const ei = invites[member.guild.id];

        // Update the cached invites
        invites[member.guild.id] = guildInvites;

        // Look through the invites, find the one for which the uses went up.
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

        console.log(invite.code)

        if (invite.code === "XHCwBgU") {
            return member.addRole(member.guild.roles.find(role => role.name === "PIRATERNE"));
        }
    });
});

client.on('message', (message) => {
    if (message.content === 'Hey') {
    	message.channel.send(message.author + ' - <:Hey:576813473531559955>');
    }
});

client.on('message', message => {
    if (message.content === '<:Hey:576813473531559955>') {
    	message.channel.send(message.author + ' - <:Hey:576813473531559955>');
    }
});

client.on('message', message => {
    if (message.content === 'hey') {
    	message.channel.send(message.author + ' - <:Hey:576813473531559955>');
    }
});

client.on('message', message => {
    if (message.content === 'Heeey') {
    	message.channel.send(message.author + ' - <:Hey:576813473531559955>');
    }
});

client.on('message', message => {
    if (message.content === 'heeey') {
    	message.channel.send(message.author + ' - <:Hey:576813473531559955>');
    }
});

client.on('message', message => {
    if (message.content === 'heey') {
    	message.channel.send(message.author + ' - <:Hey:576813473531559955>');
    }
});

client.on('message', message => {
    if (message.content === 'Heey') {
    	message.channel.send(message.author + ' - <:Hey:576813473531559955>');
    }
});

client.on('message', message => {
    if (message.content === 'Ohøj') {
    	message.channel.send(message.author + ' - <:Ohoj:576814763502206976>');
    }
});

client.on('message', message => {
    if (message.content === 'ohøj') {
    	message.channel.send(message.author + ' - <:Ohoj:576814763502206976>');
    }
});

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
