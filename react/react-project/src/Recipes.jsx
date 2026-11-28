import { useState, useEffect } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Recipes fetched:", data);
        setRecipes(data.recipes || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading recipes...</h2>;
  }

  if (error) {
    return (
      <div style={{ padding: "20px", color: "red" }}>
        <h2>Failed to load recipes</h2>
        <p>Error: {error}</p>
        <p>Please check your internet connection or browser console (F12).</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Recipe List ({recipes.length})</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              width: "260px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "6px" }}
            />
            <h3 style={{ fontSize: "18px", margin: "10px 0 6px" }}>{recipe.name}</h3>
            <p style={{ margin: "4px 0", fontSize: "14px" }}><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p style={{ margin: "4px 0", fontSize: "14px" }}><strong>Difficulty:</strong> {recipe.difficulty}</p>
            <p style={{ margin: "4px 0", fontSize: "14px" }}><strong>Rating:</strong> ⭐ {recipe.rating}</p>
            <p style={{ margin: "4px 0", fontSize: "14px" }}><strong>Calories:</strong> {recipe.caloriesPerServing} kcal</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
