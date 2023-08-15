import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa"; // Importiere die passenden Icons

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
        <div className="min-h-screen">
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 text-white">
                    {post.data.title}
                </h1>
                <p className="text-slate-400 mt-2 text-primary">Last updated: {post.data.date}</p>

                <div className="flex justify-center items-center space-x-4">
                    {post.data.website && (
                        <a href={post.data.website} target="_blank" rel="noopener noreferrer" className="text-white mt-5 px-4 no-underline bg-accent rounded-md h-10 text-base sm:text-lg hover:translate-y-1 hover:bg-secondary duration-300 ease-in-out transition flex gap-2 items-center justify-center">
                            <FaGlobe className="mr-2"/> Website
                        </a>
                    )}
                    {post.data.github && (
                        <a href={post.data.github} target="_blank" rel="noopener noreferrer" className="text-white mt-5 px-4 no-underline bg-accent rounded-md h-10 text-base sm:text-lg hover:translate-y-1 hover:bg-secondary ease-in-out transition flex gap-2 items-center justify-center">
                            <FaGithub className="mr-2"/> Github
                        </a>
                    )}
                </div>
            </div>

            <article className="prose prose-invert mx-auto mt-6 mb-6 px-6">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;
