import './App.scss';
import jokers from './assets/Jokers.png';

function App() {
  return (
    <div className="app">
      <div className="crt crt-flicker"></div>
      <div className="page-container crt-bloom">
        <div className="buttons flex"> 
          <div className="btn btn-red">+100</div>
          <div className="btn btn-red">+10</div>
          <div className="btn btn-red">+1</div>
          <div className="btn btn-blue">+1</div>
          <div className="btn btn-blue">+10</div>
          <div className="btn btn-blue">+100</div>
        </div>
        <h1>Jokers</h1>
        <img src={jokers} className="jokers"/>
        </div>
    </div>
  );
}

export default App;
