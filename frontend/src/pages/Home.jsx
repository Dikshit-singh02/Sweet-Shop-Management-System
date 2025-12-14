import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { token } = useAuth();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🍬 Sweet Shop Management System</h1>
      <p style={styles.subtitle}>
        Manage sweets, inventory, and purchases easily using our system.
      </p>

      <div style={styles.actions}>
        {!token ? (
          <>
            <Link to="/login" style={styles.btn}>
              Login
            </Link>
            <Link to="/register" style={styles.btnOutline}>
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={styles.btn}>
              Go to Dashboard
            </Link>
            <Link to="/sweets" style={styles.btnOutline}>
              View Sweets
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "80vh",
    backgroundColor: "#f9fafb",
    color: "#222",
    textAlign: "center",
    padding: "60px 20px",
    border: "1px solid #ddd"
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "10px",
    color: "#000"
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.9,
    color: "#333"
  },
  actions: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },
  btn: {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px"
  },
  btnOutline: {
    padding: "10px 20px",
    border: "2px solid #4caf50",
    color: "#4caf50",
    textDecoration: "none",
    borderRadius: "6px"
  }
};

export default Home;
