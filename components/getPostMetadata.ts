import fs from "fs";
import matter from "gray-matter";
import { sortBy } from 'lodash';


const getPostMetadata = (): { date: any; image: any; description: any; title: any; slug: string }[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            image: matterResult.data.image,
            date: matterResult.data.date,
            description: matterResult.data.description,
            tags: matterResult.data.tags,
            website: matterResult.data.website,
            github: matterResult.data.github,
            slug: fileName.replace(".md", ""),
        };
    });

    const sortedPosts = sortBy(posts, 'date').reverse(); 

    return sortedPosts;
};

export default getPostMetadata;