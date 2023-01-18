import { createMessage } from './../openai/createMessage'
import { Telegraf, Context } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'
import { OpenAIApi } from 'openai'
import { commands } from '../commands'

interface IBotInit {
	bot: Telegraf<Context<Update>>
	openai: OpenAIApi
}

export const botCommand = ({ bot, openai }: IBotInit) => {
	bot.start(
		async (ctx: Context) =>
			await ctx.replyWithHTML(`<b>Привет!👋</b>

  Этот чат-бот создан для использования разработки OpenAI, именуемой как ChatGPT, для формирования кода, написания сообщений, эссе, ответов на вопросы. 

  Для того, чтобы начать: <b>просто напиши сообщение.👇</b>`)
	)

	bot.on(
		'sticker',
		async (ctx: Context) =>
			await ctx.replyWithSticker(
				'CAACAgQAAxkBAAEHUNhjx0E540Wijpp4g_7R2ZJHob70kwACggsAAlbgaFDqQettvqTomC0E'
			)
	)

	bot.help(async (ctx: Context) => await ctx.reply(commands))

	bot.command('art', async ctx => {
		await ctx.replyWithSticker(
			'CAACAgIAAxkBAAEHUN9jx0lrYA4uPImFd3KwMFVmOOATmAAC1BEAA8CgSXknAeKPK_QMLQQ'
		)

		await ctx.reply('В разработке')
	})

	bot.on('text', async (ctx: Context) => {
		await ctx.reply('I am thinking...')

		const message = await createMessage({
			openai: openai,
			//@ts-ignore
			message: ctx.message.text,
		})

		if (message) {
			await ctx.reply(message, {
				reply_to_message_id: ctx!.message!.message_id,
			})
		}
	})
}
