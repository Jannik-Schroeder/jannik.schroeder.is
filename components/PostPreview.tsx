"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    const handleError = () => {
        setLoading(false);
    };

    const Widget = ({ text } : any) => {
        return (
            <div className="bg-accent px-3 py-1 rounded-2xl flex items-center transition-all duration-300 hover:translate-y-1 hover:bg-secondary">
                <div className="text-white">
                    <h4 className="text-xs">{text}</h4>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col bg-secondary rounded-lg shadow-lg w-64 h-full max-w-40">
            <div
                className="w-full h-44 rounded-t-none overflow-hidden z-20 relative bg-center bg-cover"
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <img
                    src={props.image}
                    style={{ display: "none" }}
                    onLoad={handleLoad}
                    onError={handleError}
                />
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500"></div>
                    </div>
                )}
            </div>
            <h3 className="text-2xl font-bold text-gray-100 text-center p-4">{props.title}</h3>
            <div className="flex flex-col items-center justify-start flex-grow w-full p-4 space-y-2">
                <div className="w-full">
                    <p className="text-gray-400 text-center">{props.description}</p>
                </div>
                <div className="flex items-center justify-center w-full">
                    <Link className="text-sm font-bold text-blue-500" href={`/posts/${props.slug}`}>
                        Learn More
                    </Link>
                </div>
                {props.tags && props.tags.map((tag, index) => (
                    <Widget key={index} text={tag} />
                ))}
            </div>
            <div className="w-full py-2">
                <p className="text-sm font-medium text-gray-400 text-center">{props.date}</p>
            </div>
        </div>
    );
};

export default PostPreview;
