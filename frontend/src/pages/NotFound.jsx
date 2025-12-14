import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" style={styles.link}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  link: {
    marginTop: "20px",
    textDecoration: "none",
    color: "#4caf50",
    fontWeight: "bold"
  }
};

export default NotFound;
