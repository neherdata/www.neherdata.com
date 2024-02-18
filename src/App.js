import ndslogo from "./ndslogo.png";
import "./App.css";
import { faAppStoreIos, faFacebook, faFacebookMessenger, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFax, faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ndslogo} className="App-logo" alt="logo" />
        <h1>Neher Data Systems</h1>
        <p>
          106 Secretariat Ct
          <br />
          Tinton Falls, New Jersey 07724
          <br />
          United States
        </p>

        <div className="icon-bar-1">
          <a href="mailto:hello@neherdata.com?cc=tyler@neherdata.com, joe@neherdata.com&subject=Contact%20Neher%20Data%20Systems%20%5Bneherdata.com%5D">
            <FontAwesomeIcon
              icon={faEnvelope}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="tel:+17326143717">
            <FontAwesomeIcon
              icon={faPhone}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="fax:+17323387791">
            <FontAwesomeIcon
              icon={faFax}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
        </div>

        <div className="icon-bar-2">
          <a href="https://www.github.com/neherdata">
            <FontAwesomeIcon
              icon={faGithub}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="https://www.facebook.com/neherdata">
            <FontAwesomeIcon
              icon={faFacebook}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="https://wa.me/message/V3ZSOBODWGPPE1">
            <FontAwesomeIcon
              icon={faWhatsapp}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="https://www.instagram.com/neherdata">
            <FontAwesomeIcon
              icon={faInstagram}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="https://m.me/neherdata">
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="https://apps.apple.com/us/developer/neher-co-data-systems-llc/id1619722081">
            <FontAwesomeIcon
              icon={faAppStoreIos}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
        </div>
        <br />
        <div class="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="64ae1778dae8595f37487787" data-style-height="52px" data-style-width="100%">
          <a href="https://www.trustpilot.com/review/neherdata.com" target="_blank" rel="noopener">
            Trustpilot
          </a>
        </div>
      </header>
      <footer className="App-footer">
        <div className="footer-links">
          <br />
          <a href="https://tos.neherdata.com">Terms of Service</a> | <a href="https://privacy.neherdata.com">Privacy Policy</a>
          <br />
          <a href="https://support.neherdata.com">Support</a> | <a href="mailto:hello@neherdata.com">Contact Us</a>
        </div>

        <div className="footer-copyright">
          <br />
          <code>© 2024 Neher & Co Data Systems LLC d/b/a Neher Data Systems</code>
        </div>
      </footer>
    </div>
  );
}

export default App;
