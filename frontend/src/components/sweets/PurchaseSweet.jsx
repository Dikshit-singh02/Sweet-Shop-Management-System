import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { purchaseSweet } from "../../api/sweetApi";

const PurchaseSweet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePurchase = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await purchaseSweet(id);
      setSuccess("Sweet purchased successfully!");
      setTimeout(() => navigate("/sweets"), 1200);
    } catch (err) {
      setError(err.message || "Purchase failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Purchase Sweet</h2>

      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}

      <button onClick={handlePurchase} disabled={loading}>
        {loading ? "Processing..." : "Confirm Purchase"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "350px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center"
  },
  error: {
    color: "red"
  },
  success: {
    color: "green"
  }
};

export default PurchaseSweet;
