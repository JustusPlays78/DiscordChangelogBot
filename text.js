import fetch from "node-fetch";


export async function fetchText(url){
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
        const text = await response.text();
        return text; // Den Text zurückgeben
    } catch (error) {
        console.error('Fehler beim Abrufen der Datei:', error);
        throw error; // Fehler weiterwerfen
    }
}