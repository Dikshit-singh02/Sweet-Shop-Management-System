import { useEffect, useState } from "react";
import { getAllSweets } from "../../api/sweetApi";
import SweetCard from "./SweetCard";

const SweetList = () => {
  const [sweets, setSweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch sweets on load
  useEffect(() => {
    const fetchSweets = async () => {
      try {
        const data = await getAllSweets();
        setSweets(data);
      } catch (err) {
        setError(err.message || "Failed to load sweets");
      } finally {
        setLoading(false);
      }
    };

    fetchSweets();
  }, []);

  // Remove sweet from UI after delete
  const handleDelete = (id) => {
    setSweets((prev) => prev.filter((sweet) => sweet._id !== id));
  };

  if (loading) return <p style={styles.center}>Loading sweets...</p>;
  if (error) return <p style={{ ...styles.center, color: "red" }}>{error}</p>;

  return (
    <div style={styles.container}>
      <h2>Available Sweets</h2>

      {sweets.length === 0 ? (
        <p>No sweets available</p>
      ) : (
        <div style={styles.grid}>
          {sweets.map((sweet) => (
            <SweetCard
              key={sweet._id}
              sweet={sweet}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px"
  },
  center: {
    textAlign: "center",
    marginTop: "30px"
  }
};

export default SweetList;
