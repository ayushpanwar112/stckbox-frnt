import { useState, useEffect } from "react";
import BlogCard from "../components/BlogComponent/BlogCard";
import gsap from "gsap";
import axios from "axios";

import FullSphere from "../assets/Blog/fullSphere.svg";
import "../components/Css/Blog.css";
import { useGSAP } from "@gsap/react";

const Blog = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]); // State for categories
  const [selectedCategoryId, setSelectedCategoryId] = useState(""); // Track selected category ID
  const [page, setPage] = useState(1);
  const [metadata, setMetadata] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch categories from the backend
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/categories`);
        setCategories(res.data.data || []); // Assuming the categories are in `data`
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  // Fetch blogs from the backend
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let res;
        if (selectedCategoryId) {
          // Fetch blogs by category
          res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/categories/${selectedCategoryId}/blogs`);
        } else {
          // Fetch all blogs
          res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs?page=${page}`);
        }
        setData(res.data.data || []);
        setMetadata(res.data.metadata || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page, selectedCategoryId]);

  const filteredBlogs = data;

  useGSAP(() => {
    const moveSphere = (e) => {
      gsap.to(".fullSphere", {
        x: e.clientX / 10 - 50,
        y: e.clientY / 10 + window.scrollY - 50,
        stagger: 0.1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveSphere);
    window.addEventListener("scroll", moveSphere);

    return () => {
      window.removeEventListener("mousemove", moveSphere);
      window.removeEventListener("scroll", moveSphere);
    };
  }, []);

  return (
    <div className="relative flex w-full bg-gradient-to-b text-white">
      <div className="absolute top-[0] right-[50%] fullSphere opacity-50 z-0">
        <img src={FullSphere} alt="FullSphere" />
      </div>

      {/* Sidebar for Filters */}
      <div className="hidden md:block md:w-1/4 lg:w-1/5 sticky top-0 h-screen pt-20 pl-9 z-10">
        <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
        <ul className="space-y-3">
          <li
            className={`cursor-pointer pl-2 rounded-md ${selectedCategoryId === "" ? "bg-gray-700" : ""}`}
            onClick={() => setSelectedCategoryId("")}
          >
            Show All
          </li>
          {categories.map((category) => (
            <li
              key={category._id}
              className={`cursor-pointer pl-2 rounded-md ${selectedCategoryId === category._id ? "bg-gray-700" : ""}`}
              onClick={() => setSelectedCategoryId(category._id)}
            >
              {category.blogCategoryName}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex flex-col items-center p-6">
        <div className="absolute top-[0] right-[5%] fullSphere opacity-50 z-0">
          <img src={FullSphere} alt="FullSphere" />
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold text-white m-[12vh] text-center">Blog</h1>

        {/* Dropdown for Mobile */}
        <div className="mb-6 w-full md:hidden">
          <select
            className="px-4 py-2 rounded-md bg-gray-900 w-full text-white text-sm"
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
          >
            <option value="">Show All</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.blogCategoryName}
              </option>
            ))}
          </select>
        </div>

        {/* Blog Cards */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex gap-10 flex-wrap justify-center w-full z-10 lg:w-[100%]">
            {filteredBlogs.map((blog, index) => {
              const imageUrl = blog.thumbImage?.secure_url || "default-placeholder.jpg";
              const contentText = blog.content?.replace(/<\/?[^>]+(>|$)/g, "") || "";
              const category = blog.category?.blogCategoryName || "Uncategorized";
              const date = new Date(blog.updatedAt).toLocaleDateString();

              return (
                <BlogCard
                  key={index}
                  id={blog._id}
                  title={blog.title || "Untitled Blog"}
                  desc={contentText.split(" ").slice(0, 20).join(" ") + "..."}
                  author={blog.author || "Unknown"}
                  comments={0}
                  Date={date}
                  keywords={[category]}
                  imageUrl={imageUrl}
                  className="z-10"
                />
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {!selectedCategoryId && (
          <div className="flex gap-4 mt-10">
            <button
              disabled={!metadata.prev}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-gray-700 rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-lg font-semibold">
              Page {metadata.current_page || page}
            </span>
            <button
              disabled={!metadata.next}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-700 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {/* Total Posts Info */}
        {metadata.total && (
          <p className="mt-2 text-sm text-gray-400">
            Showing {filteredBlogs.length} of {metadata.total} posts
          </p>
        )}
      </div>
    </div>
  );
};

export default Blog;