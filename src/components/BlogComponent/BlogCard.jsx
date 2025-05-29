import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/Blog/img1.svg';
import CommentIcon from '../../assets/Blog/commentIcon.png';
import { FaUser } from "react-icons/fa6";
import { MdDateRange, MdReadMore } from "react-icons/md";


const BlogCard = ({ title, desc, author, keywords, comments, Date, imageUrl, id }) => {
  const navigate = useNavigate();

  // Remove any occurrences of &nbsp; from desc
  const cleanedDesc = desc ? desc.replace(/&nbsp;/g, '').replace(/<\/?[^>]+(>|$)/g, "").split(" ").slice(0, 20).join(" ") + "..." : "No description available";

  // Clean the Date by removing time portion (T13:21:00.000Z)
  const cleanedDate = Date ? Date.split('T')[0] : "No date available";

  // Function to check if the image URL is valid


  return (
    <div 
      className='w-full sm:w-1/2 lg:w-[45%] bg-[#2B4545] rounded-lg my-6 flex flex-col shadow-lg 
      hover:scale-105 transition-transform duration-300 cursor-pointer group'  
      onClick={() => navigate(`/blogpost/${id}`)}
    >
      {/* Image Section */}
      <div className='rounded-lg w-full overflow-hidden group-hover:rotate-z-[3deg] duration-300'>
        <img 
          src={imageUrl}  // Update this line
          className='rounded-lg w-full h-55 object-cover transition-transform duration-300 
            group-hover:rotate-y-[10deg]' 
          alt="Blog" 
        />
      </div>

      {/* Blog Info */}
      <div className='mt-4 flex flex-col justify-center items-start w-full'>
        <div className='flex items-center gap-2 text-xs text-neutral-300 pl-2'>
          <MdDateRange /><span className='text-xs text-neutral-300'>{cleanedDate}</span>
        </div>
        <h2 className='text-lg font-bold px-2 text-neutral-100'>{title}</h2>
        <p className='mt-2 text-sm text-neutral-300 px-2'>{cleanedDesc} <br />
          <div className='flex items-center hover:text-green-400 duration-300 group/readMore'>
            <span>Read more...</span> 
            <MdReadMore className='group-hover/readMore:ml-4 duration-300'/>
          </div>
        </p>

        {/* Keywords */}
        <div className='flex flex-wrap gap-2 mt-2 px-2'>
          {keywords.length > 0 ? (
            keywords.map((keyword, index) => (
              <span key={index} className='bg-gray-800 text-xs text-white px-2 py-1 rounded-md'>
                {keyword}
              </span>
            ))
          ) : (
            <span className='text-sm text-neutral-400'>No keywords available</span>
          )}
        </div>

        <span className='w-full mt-3 bg-neutral-400 h-[2px]'></span>

        {/* Author & Comments */}
        <div className='flex items-center justify-between my-2 px-2 w-full'>
          <div className='flex gap-1 justify-center items-center'>
            <FaUser />
            <p className='text-sm font-bold text-cyan-300'>By {author}</p>
          </div>
          <div className='flex items-center gap-2'>
            <img src={CommentIcon} className='w-4 h-4' alt="Comments" />
            <p className='text-xs hover:text-green-500 duration-300 text-white'>
              Comments: {comments}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define prop types
BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  author: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  comments: PropTypes.number,
  Date: PropTypes.string,
  imageUrl: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

// Set default props
BlogCard.defaultProps = {
  desc: "No description available",
  keywords: [],
  comments: 0,
  Date: "No date available",
  imageUrl: img1,
};

export default BlogCard;
