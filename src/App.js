import './App.css';
import Scarecrow from './assets/Scarecrow.png'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          {"404 not found"}
        </nav>
      </header>
      <main>
        <div className="scarecrow-wrapper">
          <img src={Scarecrow} alt="Scarecrow" />
        </div>
        <div className="content">
          <div>
          <h1>I have bad news for you</h1>
          <p>
          The page you are looking for might be removed or is temporarily unavailable
          </p>
          <button>Back to homepage</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
