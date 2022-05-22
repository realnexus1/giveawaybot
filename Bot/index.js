const {Client, Intents} = require("discord.js")
const token = require("./config.json")

const client = new Client({
    intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
})

client.once("ready", () =>{
    console.log("Ready")
})

client.login(token)