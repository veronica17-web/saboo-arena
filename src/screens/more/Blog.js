import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import { blogsData } from "../../constants/blogsData";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | RKS Motor Pvt Ltd</title>
        <meta name="title" content="Blog | RKS Motor Pvt Ltd" />
        <meta name="description" content="" />
        <meta name="keywords" content="Blogs" />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboomaruti.in/blog" />
        <meta
          property="og:title"
          content="Best Maruti Suzuki Dealers in Hyderabad | Saboo Maruti"
        />
        <meta
          property="og:description"
          content="Saboo Maruti is the best Maruti Suzuki authorized dealers in Hyderabad. Visit our nearest Saboo Maruti Showroom and get best deals on all Maruti cars. Call now 98488 98488."
        />
        <meta property="og:image" content="img/og-tags/about_us.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboomaruti.in/blog"
        />
        <meta
          property="twitter:title"
          content="Best Maruti Suzuki Dealers in Hyderabad | Saboo Maruti"
        />
        <meta
          property="twitter:description"
          content="Saboo Maruti is the best Maruti Suzuki authorized dealers in Hyderabad. Visit our nearest Saboo Maruti Showroom and get best deals on all Maruti cars. Call now 98488 98488."
        />
        <meta property="twitter:image" content="img/og-tags/about_us.webp" />
      </Helmet>
      <Header />
      <img
        src={require("../../assets/arena-blog-popup-banner.webp")}
        className="w-full lg:mt-16"
        alt="blog-screen-banner"
      />
      <p className="text-center text-red-600 text-3xl">News and Social Media Articles</p>
      <p className="text-center mt-2 mb-1 animate-pulse">
      "Stay connected and always be in the know with the most recent updates and exciting happenings from your beloved Maruti Suzuki Dealer!"
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto p-5 sm:px-0">
        {blogsData.map((blog) => (
          <div
            className="flex flex-col bg-white border shadow-md rounded-lg overflow-hidden relative max-h-max "
            key={blog.id}
          >
            <img src={blog.img} alt={blog.id} />
            <div className="p-5">
              <p className="text-blue-700 font-semibold uppercase">
                {blog.title}
              </p>
              <a
                href={blog.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-sm"
              >
                {blog.subTitle}
              </a>
              <p className="my-3 text-sm text-gray-600 mb-10">{blog.desc}</p>
              <div className="absolute bottom-3 right-8 mb-4">
                <a
                  href={blog.href}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="border-b-2 border-red-500 text-red-500 pb-1"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
