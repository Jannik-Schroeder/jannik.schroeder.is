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
            <div className="container lg:max-w-screen-lg mx-auto px-6 break-all min-h-screen text-primary mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{postPreviews}</div>
            </div>
        </div>
            );
};

export default HomePage;