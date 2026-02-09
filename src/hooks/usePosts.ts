import { useEffect, useState } from "react"
import { fetchPosts } from "../api/posts";

type PostItem = {
  fields: {
    postHeroImage: {
      sys: { id: string; };
    };
  };
}

type Asset = {
  sys: { id: string; };
  fields: {
    file: { url: string; };
  };
}

type FetchPostsResponse = {
  items: PostItem[];
  includes: {
    asset: Asset[];
  };
}

type PostData = {
  image: string | null;
}

const usePosts = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data: FetchPostsResponse = await fetchPosts();

        const assets = data.includes.asset;

        const newPosts = data.items.map((post) => {
          const postImgId = post.fields.postHeroImage.sys.id;
          const asset = assets.find(asset => asset.sys.id === postImgId);

          return {
            image: asset?.fields.file.url
            ? `https:${asset.fields.file.url}`
            : null,
          }
        })

        // setPosts(newPosts);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    // loadPosts();
  }, []);

  return { posts, loading, error };
}

export default usePosts;