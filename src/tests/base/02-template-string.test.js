import  { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornan Hola kevin', () => {
        const nombre = 'kevin';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe('Hola kevin')
    })
    
    test('getSaludo debe retornan Hola Carlos', () => {
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos')
    })
    
}) 