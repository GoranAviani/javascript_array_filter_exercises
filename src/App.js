import './App.css';
import fiveAndGreaterOnly from "./components/fiveAndGreaterOnly";
import evensOnly from "./components/evensOnly";
import fiveCharactersOrFewerOnly from "./components/fiveCharactersOrFewerOnly";
import peopleWhoBelongToTheMovieClub from "./components/peopleWhoBelongToTheMovieClub";

function App() {
    console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
    console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
    console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
console.log(peopleWhoBelongToTheMovieClub([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: false },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Bob Ziroll', member: true } ]


  return (
    <div className="App">
     APP
        <p>{fiveAndGreaterOnly([3, 6, 8, 2])}</p>
        <p>{evensOnly([3, 6, 8, 2])}</p>
        <p>{fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])}</p>
        <p>{peopleWhoBelongToTheMovieClub([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: false },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
])}</p>
    </div>
  );
}

export default App;
