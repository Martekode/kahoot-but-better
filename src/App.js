import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/funcComponents/Game';

function App() {
  return (
    <div>
      <Header/>
      <header className="App-header">
        <Game/>
      </header>

      <Footer/>
    </div>
  );
}

export default App;
