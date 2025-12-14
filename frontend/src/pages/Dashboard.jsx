import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { token } = useAuth();

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>

      {token ? (
        <>
          <p>Welcome to Sweet Shop Management System 🎉</p>

          <div style={styles.links}>
            <Link to="/sweets" style={styles.link}>
              View Sweets
            </Link>

            <Link to="/add-sweet" style={styles.link}>
              Add Sweet (Admin)
            </Link>
          </div>
        </>
      ) : (
        <p>Please login to access the dashboard</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    textAlign: "center"
  },
  links: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  link: {
    padding: "10px 15px",
    backgroundColor: "#4caf50",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px"
  }
};

export default Dashboard;
