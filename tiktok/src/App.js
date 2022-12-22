
import { useState } from 'react';
import UseLayoutEffectDemo from './useLayoutEffectOverview'

function App() {
  const [state, setstate] = useState(false);
  return (
    <div>
      <button onClick={()=>setstate(!state)}>Toggle me</button>
      {state && <UseLayoutEffectDemo />}
    </div>
  );
}

export default App;
