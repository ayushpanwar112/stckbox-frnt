import logo from "../assets/logo.png";
import Form from "../components/Form";
import "../components/Css/contact.css";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 md:px-10 py-8 md:py-10 w-full min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 md:-top-32 md:-left-32 w-64 h-64 md:w-96 md:h-96 rounded-full blur-xl md:blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 md:-bottom-32 md:-right-32 w-64 h-64 md:w-96 md:h-96  rounded-full blur-xl md:blur-3xl animate-pulse delay-300" />

      {/* Left Section */}
      <div className="md:w-1/3 p-4 md:p-8 lg:p-10 space-y-6 md:space-y-8 text-white w-full relative z-10">
        <div className="w-full flex justify-center md:justify-start">
          <div className="group relative w-fit max-w-[200px] md:max-w-none">
            <div className="absolute -inset-1 md:-inset-2 bg-[#1A2521] rounded-xl md:rounded-2xl blur-md md:blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            <img 
              src={logo} 
              alt="Company Logo" 
              className=" w-[26em] max-w-[180px] md:max-w-[270px] lg:max-w-[380px] h-auto transform hover:scale-105 transition-all duration-300 drop-shadow-xl" 
            />
          </div>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center md:text-left">
            Connect With Us
          </h2>
          
          <div className="space-y-4 text-base md:text-lg">
            <div className="flex items-start space-x-3">
              <div className="pt-1">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#ebff86]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#ebff86] mb-1 md:mb-2 text-sm md:text-base">Stockbox Technologies Pvt Ltd.</p>
                <p className="opacity-90 leading-relaxed text-sm md:text-base">
                  9, Lane No. 3, Doon Enclave Extension,<br />
                  Shimla Bypass Road, Dehradun<br />
                  <span className="font-medium text-[#ebff86] mt-1 block">Uttarakhand – 248171</span>
                </p>
              </div>
            </div>

            <div className="pt-4 md:pt-6">
              <a 
                href="mailto:customercare@stockboxtech.com"
                className="inline-flex items-center space-x-2 md:space-x-3 bg-white/5 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl hover:bg-white/10 transition-all duration-300 group flex-wrap"
              >
                <div className="p-1.5 md:p-2 bg-gradient-to-r from-[#ebff86] to-[#d3f81b] rounded-md md:rounded-lg group-hover:rotate-12 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-[#ebff86] group-hover:text-[#efff9e] transition-colors font-medium text-sm md:text-base break-all">
                  customercare@stockboxtech.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 p-4 md:p-8 lg:p-10 w-full max-w-3xl relative z-10">
        <div className="bg-white/10 backdrop-blur-lg md:backdrop-blur-2xl rounded-xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl md:shadow-2xl border border-white/5 md:border-white/10 transition-shadow duration-300">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10 bg-gradient-to-r from-[#ebff86] to-[#d3f81d] bg-clip-text text-transparent">
            Let's Talk
          </h2>
          
          <div className="animate-slide-up">
            <Form title="Contact us" />
          </div>
          
          <div className="mt-8 md:mt-12 space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white/90 mb-4 md:mb-6 flex items-center space-x-2">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span>Our Location</span>
            </h3>
            <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/5 md:border-2 md:border-white/10 shadow-md md:shadow-xl transition-transform">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.99136057951!2d77.98563357556333!3d30.294307574798722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bbd7c22aa11%3A0xfded64e3634e17b1!2sStockbox%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743601890768!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;