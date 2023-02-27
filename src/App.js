import logo from './ndslogo.png';
import './App.css';

function App() {
  return (
   <div className="App">
	<header className="App-header">
		<img src="{logo}" className="App-logo" alt="logo" />
		<br />
		<h1>
			Neher Data Systems
		</h1>
		<h2>
			106 Secretariat Ct<br />
			Tinton Falls, New Jersey 07724-3845<br />
			United States
		</h2>

		<a className="App-link" href="mailto:hello@neherdata.com?cc=tyler@neherdata.com;joe@neherdata.com&subject=Contact%20Neher%20Data%20Systems%20%5Bneherdata.com%5D" target="_blank" rel="noopener noreferrer">
			Contact Us
		</a>
	</header>
</div>

  );
}

export default App;
