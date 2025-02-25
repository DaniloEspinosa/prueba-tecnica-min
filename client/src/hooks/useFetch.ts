export const useFetch = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching products");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};