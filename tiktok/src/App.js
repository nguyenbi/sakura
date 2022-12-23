
import { useState } from 'react';
import UseRefOverview from './UseRefOverview'
import { MemoTemp } from './MemoContent';

function App() {
  const [state, setstate] = useState(false);
  return (
    <div>
      <button onClick={() => setstate(!state)}>Toggle me</button>
      {state && <UseRefOverview />}
      <MemoTemp stateParam = {state}/>
    </div>
  );
}

export default App;
