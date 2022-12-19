export type UnsplashPhotoData = {
  urls: { thumb: string };
  description: string;
  error?: boolean;
};

export const getImageUrl = (thumbId: string): Promise<UnsplashPhotoData> => {
  const URL = `https://api.unsplash.com/photos/${thumbId}?client_id=8xrn_iTlr3kgBTjSJGRhGlg6Q_7nE12zUZpnq1DYh0g`;
  return fetch(URL).then((response) => {
    if (!response.ok) {
      return { error: true };
    }
    return response.json();
  });
};
