
const baseURL = "https://cdn.contentful.com";
const space = import.meta.env.VITE_SPACE;
const accesToken = import.meta.env.VITE_ACCESS_TOKEN;

export const fetchPosts = async () => {
  const response = await fetch(`${baseURL}/spaces/${space}/entries?${accesToken}&content_type=blogPost`);
  
  if (!response.ok) throw new Error("Failed to fetch posts");

  return response.json();
}