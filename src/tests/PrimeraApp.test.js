import React from 'react';
import { shallow } from 'enzyme'
import PrimeraApp from '../PrimeraApp'

describe('Pruebas en <PrimeraApp/>', () => {
    // test('debe demostrar el mensaje "Hola"', () => {
    //     const saludo = 'Hola'
    //     const { getByText } = render( <PrimeraApp saludo={saludo}/>)
    //     expect( getByText(saludo) ).toBeInTheDocument()
    // })

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola kevin';
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> );

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola kevin';
        const subTitulo = 'No Soy un subtitulo';
        const wrapper = shallow(
          <PrimeraApp 
            saludo={saludo} 
            subtitulo={subTitulo}
          />
        );

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subTitulo);
    })

    
})