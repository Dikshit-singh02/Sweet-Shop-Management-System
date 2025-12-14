const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Sweet Shop Management System
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "40px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    borderTop: "1px solid #ddd"
  },
  text: {
    margin: 0,
    color: "#555",
    fontSize: "14px"
  }
};

export default Footer;
