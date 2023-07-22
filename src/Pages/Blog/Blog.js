import React from "react";
import useTitle from "../../Hook/useTitle";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Getting Started with ReactJS",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "A comprehensive guide for beginners to start building web applications using ReactJS.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 2,
    title: "Mastering Next.js: Server-Side Rendering with React",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Learn how to leverage the power of Next.js to build fast and SEO-friendly web applications.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 3,
    title: "Exploring the Benefits of TypeScript in Web Development",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Discover how TypeScript enhances productivity, code quality, and maintainability in web development projects.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 4,
    title: "Redux Made Easy: State Management in React Applications",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Learn the core concepts of Redux and how to effectively manage application state in your React projects.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 5,
    title: "Crafting Effective Frontend Design Strategies",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Explore best practices and techniques for creating compelling and user-friendly frontend designs.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 6,
    title: "Building Interactive UIs with React Hooks",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Discover the power of React Hooks and how to create dynamic and interactive user interfaces.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 7,
    title: "Advanced Styling Techniques with CSS-in-JS",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Learn how to use CSS-in-JS libraries like styled-components to write modular and reusable styles in your React projects.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 8,
    title: "Optimizing Performance in React Applications",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Discover strategies and techniques to optimize the performance of your React applications for better user experience.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 9,
    title: "Exploring Responsive Web Design Principles",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Learn the key principles and best practices of responsive web design to create mobile-friendly and adaptable websites.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 10,
    title: "Getting Started with Next.js API Routes",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Learn how to build serverless APIs using Next.js API routes and deploy them effortlessly.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 11,
    title: "Building Scalable and Maintainable React Applications",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Explore techniques and patterns to build scalable and maintainable React applications as your projects grow.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Jharna Khatun",
    designation: "Front End Web Developer",
  },
  {
    id: 12,
    title: "Introduction to Static Site Generation with Next.js",
    image: "https://i.ibb.co/vx52jyB/form.png",
    description:
      "Learn how to leverage the power of Next.js static site generation to create fast and SEO-friendly websites.",
    url: "https://i.ibb.co/0KFw82W/Whats-App-Image-2022-12-07-at-22-34-08.jpg",
    name: "Olivia Taylor",
    designation: "Front End Web Developer",
  },
];
const Blog = () => {
  useTitle("Blogs");
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-20">
        <div className="flex gap-5 items-center">
          <img
            src="https://i.ibb.co/BCZGhKx/blog-3596548-640-removebg-preview.png"
            alt=""
            className="w-[11%]"
          />
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to drives sustainable <br /> growth for your business
              with our expert advice
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8 mt-10">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className="sm:break-inside-avoid mb-8">
                <div className=" w-[80%] h-[100px] overflow-hidden mx-auto -z-20">
                  <img src={blog.image} alt="" className=" w-full h-auto" />
                </div>

                <div className="z-20">
                  <blockquote className="rounded-xl bg-white p-6 shadow-lg">
                    <h2 className="font-semibold text-primary text-lg">
                      {blog.title}
                    </h2>
                    <p className="leading-relaxed text-gray-700">
                      {blog.description}
                    </p>
                    <Link to={`/blog/${blog.id}`}>
                      <div className="flex items-center gap-4 text-[#f33bea]">
                        <span className="inline-block">Read More</span>
                        <BsArrowRight />
                      </div>
                    </Link>
                  </blockquote>
                  <div className="mt-4 flex items-center gap-4">
                    <img
                      alt="Woman"
                      src={blog.url}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <p className="font-medium">{blog.name}</p>
                      <p className="mt-1">{blog.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
