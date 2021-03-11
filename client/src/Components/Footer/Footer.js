import React from "react";

const Footer = () => {
  const styles = {
    footerSpacingStyle: {
      marginTop: "180px"
    },
    footerStyle: {
      color: "red",
      fontFamily: ["RocknRoll One", "sans-serif"],
    },
  };
  return (
    <footer className="footer">
      <p className="text-center" style={styles.footerSpacingStyle}>
        Vincent <span style={styles.footerStyle}>BREH</span> Gines 2021
      </p>
    </footer>
  );
};

export default Footer;
