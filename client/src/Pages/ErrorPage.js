import React from "react";
import Hero from "../Components/Hero/Hero";
import image from "../Components/images/face.jpg"

const ErrorPage = () => {
  const styles = {
    stylesTitle: {
      color: "white",
    }
  }
  return (
    <div>
      <Hero backgroundImage={image}>
       <br/><br/><br/><br/><br/><br/><br/><br/> 
      <h1 className="text-center" style={styles.stylesTitle}>404 Page Not Found</h1>
      </Hero>
    </div>
  );
};

export default ErrorPage;
