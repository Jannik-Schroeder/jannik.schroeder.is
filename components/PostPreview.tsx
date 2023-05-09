import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <div
            className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-primary text-primary"
        >
            <p className="text-sm text-slate-400 text-primary">{props.date}</p>

            <Link href={`/posts/${props.slug}`}>
                <h2 className=" text-primary hover:underline mb-4 hover:text-accent">{props.title}</h2>
            </Link>
            <p className="text-primary">{props.subtitle}</p>
        </div>
    );
};

export default PostPreview;