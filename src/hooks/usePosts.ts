import { useEffect, useState } from "react"
import { fetchPosts } from "../api/posts";

type PostItem = {
  fields: {
    postHeroImage: {
      sys: { id: string; };
    };
    postAuthor: {
      sys: { id: string; };
    };
    postTitle: string;
  };
}

type Asset = {
  sys: { id: string; };
  fields: {
    file: { url: string; };
  };
}

type Author = {
  sys: { id: string; }
  fields: {
    firstName: string;
    lastName: string;
  };
}

type FetchPostsResponse = {
  items: PostItem[];
  includes: {
    asset: Asset[];
    entry: Author[];
  };
}

type PostData = {
  author: {
    firstName: string;
    lastName: string;
  };
  title: string;
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
        const authors = data.includes.entry;

        const newPosts = data.items.map((post) => {
          const postImgId = post.fields.postHeroImage.sys.id;
          const asset = assets.find(asset => asset.sys.id === postImgId);
          
          const postAuthorId = post.fields.postAuthor.sys.id;
          const author = authors.find(author => author.sys.id === postAuthorId);

          return {
            author: {
              firstName: author?.fields.firstName || "Unknown",
              lastName: author?.fields.lastName || ""
            },
            title: post.fields.postTitle,
            image: asset?.fields.file.url
            ? `https:${asset.fields.file.url}`
            : null,
          }
        })

        setPosts(newPosts);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return { posts, loading, error };
}

export default usePosts;