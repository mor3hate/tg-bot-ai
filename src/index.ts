import { Context, Telegraf } from 'telegraf'
import express, { Express } from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { botCommand } from './bot/botInit'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const app: Express = express()

const port = process.env.PORT || 4200

app.use(express.json())

const bot = new Telegraf(`${process.env.BOT_TOKEN}`)

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

botCommand({ bot: bot, openai: openai })

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

app.listen(port, () => {
	console.log(colors.green(`⚡️[server]: Server is running at ${port}`))
})
