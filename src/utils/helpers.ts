import { DOMWrapper } from '@vue/test-utils'

export function findCharacterIndex(characters: DOMWrapper<HTMLButtonElement>[], charToSearch: string): number {
    return characters.findIndex((char) => char.text() === charToSearch)
}