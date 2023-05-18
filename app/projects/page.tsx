import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import React from "react";

const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <div className="container lg:max-w-screen-lg mx-auto px-6 break-all">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center py-20">
                    <h1 className="text-5xl font-bold text-center text-white">Projects</h1>
                </div>
            </div>
            <div className="container lg:max-w-screen-lg mx-auto px-6 break-all min-h-screen text-primary mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{postPreviews}</div>
            </div>
        </div>
            );
};

export default HomePage;