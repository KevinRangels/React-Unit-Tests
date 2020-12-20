import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe ('Prueba de 05-funciones', () => {
    test('getUser Debe de retornar un objeto', () => {
        const userTest = {
          uid: 'ABC123',
          username: 'El_Papi1502'
        }
        const user = getUser()

        expect( user ).toEqual(userTest)
    })

    test('getUsuario activo debe retornar un objeto ', () => {
        const userTest = {
          uid: 'ABC567',
          username: 'kevin'
        }

        const user = getUsuarioActivo('kevin')

        expect( user ).toEqual(userTest)
    })
        
})