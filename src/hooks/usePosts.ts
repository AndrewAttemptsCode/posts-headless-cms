import { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";

type PostContent = {
  content?: PostContent[];
  value?: string;
};

type PostArticle = {
  content: PostContent[];
};

type PostItem = {
  fields: {
    postHeroImage: {
      sys: { id: string };
    };
    postAuthor: {
      sys: { id: string };
    };
    postTitle: string;
    slug: string;
    date: string;
    postArticle: PostArticle;
  };
};

type Asset = {
  sys: { id: string };
  fields: {
    file: { url: string };
  };
};

type Author = {
  sys: { id: string };
  fields: {
    firstName: string;
    lastName: string;
  };
};

export type FetchPostsResponse = {
  items: PostItem[];
  includes: {
    Asset: Asset[];
    Entry: Author[];
  };
};

export type PostData = {
  author: {
    firstName: string;
    lastName: string;
  };
  title: string;
  date: string;
  image: string;
  slug: string;
  body: string[];
};

const usePosts = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data: FetchPostsResponse = await fetchPosts();

        const assets = data.includes.Asset;
        const authors = data.includes.Entry;

        const newPosts = data.items.map((post) => {
          const postImgId = post.fields.postHeroImage.sys.id;
          const asset = assets.find((asset) => asset.sys.id === postImgId);

          const postAuthorId = post.fields.postAuthor.sys.id;
          const author = authors.find(
            (author) => author.sys.id === postAuthorId,
          );

          const body = post.fields.postArticle.content.map(
            (paragraph) =>
              paragraph.content?.map((textNode) => textNode.value).join("") ||
              "",
          );

          return {
            author: {
              firstName: author?.fields.firstName || "Unknown",
              lastName: author?.fields.lastName || "",
            },
            title: post.fields.postTitle,
            date: post.fields.date,
            body,
            image: `https:${asset!.fields.file.url}`,
            slug: post.fields.slug,
          };
        });

        setPosts(newPosts);
      } catch (err) {
        console.error("fetchPosts Error:", err);
        setError("Failed to fetch posts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading, error };
};

export default usePosts;
