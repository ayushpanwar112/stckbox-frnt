import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import toast from "react-hot-toast";
import PropagateLoader from "react-spinners/PropagateLoader";


const Form = (title) => {
  const [showForm, setShowForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    title: title /* send this according to components */,
    email: null,
    name: null,
    phone: null,
    message: null,
    subject: null,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/sendmail`,
        formData,
        {
          headers: { "Content-Type": "application/json" }, // Ensure JSON format
        }
      );
      if (response.data.success === true) {
        toast.success(response.data.message);
        console.log(response.data.message);
        setShowForm(false);
        setformData({
          title: title /* send this according to components */,
          email: null,
          name: null,
          phone: null,
          message: null,
          subject: null,
        });
        setLoading(false);
      
        
      }
    } catch (err) {
      console.log("err in sending email", err);
      setLoading(false);
      toast.error("Failed to send email");
    }

    // Hide form and show thank-you message
  };

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".div1, .div2, .div3, .div4", {
      y: 50,
      duration: 2,
      delay: 0.7,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from(".submitbtn", {
      duration: 4,
      delay: 2,
      opacity: 0,
    });

    gsap.from(".LoginText", {
      y: 82,
      duration: 1.7,
      delay: 0.7,
      opacity: 0,
    });
    gsap.from(".WelcomeText", {
      x: -135,
      duration: 2,
      delay: 0.7,
      opacity: 0,
    });
    gsap.from(".Slogan", {
      x: 135,
      duration: 2,
      delay: 0.7,
      opacity: 0,
    });
  });
  
  return (
    <div>
      {showForm ? (
        <div className="flex flex-col justify-start text-white font-bold align-baseline mt-[5vh]">
          <h1 className="WelcomeText font-serif text-center text-[4vh]">
            Welcome To Stockbox
          </h1>
          <p className="Slogan text-center text-neutral-500 text-[2vh]">
            Please submit the form regarding any queries
          </p>

          <div className="form-section flex justify-center items-center mt-10 text-center w-full text-white align-baseline">
            <form onSubmit={handleFormSubmit}>
              <fieldset className="flex flex-col gap-4 rounded-lg p-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="div1 form-group flex flex-col">
                    <label htmlFor="name" className="text-left">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      required
                      className="text-neutral-100 rounded-lg border border-white p-3 h-8"
                      value={formData.name}
                      onChange={(e) =>
                        setformData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="div2 form-group flex flex-col">
                    <label htmlFor="phone" className="text-left">
                      Contact Number:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your number"
                      required
                      className="radius border text-neutral-100 rounded-lg p-3 h-8"
                      value={formData.phone}
                      onChange={(e) =>
                        setformData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="div3 form-group flex flex-col">
                    <label htmlFor="email" className="text-left">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                      className="radius border text-neutral-100 rounded-lg p-3 h-8"
                      value={formData.email}
                      onChange={(e) =>
                        setformData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="div4 form-group flex flex-col">
                    <label htmlFor="subject" className="text-left">
                      Subject:
                    </label>
                    <input
                      id="subject"
                      placeholder="Enter your subject"
                      required
                      className="radius border rounded-lg pl-3 p-2  text-neutral-100 h-10"
                      value={formData.subject}
                      onChange={(e) =>
                        setformData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>
                  <div className="div4 form-group flex flex-col">
                    <label htmlFor="message" className="text-left">
                      Your Message:
                    </label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      required
                      className="radius border rounded-lg pl-3 text-start  text-neutral-100 h-20"
                      value={formData.message}
                      onChange={(e) =>
                        setformData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                {loading ? (<PropagateLoader color='#028721' />
                ) : (
                  <button
                  type="submit"
                  className="submitbtn rounded-lg flex bg-[#028721] w-full border text-xl items-center text-white justify-center text-center h-8 hover:bg-green-900 hover:scale-105 active:scale-95 ease-in-out cursor-pointer"
                >
                  Submit
                </button>
                )}
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      ) : (
        // Thank you message
        <div className=" flex items-center justify-center w-full h-full bg-opacity-50 my-[10vh]">
          <div className="thankyou-container bg-[#e8edef] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
            <p className="text-gray-600 mt-2">
              Your form has been submitted successfully.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
