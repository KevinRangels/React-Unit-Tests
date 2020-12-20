import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 100}) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => {
      setCounter(counter + 1)
    }
    const handleReset = () => {
        setCounter(value)
    }
    const handleSubstrac = () => {
      setCounter(counter - 1)
    }
    return ( 
        <>
          <h1>Counter App</h1>
          <h2>{ counter }</h2>
          <button onClick={ handleAdd }>+1</button>
          <button onClick={ handleReset }>reset</button>
          <button onClick={ handleSubstrac }>-1</button>
        </>
     );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
export default CounterApp;
