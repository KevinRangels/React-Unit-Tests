import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Pruebas en <CounterApp/>', () => {

    let  wrapper = shallow( <CounterApp value={100} /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp value={100} /> );
    })

    test('debe mostrar <CounterApp /> correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();  
    })

    test('Mostar valor por defecto de 100', () => {
        const value =  '100';
        const wrapper = shallow(
          <CounterApp 
            value={100}
          />
        );

        const valueDefault = wrapper.find('h2').text().trim();
        
        expect(valueDefault).toBe(value);
    })

    test('incrementar con el boton +1', () => {
       wrapper.find('button').at(0).simulate('click')

       const valueCounter = wrapper.find('h2').text().trim();

       expect(valueCounter).toBe('101');
    })

    test('reset bottom', () => {
        wrapper.find('button').at(1).simulate('click')
 
        const valueCounter = wrapper.find('h2').text().trim();
 
        expect(valueCounter).toBe('100');
     })

    test('decrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click')
 
        const valueCounter = wrapper.find('h2').text().trim();
 
        expect(valueCounter).toBe('99');
     })
    
    
})