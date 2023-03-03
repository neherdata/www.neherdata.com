import ndslogo from "./ndslogo.png";
import "./App.css";

function App() {
  return (
<div className="App">
    <header className="App-header">
        <img src={ndslogo} className="App-logo" alt="logo" />
        <br />
        <h1>Neher Data Systems</h1>
        <p>
            106 Secretariat Ct
            <br />
            Tinton Falls, New Jersey 07724
            <br />
            United States
        </p>
        <a
            className="App-link"
            href="mailto:hello@neherdata.com?cc=tyler@neherdata.com, joe@neherdata.com&subject=Contact%20Neher%20Data%20Systems%20%5Bneherdata.com%5D"
            target="_blank"
            rel="noopener noreferrer"
            >
        Contact Us
        </a>
        <br />
    </header>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Our Links</h5>
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="https://www.github.com/neherdata">GitHub</a></li>
                        <li><a class="grey-text text-lighten-3" href="https://www.twitter.com/neherdata">Twitter</a></li>
                        <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/neherdata">Instagram</a></li>
                        <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/neherdata">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                © 2023 Neher Data Systems
                <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
        </div>
    </footer>
</div>
  );
}

export default App;
