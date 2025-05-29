
import Form from '../components/Form';

const Partnet = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 ">
      <div className="max-w-4xl  shadow-lg rounded-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Partner with Us
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-100 text-center">
          Let’s Talk
        </p>

        {/* Description */}
        <p className="text-gray-200 leading-relaxed mt-4 text-center">
          Through a partnership with <span className="font-semibold text-blue-600">Stockbox</span>, you can take your company to the next level. 
          We appreciate and comprehend how our relationship works, so we give our Authorized Person the independence and equality they deserve. 
          Aside from that, we offer unmatched expertise and superior market analysis to keep you ahead of the curve, benefiting your clients. 
          With the support of a top financial services provider, a partnership also brings mentorship and guidance from a trusted friend.
        </p>

        {/* Form */}
        <div className="mt-8">
          <Form title="Partner with Us" />
        </div>

        {/* Google Map */}
        <div className="mt-10">
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.99136057951!2d77.98563357556333!3d30.294307574798722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bbd7c22aa11%3A0xfded64e3634e17b1!2sStockbox%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743601890768!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Partnet;
