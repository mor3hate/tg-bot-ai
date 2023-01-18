"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.botCommand = void 0;
const createMessage_1 = require("./../openai/createMessage");
const commands_1 = require("../commands");
const botCommand = ({ bot, openai }) => {
    bot.launch();
    bot.start((ctx) => __awaiter(void 0, void 0, void 0, function* () {
        return yield ctx.replyWithHTML(`<b>Привет!👋</b>

  Этот чат-бот создан для использования разработки OpenAI, именуемой как ChatGPT, для формирования кода, написания сообщений, эссе, ответов на вопросы. 

  Для того, чтобы начать: <b>просто напиши сообщение.👇</b>`);
    }));
    bot.on('sticker', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        return yield ctx.replyWithSticker('CAACAgQAAxkBAAEHUNhjx0E540Wijpp4g_7R2ZJHob70kwACggsAAlbgaFDqQettvqTomC0E');
    }));
    bot.help((ctx) => __awaiter(void 0, void 0, void 0, function* () { return yield ctx.reply(commands_1.commands); }));
    bot.command('art', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        yield ctx.replyWithSticker('CAACAgIAAxkBAAEHUN9jx0lrYA4uPImFd3KwMFVmOOATmAAC1BEAA8CgSXknAeKPK_QMLQQ');
        yield ctx.reply('В разработке');
    }));
    bot.on('text', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        yield ctx.reply('I am thinking...');
        const message = yield (0, createMessage_1.createMessage)({
            openai: openai,
            //@ts-ignore
            message: ctx.message.text,
        });
        if (message) {
            yield ctx.reply(message, {
                reply_to_message_id: ctx.message.message_id,
            });
        }
    }));
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
};
exports.botCommand = botCommand;
//# sourceMappingURL=botInit.js.map