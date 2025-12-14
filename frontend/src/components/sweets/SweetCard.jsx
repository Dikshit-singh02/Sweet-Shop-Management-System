import { Link } from "react-router-dom";
import { deleteSweet } from "../../api/sweetApi";
import useAuth from "../../hooks/useAuth";

const SweetCard = ({ sweet, onDelete }) => {
  const { token, role } = useAuth();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this sweet?")) return;

    try {
      await deleteSweet(sweet._id);
      alert("Sweet deleted successfully");
      onDelete(sweet._id);
    } catch (err) {
      alert(err.message || "Delete failed");
    }
  };

  return (
    <div style={styles.card}>
      <h3>{sweet.name}</h3>
      <p><strong>Category:</strong> {sweet.category}</p>
      <p><strong>Price:</strong> ₹{sweet.price}</p>
      <p><strong>Quantity:</strong> {sweet.quantity}</p>

      <div style={styles.actions}>
        {token && (
          <Link to={`/purchase/${sweet._id}`} style={styles.btn}>
            Purchase
          </Link>
        )}

        {role === "admin" && (
          <>
            <Link to={`/edit-sweet/${sweet._id}`} style={styles.editBtn}>
              Edit
            </Link>

            <button onClick={handleDelete} style={styles.deleteBtn}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    width: "250px"
  },
  actions: {
    display: "flex",
    gap: "8px",
    marginTop: "10px",
    flexWrap: "wrap"
  },
  btn: {
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "5px 10px",
    textDecoration: "none",
    borderRadius: "4px"
  },
  editBtn: {
    backgroundColor: "#2196f3",
    color: "#fff",
    padding: "5px 10px",
    textDecoration: "none",
    borderRadius: "4px"
  },
  deleteBtn: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default SweetCard;
