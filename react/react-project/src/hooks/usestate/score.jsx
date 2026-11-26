import { useState } from "react";

function Score() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [extras, setExtras] = useState(0);

  const overs = Math.floor(balls / 6);
  const ballsInOver = balls % 6;

  function addRuns(r) {
    setRuns(runs + r);
    setBalls(balls + 1);
  }

  function addWicket() {
    if (wickets < 10) {
      setWickets(wickets + 1);
      setBalls(balls + 1);
    }
  }

  function addExtra(type) {
    if (type === "wide" || type === "noball") {
      setRuns(runs + 1);
      setExtras(extras + 1);
    } else {
      setExtras(extras + 1);
      setBalls(balls + 1);
    }
  }

  function reset() {
    setRuns(0);
    setWickets(0);
    setBalls(0);
    setExtras(0);
  }

  return (
    <div style={{ fontFamily: "monospace", maxWidth: "380px", margin: "30px auto" }}>
      <h2 style={{ borderBottom: "1px solid black", paddingBottom: "6px" }}>Cricket Scoreboard</h2>

      <p style={{ fontSize: "40px", margin: "10px 0" }}>{runs} / {wickets}</p>
      <p>Overs: {overs}.{ballsInOver}</p>
      <p>Extras: {extras}</p>

      <p><strong>Runs:</strong></p>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {[0, 1, 2, 3, 4, 6].map((r) => (
          <button key={r} onClick={() => addRuns(r)}>{r}</button>
        ))}
        <button onClick={addWicket}>Wicket</button>
      </div>

      <p style={{ marginTop: "12px" }}><strong>Extras:</strong></p>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <button onClick={() => addExtra("wide")}>Wide</button>
        <button onClick={() => addExtra("noball")}>No Ball</button>
        <button onClick={() => addExtra("bye")}>Bye</button>
        <button onClick={() => addExtra("legbye")}>Leg Bye</button>
      </div>

      <br />
      <button onClick={reset}>Reset Innings</button>

      {wickets === 10 && (
        <p style={{ marginTop: "12px" }}>All Out! Final Score: {runs}</p>
      )}
    </div>
  );
}

export default Score;
