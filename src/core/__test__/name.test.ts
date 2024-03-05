import { describe, it, expect } from 'vitest'

/*
 * Paso un parametro como nombre, otro como apellido y el resultado es la suma
 * de los 2, con un espacio en medio
 * */

import { fullname } from '../fullname'

describe('Fullname', () => {
    it('Should be a function', () => {
        expect(typeof fullname).toBe('function')
    })

    /*it('Should return a string', () => {
        expect(() => fullname('Juan') ).toHaveBeenCalledWith('Juan')
    })*/

    it('Should give Juan and Brito and give me Juan Brito', () => {
        expect(fullname('Juan', 'Brito')).toBe('Juan Brito')
    })
    it('Should give Pedro and Arenas and give me Pedro Arenas', () => {
        expect(fullname('Pedro', 'Arenas')).toBe('Pedro Arenas')
    })
})
