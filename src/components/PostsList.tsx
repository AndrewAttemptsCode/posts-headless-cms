import usePosts from "../hooks/usePosts";
import LoadingSpinner from "./LoadingSpinner";
import PostCard from "./PostCard";

const PostsList = () => {
  const { posts, loading, error } = usePosts();

  return (
    <div className="flex flex-col py-4">
      <section className="w-[90%] max-w-7xl self-center">
        <h2 className="mb-2 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Latest Posts
        </h2>
        {loading ? (
          <LoadingSpinner />
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
