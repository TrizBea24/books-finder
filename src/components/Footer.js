import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  let copyright = new Date();
  let update = copyright.getFullYear();
  let year = 2022

  return (
      <div className="copyright">
        { //Check if actual year is 2022
        (year === update)
          ? <p>&copy; 2022 Beatriz García Martín</p>
          : <p>&copy; 2022 - {update} Beatriz García Martín</p> 
        }
      </div>
  );
};

export default Footer;
