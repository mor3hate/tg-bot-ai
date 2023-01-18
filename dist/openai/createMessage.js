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
exports.createMessage = void 0;
const createMessage = ({ message, openai }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const completion = yield openai.createCompletion({
            model: 'text-davinci-003',
            prompt: message,
            temperature: 0.2,
            max_tokens: 250,
        });
        return completion.data.choices[0].text;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createMessage = createMessage;
//# sourceMappingURL=createMessage.js.map