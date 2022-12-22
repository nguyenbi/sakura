
import { useState } from 'react';
import UseEffectOverview from './useEffectOverview'

function App() {
  const [state, setstate] = useState(false);
  return (
    <div>
      <button onClick={()=>setstate(!state)}>Toggle me</button>
      {state && <UseEffectOverview />}
    </div>
  );
}

export default App;
