
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Drum Machine
      </header>

      <div id="drum-machine">
        <div id="display">
          <button className="drum-pad" id="Heater1">Q</button>
          <button className="drum-pad" id="Heater2">W</button>
          <button className="drum-pad" id="Heater3">E</button>
          <button className="drum-pad" id="Heater4">A</button>
          <button className="drum-pad" id="Clap">S</button>
          <button className="drum-pad" id="Open-HH">D</button>
          <button className="drum-pad" id="Kick-n-Hat">Z</button>
          <button className="drum-pad" id="Kick">X</button>
          <button className="drum-pad" id="closed-HH">C</button>

        </div>
      </div>
    </div>
  );
}

export default App;
