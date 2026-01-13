import logo from './logo.svg';
import './App.css';
import Greet from './components/greetingWithFunction'
import Greeting from './components/greetingWithClass'
import Message from './components/message'
import Counter from './components/counter';
import ClickWithClass from './components/eventWithClass';
import ClickWithFunction from './components/eventWithFunction';
import ParentComponent from './components/parent';
import Welcome from './components/loggingWelcomeMessage';
import PersonsList from './components/personsList';

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
        <br/><br/>

        <div>
          <h2>Click Event Handling</h2>
          <ClickWithClass></ClickWithClass>
          <ClickWithFunction></ClickWithFunction>
        </div>
        <br/><br/>

        <ParentComponent/>
        <br/><br/>

        <Welcome>
          <h2>condition handling</h2>
        </Welcome>
        <br/><br/>

        <PersonsList>
          <h2>developers info</h2>
        </PersonsList>    
      </main>
    </div>
  );
}

export default App;
