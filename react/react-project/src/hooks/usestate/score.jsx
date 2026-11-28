import { useState } from 'react';

function Score() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [extras, setExtras] = useState(0);

  const isAllOut = wickets >= 10;
  const overs = Math.floor(balls / 6);
  const ballsInOver = balls % 6;

  const addRuns = (r) => {
    if (isAllOut) return;
    setRuns((prev) => prev + r);
    setBalls((prev) => prev + 1);
  };

  const addWicket = () => {
    if (isAllOut) return;
    setWickets((prev) => prev + 1);
    setBalls((prev) => prev + 1);
  };

  const addExtra = (type) => {
    if (isAllOut) return;
    setRuns((prev) => prev + 1);
    setExtras((prev) => prev + 1);
    if (type !== 'wide' && type !== 'noball') {
      setBalls((prev) => prev + 1);
    }
  };

  const reset = () => {
    setRuns(0);
    setWickets(0);
    setBalls(0);
    setExtras(0);
  };

  return (
    <div style={{ fontFamily: 'monospace', maxWidth: '380px', margin: '30px auto' }}>
      <h2 style={{ borderBottom: '1px solid black', paddingBottom: '6px' }}>Cricket Scoreboard</h2>
      <p style={{ fontSize: '40px', margin: '10px 0' }}>{runs} / {wickets}</p>
      <p>Overs: {overs}.{ballsInOver}</p>
      <p>Extras: {extras}</p>
      <p><strong>Runs:</strong></p>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {[0, 1, 2, 3, 4, 6].map((r) => (
          <button key={r} disabled={isAllOut} onClick={() => addRuns(r)}>{r}</button>
        ))}
        <button disabled={isAllOut} onClick={addWicket}>Wicket</button>
      </div>
      <p style={{ marginTop: '12px' }}><strong>Extras:</strong></p>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        <button disabled={isAllOut} onClick={() => addExtra('wide')}>Wide</button>
        <button disabled={isAllOut} onClick={() => addExtra('noball')}>No Ball</button>
        <button disabled={isAllOut} onClick={() => addExtra('bye')}>Bye</button>
        <button disabled={isAllOut} onClick={() => addExtra('legbye')}>Leg Bye</button>
      </div>
      <br />
      <button onClick={reset}>Reset Innings</button>
      {isAllOut && <p style={{ marginTop: '12px' }}>All Out! Final Score: {runs}</p>}
    </div>
  );
}

export default Score;
