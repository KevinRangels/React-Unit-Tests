import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes';

describe('Pruebas con funciones de heroes', () => {
    test('debe de retornar un heroe por id ', () => {
        const id = 1;
        const heroe = getHeroeById( id )
        
        const heroeData = heroes.find( h => h.id === id)

        expect(heroe).toEqual(heroeData)
    })

    test('debe de retornar un undefined si heroe no exite ', () => {
        const id = 10;
        const heroe = getHeroeById( id )
        
        expect(heroe).toBe(undefined)
    })

    test('debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner( owner )

        const heroesDC = heroes.filter( heroe => heroe.owner === owner );
        
        expect(heroe).toEqual(heroesDC)
    })

    test('debe retornar un arreglo con los heroes de marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner )
        
        expect(heroe.length).toBe(2)
    })


    
})