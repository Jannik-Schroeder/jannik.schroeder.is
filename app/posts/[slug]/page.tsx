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
    <div className="bg-primary">
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 text-primary">
          {post.data.title}
        </h1>
        <p className="text-slate-400 mt-2 text-primary">{post.data.date}</p>
      </div>

      <article className="prose prose-invert mx-auto mt-6 mb-6 px-6">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
