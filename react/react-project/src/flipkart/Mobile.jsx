import { useContext } from "react";
import { MobileContext } from "./MobileContext";

function Mobile() {
  const mobiles = useContext(MobileContext) || [];

  return (
    <div>
      <h3>Mobile Page</h3>
      {mobiles.length > 0 ? (
        mobiles.map((item) => (
          <div key={item.id} style={{ borderBottom: "1px solid #ddd", padding: "6px 0" }}>
            <h4>{item.brand} - {item.model}</h4>
            <p>Price: ₹{item.price}</p>
          </div>
        ))
      ) : (
        <p>No mobiles found in context.</p>
      )}
    </div>
  );
}

export default Mobile;
