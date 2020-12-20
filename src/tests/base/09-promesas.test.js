import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync Debe retornar un heroe async ', ( done ) => {
        const id = 1

        getHeroeByIdAsync(id)
          .then( heroe => {
              expect( heroe ).toBe( heroes[0] );
              done();
          });
    });

    test('Debe obtener un error si el Hereo por id no existe ', ( done ) => {
        const id = 10

        getHeroeByIdAsync(id)
          .catch (error => {
              expect( true ).toBe(true);
              done();
          })
    })
    
})