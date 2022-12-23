
import { useCallback, useState } from 'react';
import Content from './UseCallbackAndMemo';

function App() {
  const [count, setcount] = useState(0);
  const handelIncrease = useCallback(
    () => {
      setcount(count => count + 1)
    },[]
  ) 
  return (
    <div style={{ padding: 20 }}>
      <Content onIncrease = {handelIncrease}/>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
