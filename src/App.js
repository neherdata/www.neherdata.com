import ndslogo from "./ndslogo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ndslogo} className="App-logo" alt="logo" />

        <h1>Neher Data Systems</h1>
        <p>
          106 Secretariat Ct
          <br />
          Tinton Falls, NJ 07724
          <br />
          United States
        </p>

        <a
          className="App-link"
          href="mailto:hello@neherdata.com?cc=tyler@neherdata.com;joe@neherdata.com&subject=Contact%20Neher%20Data%20Systems%20%5Bneherdata.com%5D"
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
