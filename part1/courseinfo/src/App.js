import logo from './logo.svg';
import './App.css';
const Hello = (props) => {
  return (
    <div>
      Hello {props.name}, you are {props.age} years old
    </div>
  )
}
function App() {
  const name = 'Peter'
  const age = 10
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
    
  );
}

export default App;
