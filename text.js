import fetch from "node-fetch";
import {EmbedBuilder} from "discord.js";

const embed = new EmbedBuilder()
    .setColor('#ffffff')
    .setTitle('Changelog')
    .setURL('https://github.com/JustusPlays78/ES_AIRAC_PACKAGE_UPDATER/releases')
    .setAuthor({ name: 'Sevenity', iconURL: 'https://sevenity.net/images/logo.png' })
const date = new Date();


export async function fetchText(url, accessToken){
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Fehler beim Abrufen der Datei:', error);
        throw error;
    }
}

export async function getChanges(result){
    const lines = result.split('\n');
    let dayChangesArray = [];
    let days = [];
    let daysChangeString = [];

    for (let line of lines) {
        if (line.startsWith('## ')) {
            const Day = line.replace('## ', '');
            days.push(Day);
        }
    }


    //console.log(JSON.stringify(changes, null, 2));

    return result;
}

class DayChanges {
    constructor(id,day,fixes,features,otherChanges) {
        this.id = id;
        this.day = day;
        this.fixes = fixes;
        this.otherChanges = otherChanges;
    }
}