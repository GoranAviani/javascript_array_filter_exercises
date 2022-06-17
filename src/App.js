import './App.css';
import fiveAndGreaterOnly from "./components/fiveAndGreaterOnly";

function App() {
    console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

  return (
    <div className="App">
     APP
        {fiveAndGreaterOnly([3, 6, 8, 2])}
    </div>
  );
}

export default App;
