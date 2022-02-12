"use strict";
// ./length.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, forUnity, toUnity) {
    return utils_1.default.convert(units, value, forUnity, toUnity);
}
