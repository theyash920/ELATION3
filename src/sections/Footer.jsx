import { socialImgs } from "../constants";
import elationLogo from "../images/elationlogo.jpg";
const Footer = () => {
  return (
    <footer className="footer w-full">
      <div className="w-full max-w-16xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Section - Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={elationLogo}
                alt="Elation Logo"
                style={{ height: "64px", width: "56px", borderRadius: "12px", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", marginRight: "16px", objectFit: "cover" }}
              />
            </div>
            {/* Contact list with icons */}
            <div className="mt-1 space-y-3">
              {/* Location */}
              <div className="flex items-center gap-3 text-white-50 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5"
                >
                  <path d="M12 21s7-4.438 7-10a7 7 0 1 0-14 0c0 5.562 7 10 7 10z" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
                <span>New Delhi, India</span>
              </div>

              {/* Email */}
              <a
                href="mailto:info@elation.digital"
                className="flex items-center gap-3 text-white-50 text-sm hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                <span>info@elation.digital</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919097290982"
                className="flex items-center gap-3 text-white-50 text-sm hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5"
                >
                  <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h2a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.47-1.11a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91-9097290982</span>
              </a>
            </div>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex justify-center">
           
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex justify-end">
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
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white-50/20 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white-50">
            <b>© {new Date().getFullYear()} Elation. All rights reserved.</b>
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="#privacy" className="text-white-50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-white-50 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#refund" className="text-white-50 hover:text-white transition-colors">
              Refund Policy
            </a>
          </div>

          <p className="text-white-50">
            Made with <span className="text-red-500">❤</span> by <span className="text-yellow-400">Yash Chopra</span>
            <span className="block mt-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yash-chopra-3b6416303"
                target="_blank"
                rel="noopener noreferrer"
                className="icon !size-9 inline-flex align-middle mr-2"
                aria-label="Yash LinkedIn"
                title="Yash LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-white">
                  <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM7.119 20.452H3.558V9.039h3.561v11.413zM5.339 7.557a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM20.452 20.452h-3.559v-5.556c0-1.326-.024-3.03-1.848-3.03-1.85 0-2.133 1.446-2.133 2.939v5.647h-3.558V9.039h3.414v1.561h.049c.476-.9 1.637-1.848 3.37-1.848 3.606 0 4.271 2.373 4.271 5.457v6.243z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/+919205061898"
                target="_blank"
                rel="noopener noreferrer"
                className="icon !size-9 inline-flex align-middle"
                aria-label="WhatsApp"
                title="WhatsApp"
              > 
                {/* Inline SVG so we can control color on dark backgrounds */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;