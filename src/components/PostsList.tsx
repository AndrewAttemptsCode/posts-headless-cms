import usePosts from "../hooks/usePosts";
import ErrorDisplay from "./ErrorDisplay";
import LoadingSpinner from "./LoadingSpinner";
import PostCard from "./PostCard";

const PostsList = () => {
  const { posts, loading, error } = usePosts();

  return (
    <div className="flex flex-col py-4">
      <section
        className="w-[90%] max-w-7xl self-center"
        aria-labelledby="latest-posts"
      >
        <h2
          id="latest-posts"
          className="mb-2 text-2xl font-semibold text-gray-700 dark:text-gray-200"
        >
          Latest Posts
        </h2>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorDisplay error={error} />
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PostsList;
