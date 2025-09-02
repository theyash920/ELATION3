import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            socialImg.link ? (
              <a
                key={index}
                className="icon"
                href={socialImg.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            ) : (
              <div key={index} className="icon">
                <img src={socialImg.imgPath} alt="social icon" />
              </div>
            )
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Aradhya <b>Bhartiya</b>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
