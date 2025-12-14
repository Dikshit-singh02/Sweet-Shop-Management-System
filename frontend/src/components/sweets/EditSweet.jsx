import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateSweet, getAllSweets } from "../../api/sweetApi";

const EditSweet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Load existing sweet details
  useEffect(() => {
    const fetchSweet = async () => {
      try {
        const sweets = await getAllSweets();
        const sweet = sweets.find((s) => s._id === id);

        if (!sweet) {
          setError("Sweet not found");
          setLoading(false);
          return;
        }

        setForm({
          name: sweet.name,
          category: sweet.category,
          price: sweet.price,
          quantity: sweet.quantity
        });

        setLoading(false);
      } catch (err) {
        setError("Failed to load sweet");
        setLoading(false);
      }
    };

    fetchSweet();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await updateSweet(id, {
        name: form.name,
        category: form.category,
        price: Number(form.price),
        quantity: Number(form.quantity)
      });

      alert("Sweet updated successfully");
      navigate("/sweets");
    } catch (err) {
      setError(err.message || "Update failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h2>Edit Sweet</h2>

      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          min="0"
          required
        />

        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          min="0"
          required
        />

        <button type="submit">Update Sweet</button>
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
  }
};

export default EditSweet;
