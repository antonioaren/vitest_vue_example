"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCharacterIndex = void 0;
/*
* Find the index of a character in an array of characters (DOMWrapper)
* @param characters - Array of characters
* @param charToSearch - Character to search
* @returns - Index of the character in the array
* */
function findCharacterIndex(characters, charToSearch) {
    return characters.findIndex(function (char) { return char.text() === charToSearch; });
}
exports.findCharacterIndex = findCharacterIndex;
