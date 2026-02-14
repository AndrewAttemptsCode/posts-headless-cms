import { useEffect, useState } from "react";
import type { FetchPostsResponse, PostData } from "./usePosts";
import { fetchPost } from "../api/posts";

type FetchPostResponse = FetchPostsResponse;

const usePost = (slug: string, existingPost: PostData) => {
  const [post, setPost] = useState<PostData>(existingPost);
  const [loading, setLoading] = useState(!existingPost);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (post) return;

    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const data:FetchPostResponse = await fetchPost(slug);

        const asset = data.includes.Asset[0];
        const author = data.includes.Entry[0];
        const post = data.items[0];

        const body = post.fields.postArticle.content.map(
          (paragraph) =>
            paragraph.content?.map((textNode) => textNode.value).join("") || "",
        );

        const newPost = {
          author: {
            firstName: author.fields.firstName || "Unknown",
            lastName: author.fields.lastName || "",
          },
          title: post.fields.postTitle,
          date: post.fields.date,
          body,
          image: `https:${asset.fields.file.url}`,
          slug: post.fields.slug,
        };

        setPost(newPost);
      } catch (err) {
        console.error("fetchPost Error", err);
        setError("Failed to fetch post. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [post, slug]);

  return { post, loading, error };
};

export default usePost;
