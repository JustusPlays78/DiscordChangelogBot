import {EmbedBuilder} from "discord.js";

const embed = new EmbedBuilder()
    .setColor('#ffffff')
    .setTitle('Changelog')
    .setURL('https://github.com/JustusPlays78/ES_AIRAC_PACKAGE_UPDATER/releases')
    .setAuthor({ name: 'Sevenity', iconURL: 'https://sevenity.net/images/logo.png' })
const date = new Date();

export function createChangelogEmbed() {

    embed.addFields({
        name: 'Fixes',
        value: "ACP: Gänge gingen nicht \n Webseite: Discord war kein Mensch",
        inline: false,
    });

    embed.addFields({
        name: 'Neue Features',
        value: "Elevator \n Webseite: AltV-Direct Connect",
        inline: false,
    });


    embed.addFields({
        name: 'Sonstiges',
        value: "Wohnung: Schlüssel verändert",
        inline: false,
    });

    embed.setFooter({ text: date.toLocaleString("de-DE")});
    return embed;
}

