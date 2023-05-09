import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import {IoIosPin} from "react-icons/io";
import {TypeAnimation} from "react-type-animation";
import {FiGithub, FiInstagram, FiLinkedin, FiTwitter} from "react-icons/fi";
import React from "react";

const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <div className="bg-primary justify-center min-h-screen">
            <div className="container mx-auto px-4 py-8 md:py-16 h-full flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
                    <div className="text-primary text-center md:text-left mb-8 md:mb-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
                        </div>
                    </div>
                </div>
            </div>
            );
};

export default HomePage;