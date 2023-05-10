"use client";

import { useState } from "react";
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";



const PostPreview = (props: PostMetadata) => {
  const [loading, setLoading] = useState(true);


  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
  };
    return (
        <div className="flex flex-col items-center justify-center bg-secondary rounded-lg shadow-lg w-60 max-w-40">
      <div
        className="w-full h-44 rounded-t-xl overflow-hidden relative"
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500"></div>
          </div>
        )}
        <Image
          src={props.image}
          alt={props.title}
          width="340"
          height="190"
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
      <div className="flex flex-col items-center justify-start w-full p-4 space-y-2">
        {/* Title */}
        <div className="flex items-center justify-center w-full">
          <h3 className="text-2xl font-bold text-gray-100">{props.title}</h3>
        </div>
        {/* Description */}
        <div className="flex items-center justify-center text-center w-full">
          <p className="text-gray-400">{props.description}</p>
        </div>
        {/* Link */}
        <div className="flex items-center justify-center w-full">
          <Link className="text-sm font-bold text-blue-500" href={`/posts/${props.slug}`}>
            Learn More
          </Link>
        </div>
        {/* Tags */}
        </div>
        {/* Date */}
        <div className="flex items-center justify-center w-full">
          <p className="text-sm font-medium text-gray-400">{props.date}</p>
        </div>
      </div>
  );
};


export default PostPreview;