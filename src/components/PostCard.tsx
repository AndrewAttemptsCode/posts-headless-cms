import { Link } from "react-router-dom";
import type { PostData } from "../hooks/usePosts";

type PostProps = {
  post: PostData;
};

const PostCard = ({ post }: PostProps) => {
  return (
    <Link
      to={`${post.slug}`}
      className="group block overflow-hidden rounded-2xl outline-0"
      state={{ post }}
    >
      <article
        className={`relative flex aspect-3/2 flex-col justify-end p-4 font-semibold text-white drop-shadow-xs drop-shadow-black`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-300 ease-in-out group-hover:brightness-125 group-focus:brightness-125"
          style={{ backgroundImage: `url(${post.image})` }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-black" />

        <div className="relative">
          <h3>{post.title}</h3>
          <p className="text-white/80">
            {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
