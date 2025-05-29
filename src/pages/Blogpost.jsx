import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./blogpost.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClock, 
  faUser, 
  faBookmark, 
  faShareAlt, 
  faArrowLeft 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faWhatsapp, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { Helmet } from "react-helmet";

const Blogpost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    async function fetchBlogData() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        if (res.data?.data) {
          setBlogData(res.data.data);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    }
    fetchBlogData();
  }, [id]);

  const shareUrl = window.location.href;
  const title = blogData?.title || "Check out this blog post";
  
  const socialLinks = [
  {
    name: "Facebook",
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    icon: faFacebookF,
    bgColor: "bg-[#1877F2]" // Facebook blue
  },
  {
    name: "Twitter",
    url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    icon: faTwitter,
    bgColor: "bg-[#1DA1F2]" // Twitter blue
  },
  {
    name: "WhatsApp",
    url: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + shareUrl)}`,
    icon: faWhatsapp,
    bgColor: "bg-[#25D366]" // WhatsApp green
  },
  {
    name: "LinkedIn",
    url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`,
    icon: faLinkedinIn,
    bgColor: "bg-[#0A66C2]" // LinkedIn blue
  }
];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Here you would typically also save to localStorage or make an API call
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const estimateReadingTime = (content) => {
    if (!content) return "1 min read";
    const text = content.replace(/<[^>]*>/g, '');
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    return `${readingTime} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md mx-auto bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Error Loading Blog</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Try Again
          </button>
          <button 
            onClick={() => navigate('/blogs')}
            className="mt-4 px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium block w-full"
          >
            Back to Blog List
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blogData.title} | Your Blog Name</title>
        <meta name="description" content={blogData.content?.replace(/<[^>]*>/g, '').substring(0, 160) + '...'} />
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={blogData.content?.replace(/<[^>]*>/g, '').substring(0, 160) + '...'} />
        {blogData.thumbImage?.secure_url && (
          <meta property="og:image" content={blogData.thumbImage.secure_url} />
        )}
      </Helmet>
          
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/blogs')}
          className="flex items-center text-[#ebff86] hover:text-[#acbd55] mb-6 transition-colors font-medium"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to All Blogs
        </button>

        {/* Article Container */}
        <article className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Featured Image */}
          {blogData.thumbImage?.secure_url && (
            <div className="w-full h-80 md:h-96 overflow-hidden">
              <img
                src={blogData.thumbImage.secure_url}
                alt={blogData.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="px-6 py-8 md:px-10 md:py-12">
            {/* Category Tag */}
            {blogData.category && (
              <span className="inline-block px-4 py-1 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-4">
                {blogData.category.blogCategoryName}
              </span>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {blogData.title}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">{blogData.author || "Unknown Author"}</p>
                  <p className="text-xs text-gray-500">{formatDate(blogData.updatedAt)}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500 flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-1" />
                {estimateReadingTime(blogData.content)}
              </span>
            </div>

            {/* Content */}
            <div className="prose max-w-none text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-8"></div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button 
                  onClick={toggleBookmark}
                  className={`p-2 rounded-full ${isBookmarked ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}
                  aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this article"}
                >
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 rounded-full text-gray-500 hover:text-indigo-600"
                  aria-label="Share this article"
                >
                  <FontAwesomeIcon icon={faShareAlt} />
                </button>
              </div>

              {/* Social Share Buttons */}
              <div className="flex space-x-2 ">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-full text-white ${social.bgColor} hover:opacity-90 transition-opacity`}
      aria-label={`Share on ${social.name}`}
    >
      <FontAwesomeIcon icon={social.icon} />
    </a>
  ))}
</div>
            </div>
          </div>

          {/* Floating Copy Link Notification */}
          {isCopied && (
            <div className="fixed bottom-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out">
              Link copied to clipboard!
            </div>
          )}
        </article>
      </div>
    </>
  );
};

export default Blogpost;