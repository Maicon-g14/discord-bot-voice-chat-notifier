//importa metodos de manipulacao do discord, encaminha o que receber pro command-handler e exporta pro discord o que obter como resposta(ou listener?)

import DiscordJS, { Intents, TextChannel } from 'discord.js';
import dotenv from 'dotenv';

const channelId = '912493062712872983'

dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
});

client.on('ready', () => {
    const message = 'A WILD KOMACHI HAS RISEN SUCESSFULLY!';
    console.log(message);

    const channel = (client.channels.cache.get(channelId) as TextChannel);
    channel.send('Ohayooo! Dza little Komachi has awaken! \\OwO/');
    channel.send('Type `-komands` to see available commands');
});


client.on('messageCreate', async (message) => {
    const command = message.content.split(' ');
    let response = '';

    if (command && command[0]) {
        switch (String(command[0])) {
        case 'ping':
            response = 'P O N G';
            break;
        case 'komands':
            response = '';
            break;
        case '-umu':
            response = 'AAAAAAAAaaaaaaaaahh, I humbly accept your pray and now ';
            break;
        default:
            // Do nothing
        }

        if (response) {
            message.reply({ content: response });
        }
    }
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

