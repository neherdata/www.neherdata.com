import logo from './ndslogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>
          Neher Data Systems
        </h1>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="mailto:hello@neherdata.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;
