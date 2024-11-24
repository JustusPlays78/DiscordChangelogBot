import * as dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import {fetchText, getChanges} from './text.js';
import {createChangelogEmbed} from "./embed builder.js";
import express from 'express';


dotenv.config();
const token = process.env.CLIENT_AUTH_TOKEN;
//const accesstoken = process.env.GITHUB_ACCESS_TOKEN;

const app = express();
app.use(express.json());
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
        console.log('client ready');
    } catch (error) {
        console.error(error);
    }
})

/*app.post('/changelog', async (message) => {
    let result = await fetchText("https://tee.intjulscha.de/Julscha/changelog/raw/branch/main/changelog_november.md", accesstoken);
    console.log(result);
    result = await getChanges(result);
    const embed = createChangelogEmbed();
    message.channel.send({ embeds: [embed] });
});*/

app.post('/add-role', async (req, res) => {
    const { guildId, userId, roleId } = req.body;

    const guild = await  client.guilds.fetch(guildId);
    const members = await guild.members.fetch(userId);

    try {
        await members.roles.add(roleId);
        res.status(200).send('Role added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('error');
    }
});

app.post('/remove-role', async (req, res) => {
    const { guildId, userId, roleId } = req.body;
    const guild = await  client.guilds.fetch(guildId);
    const members = await guild.members.fetch(userId);

    try {
        await members.roles.remove(roleId);
        res.status(200).send('Role removed successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('error');
    }
});

const PORT  = process.env.APIPORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})




client.login(token);

