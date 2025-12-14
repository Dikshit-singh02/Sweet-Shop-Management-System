import { useState } from "react";
import { addSweet } from "../../api/sweetApi";

const AddSweet = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await addSweet({
        name: form.name,
        category: form.category,
        price: Number(form.price),
        quantity: Number(form.quantity)
      });

      setSuccess("Sweet added successfully!");
      setForm({ name: "", category: "", price: "", quantity: "" });
    } catch (err) {
      setError(err.message || "Failed to add sweet");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add Sweet (Admin)</h2>

      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Sweet Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          min="0"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          required
          min="0"
        />

        <button type="submit">Add Sweet</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  error: {
    color: "red"
  },
  success: {
    color: "green"
  }
};

export default AddSweet;
