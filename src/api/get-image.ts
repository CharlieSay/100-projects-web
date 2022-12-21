export type UnsplashPhotoData = {
  urls: { small: string };
  description: string;
  error?: boolean;
};

export const getImageUrl = (thumbId: string): Promise<UnsplashPhotoData> => {
  const URL = `https://api.unsplash.com/photos/${thumbId}?client_id=${process.env.UNSPLASH_CLIENT_ID}`;
  return fetch(URL).then((response) => {
    if (!response.ok || process.env.NODE_ENV === "development") {
      return { error: true };
    }
    return response.json();
  });
};
