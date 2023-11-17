import { write } from "./modules/TypeWriter.js";
import {pickSentence} from "./modules/sentences.js"

const button = document.querySelector('#grid-container .grid-elem:nth-child(1)');

button.addEventListener('click', () => write(button, pickSentence(), 50),);