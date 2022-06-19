import './App.css';
import fiveAndGreaterOnly from "./components/fiveAndGreaterOnly";
import evensOnly from "./components/evensOnly";
import fiveCharactersOrFewerOnly from "./components/fiveCharactersOrFewerOnly";
import peopleWhoBelongToTheMovieClub from "./components/peopleWhoBelongToTheMovieClub";
import ofAge from "./components/ofAge";

function App() {
    console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
    console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
    console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
 const people = peopleWhoBelongToTheMovieClub([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: false },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Bob Ziroll', member: true } ]


    console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));


  return (
    <div className="App">
     APP
        <p>{fiveAndGreaterOnly([3, 6, 8, 2])}</p>
        <p>{evensOnly([3, 6, 8, 2])}ß</p>
        <p>{fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])}</p>
        <p>{people.map(x=><p>{x.name}</p>)}</p>
    </div>
  );
}

export default App;
