import { useParams } from "react-router-dom";

const PostPage = () => {
  const { slug } = useParams();

  return (
    <div>
      Post Page - {slug}
    </div>
  );
};

export default PostPage;