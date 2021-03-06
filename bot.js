const Discord = require('discord.js');
const client = new Discord.Client();
const invites = {};

client.on("ready", () => {
  console.log("Jeg er klar!");
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('576800839201718312').send(member + " - <:Ahoy:631893585033297931> & welcome to the discord!");
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
    if (message.content === 'Ahoy') {
    	message.channel.send(message.author + ' - <:Ahoy:631893585033297931>');
    }
});

client.on('message', message => {
    if (message.content === 'ahoy'') {
    	message.channel.send(message.author + ' - <:Ahoy:631893585033297931>');
    }
});

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
