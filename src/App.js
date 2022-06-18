import './App.css';
import fiveAndGreaterOnly from "./components/fiveAndGreaterOnly";
import evensOnly from "./components/evensOnly";
import fiveCharactersOrFewerOnly from "./components/fiveCharactersOrFewerOnly";

function App() {
    console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
    console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
    console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]



  return (
    <div className="App">
     APP
        <p>{fiveAndGreaterOnly([3, 6, 8, 2])}</p>
        <p>{evensOnly([3, 6, 8, 2])}</p>
    </div>
  );
}

export default App;
