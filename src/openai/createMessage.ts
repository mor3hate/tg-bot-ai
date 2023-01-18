import { OpenAIApi } from 'openai'

interface IMessageCreator {
	openai: OpenAIApi
	message: string
}

export const createMessage = async ({ message, openai }: IMessageCreator) => {
	try {
		const completion = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: message,
			temperature: 0.2,
			max_tokens: 250,
		})
		return completion.data.choices[0].text
	} catch (error) {
		console.log(error)
	}
}
