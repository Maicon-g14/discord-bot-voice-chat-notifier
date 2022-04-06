import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    const message = 'Ohayooo! Asa dayo! \\OwO/'
    console.log(message)
})

client.on('messageCreate', message => {
    let command = message.content.split(' ')
    let response = ''

    if (command && command[0]) {
        switch(String(command[0])) {
            case 'ping':
                response = 'P O N G'
                break
            case "umu":
                response = 'AAAAAAAAaaaaaaaaahh'
                break
        }

        response ? message.reply({ content: response }) : ''
    }
})

client.login(process.env.TOKEN)
