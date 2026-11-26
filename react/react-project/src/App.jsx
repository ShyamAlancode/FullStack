import Home from "./Home";
import Navbar from "./Navbar";
import Players from "./Players";

const App = () => {
  let players = [
    { id: 1, name: "Virat Kohli", role: "Batsman", jersey: 18 },
    { id: 2, name: "MS Dhoni", role: "Wicket-Keeper / Batsman", jersey: 7 },
    { id: 3, name: "Rohit Sharma", role: "Opening Batsman", jersey: 45 },
    { id: 4, name: "Jasprit Bumrah", role: "Fast Bowler", jersey: 93 },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <Home />
        <h2>Indian Cricket Players</h2>
        <Players obj1={players} />
      </div>
    </div>
  );
};

export default App;
