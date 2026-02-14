import { useLocation, useParams } from "react-router-dom";
import type { PostData } from "../hooks/usePosts";

type LocationProps = {
  state: {
    post: PostData;
  };
};

const PostContent = () => {
  const { slug } = useParams();
  const location: LocationProps = useLocation();

  const post = location.state?.post;

  return (
    <article className="w-[90%] max-w-3xl justify-self-center py-4 text-gray-700 dark:text-gray-200">
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <div className="mb-2 bg-gray-200 p-1 sm:p-2 dark:bg-gray-600">
        <p>
          {post.author.firstName} {post.author.lastName}
        </p>
        <p>
          <strong>Published:</strong> {new Date(post.date).toLocaleString()}
        </p>
      </div>
      <div className="space-y-4">
        <img
          src={post.image || undefined}
          alt=""
          className="aspect-video object-cover sm:aspect-21/9"
        />
        {post.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default PostContent;
