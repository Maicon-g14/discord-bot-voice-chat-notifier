import DiscordJS, { Intents, TextChannel } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

// let pessoasNoChatDeVoz = 0

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
});

client.on('ready', () => {
    const message = 'Ohayooo! Asa dayo! \\OwO/';
    console.log(message);

    const channel = (client.channels.cache.get('912493062712872983') as TextChannel);
    channel.send('A WILD KOMACHI HAS RISEN!');

});

client.on('messageCreate', async (message) => {
    const command = message.content.split(' ');
    let response = '';

    if (command && command[0]) {
        switch (String(command[0])) {
        case 'ping':
            response = 'P O N G';
            break;
        case 'umu':
            response = 'AAAAAAAAaaaaaaaaahh';
            break;
        default:
            // Do nothing
        }

        if (response) {
            message.reply({ content: response });
        }
    }

    
    //let voiceChatMembers = message.guild.channels.get('912493062712872984').members;

    // if(voiceChatMembers && voiceChatMembers.size > pessoasNoChatDeVoz) {
    //     pessoasNoChatDeVoz++
    //     const channel = (client.channels.cache.get('912493062712872983') as TextChannel);
    //     channel.send('Alguem entrou no chat de voz ' + pessoasNoChatDeVoz);

    // } else if(voiceChatMembers && voiceChatMembers.size < pessoasNoChatDeVoz) {
    //     pessoasNoChatDeVoz--
    //     const channel = (client.channels.cache.get('912493062712872983') as TextChannel);
    //     channel.send('Alguem saiu do chat de voz ' + pessoasNoChatDeVoz);
    // }
});


client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channel
    let oldUserChannel = oldMember.channel
    const channel = (client.channels.cache.get('912493062712872983') as TextChannel);       //id do chat de audio


    if(!oldUserChannel && newUserChannel) {
        channel.send('Alguem entrou no chat de voz ');

    } else if(!newUserChannel){
        channel.send('Alguem saiu do chat de voz ');

    }
})


client.login(process.env.TOKEN);

