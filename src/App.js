import './App.css';
import { useState } from 'react';

function App() {

  const [userAge, setUserImputAge] = useState(0);
  const [userCalcLHr, setUserLHr] = useState(0);
  const [userCalcUHr, setUserUHr] = useState(0);
  
  function caclculateHeartRate() {
    setUserLHr((220 - userAge) * 0.65);
    setUserUHr((220 - userAge) * 0.85);
  }

  return (
    <div id='container'>
      <h2>Heart rate limits</h2>
      <div>
        <form>
          <div>
            <label> Input your age</label>
            <input type='number' value={userAge} onChange={(e) => setUserImputAge(e.target.value)} onKeyPress={(e) => { if (e.key === 'Enter') caclculateHeartRate() }} />
          </div>
          <div>
            <label> Heart rate limits</label>
            <output>{userCalcLHr} - {userCalcUHr}</output>
          </div>
          <button type='button' onClick={caclculateHeartRate}>Calculate</button>
        </form>
      </div>
    </div>
  )
}

export default App;
