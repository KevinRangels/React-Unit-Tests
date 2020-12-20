import './App.css';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';

const App = () => {
  return (
    <div className="App">
      <PrimeraApp saludo="Hola" />
      <CounterApp />
    </div>
  );
}


export default App;
