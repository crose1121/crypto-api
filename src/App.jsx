import './App.css';
import CryptoCoinsUsingFetch from './components/CryptoCoinsUsingFetch';
import CryptoCoinsUsingAxios from './components/CryptoCoinsUsingAxios';

function App() {
  return (
    <div className="App">
      {/* <CryptoCoinsUsingFetch></CryptoCoinsUsingFetch> */}
      <CryptoCoinsUsingAxios></CryptoCoinsUsingAxios>
    </div>
  );
}

export default App;
