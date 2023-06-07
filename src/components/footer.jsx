import React from "react";
import "../../src/style/footer.css";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>Kargo Bedava</div>
      <div className="icons">
        <p>
          <BsFacebook />
        </p>
        <p>
          <AiFillInstagram />
        </p>
        <p>
          <AiFillTwitterCircle />
        </p>
        <p>
          <AiFillYoutube />
        </p>
      </div>
      <div>0850 222 22 22</div>
    </footer>
  );
};

export default Footer;
