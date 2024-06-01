/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { GoChevronLeft } from "react-icons/go";
import ImageContainer from "@/app/components/blog/ImageContainer";
import blogsData from "@/app/data/blog";
import CopyRight from "@/app/components/footer/CopyRight";

const BlogReading = () => {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const fetchBlog = () => {
      try {
        const blog = blogsData.find((blog) => blog.id === parseInt(id));
        if (!blog) {
          throw new Error("Blog not found");
        }
        setBlog(blog);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlog();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen w-full pt-8 lg:py-12 px-6 sm:px-12 md:px-16 lg:px-16 xl:px-28 bg-[#060911]">
      <button onClick={() => router.back()} className="mb-4">
        <GoChevronLeft size={25} color="white" />
      </button>
      <div className="w-full flex flex-col gap-4 pb-10">
        <h1 className="text-lg sm:text-xl xl:text-3xl text-opacity-90 font-bold tracking-wider text-[#329f9a]">
          {blog.judul}
        </h1>
        <div className="text-white text-opacity-60 font-medium text-xs text-[14px] mb-4 md:text-base ">
          {blog.penulis} - {blog.tanggal}
        </div>
        <ImageContainer src={blog.image} alt="AI - Image" />

        <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-12 md:mt-12">
          {blog.contents.map((subisi) => (
            <div
              key={subisi.id}
              className="text-white flex flex-col gap-3"
              ref={(el) => (contentRefs.current[subisi.id] = el)}
            >
              <h2 className="text-base font-semibold mb-2 text-[#329f9a] sm:text-lg">
                {subisi.judulsub}
              </h2>
              <div
                className="leading-6 flex flex-col gap-4 tracking-wide text-[13px] text-justify text-opacity-80 text-white"
                dangerouslySetInnerHTML={{ __html: subisi.materi }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <CopyRight>Written by Dimasfiebry 2024</CopyRight>
    </div>
  );
};

export default BlogReading;
