import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserRegistration from "./UserRegistration";
import FetchApi from "./FetchApi";
import Posts from "./components/Posts";
import Recipes from "./Recipes";
import Flipkart from "./flipkart/Flipkart";
import { MobileContext } from "./flipkart/MobileContext";
import Counter from "./hooks/usestate/Counter";
import Score from "./hooks/usestate/Score";
import Players from "./Players";

const PLAYERS = [
  { id: 1, name: "Virat Kohli", role: "Batsman", jersey: 18 },
  { id: 2, name: "MS Dhoni", role: "Wicket-Keeper / Batsman", jersey: 7 },
  { id: 3, name: "Rohit Sharma", role: "Opening Batsman", jersey: 45 },
  { id: 4, name: "Jasprit Bumrah", role: "Fast Bowler", jersey: 93 },
];

const SAMPLE_MOBILES = [
  { id: 1, brand: "Apple", model: "iPhone 15", price: 79999 },
  { id: 2, brand: "Samsung", model: "Galaxy S24", price: 74999 },
  { id: 3, brand: "OnePlus", model: "OnePlus 12", price: 64999 },
];

function CricketPage() {
  return (
    <div>
      <h2>Cricket Score &amp; Players</h2>
      <Score />
      <hr />
      <Counter />
      <hr />
      <Players players={PLAYERS} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "sans-serif", margin: "20px" }}>
        <h2>React Learning Portal</h2>

        {/* Navigation Bar with All Router Links */}
        <nav
          style={{
            padding: "10px 0",
            borderBottom: "2px solid #ddd",
            marginBottom: "20px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link> |
          <Link to="/register">Registration</Link> |
          <Link to="/users">Users API</Link> |
          <Link to="/posts">Posts API</Link> |
          <Link to="/recipes">Recipes API</Link> |
          <Link to="/flipkart">Flipkart Context</Link> |
          <Link to="/cricket">Cricket</Link>
        </nav>

        {/* All Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/users" element={<FetchApi />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route
            path="/flipkart"
            element={
              <MobileContext.Provider value={SAMPLE_MOBILES}>
                <Flipkart />
              </MobileContext.Provider>
            }
          />
          <Route path="/cricket" element={<CricketPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
