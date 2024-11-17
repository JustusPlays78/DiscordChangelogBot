import * as dotenv from 'dotenv';
import { Client, GatewayIntentBits, PermissionsBitField, EmbedBuilder, MessageReaction } from 'discord.js';
import { fetchText } from './text.js';


dotenv.config();
const token = process.env.CLIENT_AUTH_TOKEN;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', async () => {
    console.log('Ready!');
    try {
        const result = await fetchText("https://raw.githubusercontent.com/JustusPlays78/ES_AIRAC_PACKAGE_UPDATER/refs/heads/main/README.md");
        console.log('result:', result);
    } catch (error) {
        console.error(error);
    }
})

client.login(token);

