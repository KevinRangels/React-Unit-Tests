import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async await', ()=> {
    test('Debe de returnar url de la images', async() => {
        
        const url = await getImagen();
        console.log(url)
        expect(typeof url).toBe('string')
    })
    
})