import logo from './logo.svg';
import './css/App.css';
import Natbar from './components/Navbar';

function App() {
  return (
    <div>
      
    
      <header className="App-header">
        <Natbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
    
  );
}

export default App;
