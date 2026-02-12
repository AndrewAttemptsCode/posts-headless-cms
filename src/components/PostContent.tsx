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
    <div className="w-[90%] max-w-3xl justify-self-center py-4">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        {post.title}
      </h2>
      <p>
        {post.author.firstName} {post.author.lastName}
      </p>
      <p>{new Date(post.date).toLocaleString()}</p>
      <div>
        <img
          src={post.image || undefined}
          alt=""
          className="mb-2 aspect-3/2 object-cover md:float-right md:mb-0.5 md:ml-1 md:w-1/2"
        />
        {post.body.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostContent;
