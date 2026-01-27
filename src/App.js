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
import StyleSheet from './components/styleSheet';
// import './appStyles.css';
// import Styles from'./appStyles.module.css';
import {Menu} from './components/menu';
import FormHandling from './components/formHandling';
import LifeCycleA from './components/lifeCycleA';
import Fragment from './components/fragment';
import RegVSpure from './components/regVSpure';
import RefDemo from './components/refDemo';
import PortalParent from './components/portalParent';
import ErrorBoundry from './components/errorBoundry';
import IsHero from './components/isHero';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/hoverCounter';
import RenderProps from './components/renderProps';
import ClickCounterTwo from './components/clickCounterTwo';
import HoverCounterTwo from './components/hoverCounterTwo';
import FirstLevelComp from './components/firstLevelComp';
import {UserProvider} from './components/context';

function App() {
    const tableStyles={
      margin:"3px auto",
      border:"1px solid #000",
      backgroundColor:"#ccc"
    };

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
        <br/><br/>

        <div className="section">
          <h2 className="error">CSS Styling</h2> {/*the style declared in appStyles.css imported in the child component 'StyleSheet' will be applied globally in the parent (app) and affect this line*/}
          <StyleSheet primary={true} heading={true}></StyleSheet>
        </div>

        <div className="section">
          <Menu/>
        </div>
        <br/>

        <h2>Forms Handling</h2>
        <FormHandling></FormHandling>
        <br/><br/>

        <h2>Lifecycle Methods</h2>
        <LifeCycleA/>
        <br/><br/>

        <h2>using fragment component</h2>
        <table style={tableStyles}>
          <tbody>
              <Fragment></Fragment>
          </tbody>
        </table>
        <br/><br/>

        <RegVSpure></RegVSpure>
        <br/><br/>

        <RefDemo></RefDemo>
        <br/><br/>

        <h2>Portals</h2>
        <PortalParent></PortalParent>
        <br/><br/>

        <div>
          <h2>Using Error Boundry</h2>
          <ErrorBoundry>
              <IsHero heroName="superman"></IsHero>
          </ErrorBoundry>

          <ErrorBoundry>
            <IsHero heroName="patman"></IsHero>
          </ErrorBoundry>

          <ErrorBoundry>
              <IsHero heroName="joker"></IsHero>
          </ErrorBoundry>
        </div>
        <br/><br/>

        <div>
          <h2>using HOC (Higher Order Component)</h2>
          <ClickCounter name="semon"></ClickCounter>
          <HoverCounter></HoverCounter>
        </div>
        <br/><br/>

        <div>
          <h2>Render Props</h2>
          <RenderProps render={(count, incrementCount)=> (<ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>)}></RenderProps>
          <RenderProps>{(count, incrementCount)=> (<HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>)}</RenderProps>
        </div>
        <br/><br/>

        <div>
          <h2>Context</h2>
          <UserProvider value="semon">
            <FirstLevelComp></FirstLevelComp>
          </UserProvider>
        </div>
      </main>
    </div>
  );
}

export default App;
