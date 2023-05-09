import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import React from "react";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div className="bg-primary justify-center">
            <div className="container mx-auto px-4 py-8 md:py-16 h-full flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
                    <div className="text-primary text-center md:text-left mb-8 md:mb-0">
                        <div>
                            <div className="my-12 text-center">
                                <h1 className="text-2xl text-slate-600 text-primary">{post.data.title}</h1>
                                <p className="text-slate-400 mt-2 text-primary">{post.data.date}</p>
                            </div>

                            <article className="prose text-primary">
                                <Markdown>{post.content}</Markdown>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PostPage;