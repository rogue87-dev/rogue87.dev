import { write } from "./modules/TypeWriter.js";
import { pickSentence } from "./modules/Sentences.js";

const button = document.querySelector('#grid-container .grid-elem:first-child');

button.addEventListener('click', () => write(button, pickSentence(), 40),);