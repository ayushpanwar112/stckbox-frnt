import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faQuora,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const EndSection = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about-us/" },
    { name: "Blogs", path: "/blogs/" },
    { name: "Partner with us", path: "partner-with-us/" },
    { name: "Career", path: "/careers/" },
    { name: "Media", path: "/media/" },
    { name: "Contact Us", path: "/contact-us/" },
    { name: "Investor Charter", path: "/investor-charter/" },
  ];

  const products = [
    { name: "Expert Advice", path: "/expert-advice/" },
    { name: "Portfolio Screener", path: "/portfolio-screener/" },
    { name: "Ready Made StockBox", path: "/readymade-stockbox/" },
    { name: "Stocks Screener", path: "/stock-screener/" },
    { name: "Portfolio Hedger", path: "/portfolio-hedger/" },
    { name: "FII/DII Investment", path: "/fii-dii-investments/" },
  ];

  const socialLinks = [
    { icon: faFacebook, link: "https://facebook.com/stockbox", color: "#1877F2" },
    { icon: faTwitter, link: "https://twitter.com/stockboxtech", color: "#1DA1F2" },
    { icon: faInstagram, link: "https://instagram.com/stockboxtech", color: "#C13584" },
    { icon: faLinkedin, link: "https://linkedin.com/company/stockbox-technologies-pvt-ltd", color: "#0A66C2" },
    { icon: faYoutube, link: "https://youtube.com/@stockboxtech", color: "#FF0000" },
    { icon: faQuora, link: "https://quora.com/profile/Stockbox-Technologies-1", color: "#B92B27" },
  ];

  return (
    <footer className=" text-white w-full font-plus-jakarta-sans overflow-x-hidden">
      <hr className="h-[2px] mb-12 md:mb-[99px] w-full opacity-10" />

      <div className="container mx-auto px-4">
        {/* Mobile Accordion Layout */}
        <div className="lg:hidden">
          {/* Logo and Social */}
          <div className="flex flex-col items-center mb-8 ">
            <img
              src={logo}
              alt="StockBox Logo"
              className="  hover:scale-105 transition-transform duration-300"
            />
            <p className="text-lg font-light mt-4">Follow us</p>
           <div className="flex gap-4 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ebff86] transform hover:scale-110 transition-all duration-300"
                  style={{ color: social.color }}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Accordion Sections */}
          <div className="space-y-6">
            {/* Products */}
            <details className="group">
              <summary className="flex justify-between items-center list-none text-xl font-bold py-2 border-b border-gray-800 cursor-pointer">
                Products
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul className="space-y-3 mt-3 pl-4">
                {products.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-[#ebff86] flex items-center group transition-colors duration-300"
                    >
                      <span>{item.name}</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 text-sm"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            {/* Company */}
            <details className="group">
              <summary className="flex justify-between items-center list-none text-xl font-bold py-2 border-b border-gray-800 cursor-pointer">
                Company
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul className="space-y-3 mt-3 pl-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-[#ebff86] flex items-center group transition-colors duration-300"
                    >
                      <span>{item.name}</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 text-sm"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            {/* Support */}
            <details className="group" open>
              <summary className="flex justify-between items-center list-none text-xl font-bold py-2 border-b border-gray-800 cursor-pointer">
                Support
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="space-y-4 mt-3 pl-4">
                <Link
                  to="#"
                  className="text-gray-400 hover:text-[#ebff86] transition-colors duration-300 block"
                >
                  FAQ
                </Link>

                <div>
                  <h3 className="text-gray-400">Customer Care Number</h3>
                  <div className="space-y-1 mt-1">
                    <a
                      href="tel:+917217019005"
                      className="text-white hover:text-[#ebff86] block transition-colors duration-300"
                    >
                      +91 72170 19005
                    </a>
                    <a
                      href="tel:+917217019001"
                      className="text-white hover:text-[#ebff86] block transition-colors duration-300"
                    >
                      +91 72170 19001
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-400">Timing</h3>
                  <p className="text-white">Monday- Saturday</p>
                  <p className="text-white">(10am – 6pm)</p>
                </div>

                <div>
                  <h3 className="text-gray-400">Email us:</h3>
                  <a
                    href="mailto:customercare@stockboxtech.com"
                    className="text-white hover:text-[#ebff86] block transition-colors duration-300"
                  >
                    customercare@stockboxtech.com
                  </a>
                  <a
                    href="mailto:support@stockboxtech.com"
                    className="text-white hover:text-[#ebff86] block transition-colors duration-300"
                  >
                    support@stockboxtech.com
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Desktop Layout */}
        <div></div>
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info & Social */}
          <div className="space-y-1 flex flex-col items-center w-full">
            <img
              src={logo}
              alt="StockBox Logo"
              className=" hover:scale-105 transition-transform duration-300"
            />
            <p className="text-lg font-light">Follow us</p>
           <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ebff86] transform hover:scale-110 transition-all duration-300"
                  style={{ color: social.color }}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <nav className="space-y-6">
            <h2 className="text-xl font-bold">Products</h2>
            <ul className="space-y-4">
              {products.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#ebff86] flex items-center group transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav className="space-y-6">
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#ebff86] flex items-center group transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Support</h2>
            <div className="space-y-6">
              <Link
                to="#"
                className="text-gray-400 hover:text-[#ebff86] transition-colors duration-300"
              >
                FAQ
              </Link>

              <div className="space-y-4">
                <h3 className="text-gray-400">Customer Care Number</h3>
                <div className="space-y-2">
                  <a
                    href="tel:+917217019005"
                    className="text-white hover:text-[#ebff86] block transition-colors duration-300"
                  >
                    +91 72170 19005
                  </a>
                  <a
                    href="tel:+917217019001"
                    className="text-white hover:text-[#ebff86] block transition-colors duration-300"
                  >
                    +91 72170 19001
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-gray-400">Timing</h3>
                <p className="text-white">Monday- Saturday</p>
                <p className="text-white">(10am – 6pm)</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-gray-400">Email us:</h3>
                <a
                  href="mailto:customercare@stockboxtech.com"
                  className="text-white hover:text-[#ebff86] block transition-colors duration-300"
                >
                  customercare@stockboxtech.com
                </a>
                <a
                  href="mailto:support@stockboxtech.com"
                  className="text-white hover:text-[#ebff86] block transition-colors duration-300"
                >
                  support@stockboxtech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SEBI & Company Information */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 md:ml-9">
          {/* SEBI Registration Details */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg font-bold">
              SEBI Registered Research Analyst Details
            </h2>
            <dl className="space-y-3 md:space-y-4">
              {[
                {
                  term: "Registered Name",
                  desc: "Stockbox Technologies Pvt. Ltd.",
                },
                { term: "Type of Registration", desc: "Non-Individual" },
                { term: "Registration Number", desc: "INH100008799" },
                {
                  term: "Registration Validity",
                  desc: "October 08, 2021 -Perpetual",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <dt className="text-white font-medium">{item.term}</dt>
                  <dd className="text-gray-400">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Company Details */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg font-bold">Stockbox Technologies Pvt. Ltd.</h2>
            <address className="not-italic space-y-3 md:space-y-4">
              <div className="space-y-1">
                <span className="text-white font-medium">Address</span>
                <p className="text-gray-400">
                  9, Lane No.-3, Doon Enclave Extension,
                  <br />
                  Subhash Nagar, Dehradun, Uttarakhand
                </p>
              </div>
              {[
                { label: "Email", value: "stockboxtech@example.com" },
                { label: "Phone", value: "+91-135-3506155" },
                { label: "CIN", value: "U72900UR2021PTC012142" },
                { label: "GST", value: "05ABFCS5905F1ZH" },
                { label: "BSE Enlistment Number", value: "5487" },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <span className="text-white font-medium">{item.label}</span>
                  <p className="text-gray-400">{item.value}</p>
                </div>
              ))}
            </address>
          </div>

          {/* Officers Contact */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg font-bold">Officers Contact</h2>
            {[
              {
                term: "Principal Officer",
                desc: "Radhey Shyam Chauhan",
                email: "rschauhan@stockboxtech.com",
                phone: "+91-9997098943",
              },
              {
                term: "Grievance Officer",
                desc: "Shushant Singh",
                email: "grievance@stockboxtech.com",
                phone: "+91-0135-3506155",
              },
              {
                term: "Compliance Officer",
                desc: "Shushant Singh",
                email: "compliance@stockboxtech.com",
                phone: "+91-0135-350615",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-3 md:space-y-4">
                <div className="space-y-1 md:space-y-2">
                  <span className="text-white font-medium">{item.term}</span>
                  <p className="text-gray-400">{item.desc}</p>
                  <div className="space-y-1">
                    <p className="text-gray-400">
                      <span>Email: </span>
                      {item.email}
                    </p>
                    <p className="text-gray-400">
                      <span>Phone: </span>
                      {item.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-12 md:mt-20 text-center space-y-4 text-sm text-gray-400">
          <p className="max-w-4xl mx-auto">
            Warning- "Investment in securities market are subject to market
            risks. Read all the related documents carefully before investing."
          </p>
          <p className="max-w-7xl mx-auto">
            Disclaimer-"Registration granted by SEBI & BASL and certification
            from NISM in no way guarantee performance of the intermediary or
            provide any assurance of returns to investors."
          </p>
        </div>
      </div>

      {/* Footer Bottom - with responsive line break */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 py-6 mt-6 md:mt-10 border-t border-gray-800">
        <p className="text-sm md:text-base mb-2 md:mb-0 text-center md:text-left">
          Copyright @2025 Stockbox Technologies Pvt. Ltd.<br className="md:hidden" /> All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <Link to="#" className="text-sm md:text-base hover:text-[#ebff86]">
            Terms of Service
          </Link>
          <Link to="#" className="text-sm md:text-base hover:text-[#ebff86]">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default EndSection;