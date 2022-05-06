import './App.css';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <Body/>
      </body>
    </div>
  );
}

export default App;
