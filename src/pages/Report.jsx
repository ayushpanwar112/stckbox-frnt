import { useEffect, useState } from "react";
import axios from "axios";

const Report = () => {
  const [pdfList, setPdfList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [currentPdf, setCurrentPdf] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    otp: ""
  });
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isotpsend, setIsotpsend] = useState({});
  const [backendPayload, setBackendPayload] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  

  useEffect(() => {
    const savedUser = localStorage.getItem("verifiedUser");
    if (savedUser) {
      setIsVerified(true);
    }
    fetchPdfs();
  }, []);

  useEffect(() => {
    setBackendPayload({
      phoneNumber: formData.contact,
      name: formData.name,
    });
    setIsotpsend({
      phoneNumber: formData.contact,
      otp: formData.otp,
    });
    
  }, [formData]);


  const fetchPdfs = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/pdf/all`);
      setPdfList(data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
      setError("Failed to load PDFs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.contact.trim()) errors.contact = "Contact number is required";
    else if (!/^\d{10}$/.test(formData.contact)) errors.contact = "Invalid contact number";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const generateOtp = async () => {

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setIsSendingOtp(true);
     const res =axios.post(`${import.meta.env.VITE_API_URL}/api/otp/request-otp`, backendPayload)
    setOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError("Failed to send OTP. Please try again.");
    } finally {
      setIsSendingOtp(false);
    }
  };

  
  const verifyOtp = async () => {
    if (!formData.otp.trim()) {
      setFormErrors({ otp: "OTP is required" });
      return;
    }
  
    try {
      setIsVerifying(true);
  
      // Send OTP verification request to the backend
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/otp/verify-otp`, isotpsend);
  
      // Handle successful verification
      if (response.status === 200) {
        localStorage.setItem(
          "verifiedUser",
          JSON.stringify({
            name: formData.name,
            contact: formData.contact,
            verifiedAt: new Date().toISOString(),
          })
        );
        setIsVerified(true);
        setShowForm(false);
        downloadPdf(currentPdf.url, currentPdf.name);
      } else {
        // Handle unexpected success response
        setError("Unexpected response from the server. Please try again.");
      }
    } catch (error) {
      // Handle errors from the backend
      if (error.response) {
        const { status, data } = error.response;
  
        if (status === 400) {
          setError(data.message || "Invalid OTP. Please try again.");
        } else if (status === 500) {
          setError("Server error. Please try again later.");
        } else {
          setError("Failed to verify OTP. Please try again.");
        }
      } else {
        // Handle network or other errors
        setError("Network error. Please check your connection and try again.");
      }
    } finally {
      setIsVerifying(false);
    }
  };


  const resetForm = () => {
    setFormData({ name: "", contact: "", otp: "" });
    setFormErrors({});
    setOtpSent(false);
    setGeneratedOtp("");
    setShowForm(false);
  };

  const downloadPdf = async (pdfUrl, originalName) => {
    try {
      const fullUrl = pdfUrl.startsWith('http') ? pdfUrl : 
                     `${import.meta.env.VITE_API_URL}${pdfUrl.startsWith('/') ? '' : '/'}${pdfUrl}`;
  
      const response = await axios.get(fullUrl, {
        responseType: 'blob',
      });
  
      const safeFilename = (originalName || 'document')
        .replace(/[^a-z0-9._-]/gi, '_')
        .replace(/_+/g, '_') + '.pdf';
  
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', safeFilename);
      document.body.appendChild(link);
      link.click();
  
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
  
    } catch (error) {
      console.error('Download failed:', error);
      setError(`Failed to download PDF: ${error.message}`);
    }
  };

  const handleDownloadClick = (pdf) => {
    if (isVerified) {
      downloadPdf(pdf.pdfUrl, pdf.originalName);
    } else {
      setCurrentPdf({ url: pdf.pdfUrl, name: pdf.originalName });
      setShowForm(true);
    }
  };

  return (
    <div className="min-h-screen  p-6">
      {/* Verification Modal */}
      {showForm && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Verification Required</h2>
            
            {!otpSent ? (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your name"
                    required
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Contact Number *</label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${formErrors.contact ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter 10-digit mobile number"
                    maxLength="10"
                    required
                  />
                  {formErrors.contact && <p className="text-red-500 text-xs mt-1">{formErrors.contact}</p>}
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={generateOtp}
                    disabled={isSendingOtp}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-400"
                  >
                    {isSendingOtp ? 'Sending...' : 'Send OTP'}
                  </button>
                  <button
                    onClick={resetForm}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <p className="text-sm text-gray-600">
                    OTP sent to {formData.contact}. Please enter it below.
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Enter OTP *</label>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${formErrors.otp ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter 4-digit OTP"
                    maxLength="4"
                  />
                  {formErrors.otp && <p className="text-red-500 text-xs mt-1">{formErrors.otp}</p>}
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={verifyOtp}
                    disabled={isVerifying}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:bg-green-400"
                  >
                    {isVerifying ? 'Verifying...' : 'Verify OTP'}
                  </button>
                  <button
                    onClick={() => {
                      setOtpSent(false);
                      setFormErrors({});
                    }}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Document Library</h1>
          <p className="text-gray-200 mt-2">Browse and download all uploaded PDF documents</p>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        ) : Object.keys(pdfList).length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No PDFs uploaded yet</h3>
            <p className="mt-1 text-gray-500">Upload your first document to get started.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.keys(pdfList).map((title) => (
              <div key={title} className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-200">{title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {pdfList[title].map((pdf, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center mb-3">
                          <svg className="flex-shrink-0 h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-gray-100 truncate">{pdf.originalName}</p>
                           {/*  <p className="text-xs text-gray-500">{new Date(pdf.createdAt).toLocaleDateString()}</p> */}
                          </div>
                        </div>
                        <div className="mt-auto">
                        <button
  onClick={() => handleDownloadClick(pdf)}
  className={`w-full inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
    !isVerified ? 'filter blur-sm' : 'hover:bg-green-700'
  }`}
>
  Download
  <svg className="ml-1 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;