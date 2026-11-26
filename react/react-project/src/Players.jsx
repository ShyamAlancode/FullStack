import "./Players.css";

const Players = (data) => {
  return (
    <div className="players-row">
      {data.obj1.map((player) => (
        <div key={player.id} className="player-card">
          <h3>{player.name}</h3>
          <p>Role: {player.role}</p>
          <p>Jersey: #{player.jersey}</p>
        </div>
      ))}
    </div>
  );
};

export default Players;
