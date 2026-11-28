import { useEffect, useState } from "react";

function Fetch_Api() {
  const [userdata, setuserdata] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setuserdata(data.users))
      .catch((error) => console.log(error));
  }, []);

  // Filter users based on first or last name
  const filteredUsers = userdata.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  return (
    <>
      <h2>Fetch_Api</h2>

      {/* Search Input Box */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px 12px",
          marginBottom: "16px",
          width: "250px",
          fontSize: "14px",
        }}
      />

      <table border={2} cellPadding={8} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id} align="center">
                <td>{user.id}</td>
                <td>
                  <img src={user.image} alt={user.firstName} width={40} height={40} />
                </td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} align="center">No user found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Fetch_Api;
