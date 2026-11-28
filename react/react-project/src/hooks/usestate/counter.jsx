import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        <button onClick={() => setCount((c) => c + 1)}>+ Add</button>
        <button onClick={() => setCount((c) => c - 1)}>- Subtract</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
