const baseURL = "https://cdn.contentful.com";
const space = import.meta.env.VITE_SPACE;
const accesToken = import.meta.env.VITE_ACCESS_TOKEN;

export const fetchPosts = async () => {
  const response = await fetch(`${baseURL}/spaces/${space}/entries?access_token=${accesToken}&content_type=blogPost`);
  
  if (!response.ok) throw new Error("Failed to fetch posts");

  return response.json();
}

export const fetchPost = async (slug: string) => {
  const response = await fetch(`${baseURL}/spaces/${space}/entries?access_token=${accesToken}&content_type=blogPost&fields.slug=${slug}`);

  if (!response.ok) throw new Error("Failed to fetch post");

  return response.json();
}