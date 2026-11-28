import { useState } from "react";

function UserRegistration() {
  const [users, setUsers] = useState([
    { id: 1, name: "Shyam", email: "shyam@example.com", phone: "9876543210" },
    { id: 2, name: "Alan", email: "alan@example.com", phone: "9123456780" },
  ]);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please enter all details!");
      return;
    }

    if (editId !== null) {
      setUsers(
        users.map((u) => (u.id === editId ? { ...u, ...formData } : u))
      );
      setEditId(null);
    } else {
      setUsers([...users, { id: Date.now(), ...formData }]);
    }

    setFormData({ name: "", email: "", phone: "" });
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setFormData({ name: user.name, email: user.email, phone: user.phone });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    if (editId === id) {
      setEditId(null);
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div style={{ margin: "20px", fontFamily: "sans-serif" }}>
      <h2>User Registration</h2>

      {/* Basic HTML Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        &nbsp;
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        &nbsp;
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        &nbsp;
        <button type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
        {editId !== null && (
          <>
            &nbsp;
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setFormData({ name: "", email: "", phone: "" });
              }}
            >
              Cancel
            </button>
          </>
        )}
      </form>

      {/* Simple Table */}
      <table border={1} cellPadding={8} style={{ borderCollapse: "collapse", width: "600px" }}>
        <thead>
          <tr bgcolor="#e0e0e0">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id} align="center">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  &nbsp;
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} align="center">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserRegistration;
