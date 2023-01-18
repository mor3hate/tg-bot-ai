"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const colors_1 = __importDefault(require("colors"));
const botInit_1 = require("./bot/botInit");
const openai_1 = require("openai");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4200;
app.use(express_1.default.json());
const bot = new telegraf_1.Telegraf(`${process.env.BOT_TOKEN}`);
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new openai_1.OpenAIApi(configuration);
(0, botInit_1.botCommand)({ bot: bot, openai: openai });
app.listen(port, () => {
    console.log(colors_1.default.green(`⚡️[server]: Server is running at http://localhost:${port}`));
});
//# sourceMappingURL=index.js.map