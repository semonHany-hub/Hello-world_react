import logo from './logo.svg';
import './App.css';
import Greet from './components/greetingWithFunction'
import Greeting from './components/greetingWithClass'
import Message from './components/message'
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <Greet name="functional component">
            stateless, dumb and presentational component
        </Greet>
        <br/>

        <Greeting name="class component">
            stateful, smart and container component
        </Greeting>
        <br/><br/>

        <Message></Message>
        <br/><br/>

        <Counter></Counter>
      </main>
    </div>
  );
}

export default App;
