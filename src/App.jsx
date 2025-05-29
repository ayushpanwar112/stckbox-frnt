import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EndSection from "./components/EndSection";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Aboutus from "./pages/Aboutus";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Blog from "./pages/Blog";
import ExpertAdvice from "./pages/ExpertAdvice";
import PortfolioScreener from "./pages/PortfolioScreener";
import ReadyMade from "./pages/ReadyMade";
import StockScreener from "./pages/StockScreener";
import PortfolioHedger from "./pages/PortfolioHedger";
import Investments from "./pages/Investments";
import ContactUs from "./pages/ContactUs";
import Blogpost from "./pages/Blogpost";
import InvestPage from "./pages/InvestPage";
import Careers from "./pages/Career";
import { Toaster } from "react-hot-toast";
import Media from "./pages/Media";
import Report from "./pages/Report";
import Partnet from "./pages/Partnet";
import ScrollToTop from "./components/Scroll_to_top";
import ShowIpos from "./pages/ShowIpos";

const App = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const cursorBorder = document.querySelector(".cursor-border");

    // Smooth cursor movement
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursorBorder, {
        x: e.clientX - cursorBorder.offsetWidth / 2,
        y: e.clientY - cursorBorder.offsetHeight / 2,
        duration: 0.15,
        ease: "power1.in",
      });
    });

    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, select"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursorBorder, {
          scale: 1.5,
          opacity: 0.8,
          duration: 0.3,
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursorBorder, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen font-[plus-jakarta-sans] Display">
      <Toaster
            position="top-center"
            reverseOrder={false}/>
      <div className=" hidden md:block cursor-border fixed w-10 h-10 rounded-full border border-[#ebff86] pointer-events-none z-50 mix-blend-difference backdrop-blur-sm "></div>
      <div className="">
        <Router>  {" "}
        {/* Container  lg:mx-[140px] md:mx-[10px]*/}
        <ScrollToTop />
        <header className="h-16">
          <Navbar />
        </header>
        <main className="mt-1 ">
      
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Download" element={<Download />} />
            <Route path="/about-us/" element={<Aboutus />} />
            <Route path="/blogs/" element={<Blog/>} />
            <Route path="/expert-advice/" element={<ExpertAdvice/>} />
            <Route path="/portfolio-screener/" element={<PortfolioScreener/>} />
            <Route path="/readymade-stockbox/" element={<ReadyMade/>} />
            <Route path="/stock-screener/" element={<StockScreener/>} />
            <Route path="/portfolio-hedger/" element={<PortfolioHedger/>} />
            <Route path="/fii-dii-investments/" element={<Investments/>} />
            <Route path="/contact-us/" element={<ContactUs/>} />
            <Route path="/blogpost/:id" element={<Blogpost />} />
            <Route path="/investor-charter/" element={<InvestPage/>} />
            <Route path="/careers/" element={<Careers/>} />
            <Route path="/media/" element={<Media/>}/>
            <Route path="/report" element={<Report/>}/>
            <Route path="partner-with-us/" element={<Partnet/>}/>
            <Route path="/comapny-ipos" element={<ShowIpos/>}/>

          </Routes>
        </main>
        <footer>
          <EndSection />
        </footer>
        </Router>
      </div>
    </div>
  );
};
export default App;
