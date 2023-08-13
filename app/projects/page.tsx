import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import React from "react";

const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        /*@ts-ignore*/
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <div className="container lg:max-w-screen-lg mx-auto px-6 break-words">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center py-20">
                    <h1 className="text-5xl font-bold text-center text-white">Projects</h1>
                </div>
            </div>
            <div className="container lg:max-w-screen-lg mx-auto px-6 break-words min-h-screen text-primary mt-10">
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">{postPreviews}</div>
            </div>
        </div>
    );
};

export default HomePage;
