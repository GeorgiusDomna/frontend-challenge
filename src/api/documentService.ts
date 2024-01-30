import { CatImage } from "../interfaces/Icatimage";

const API_KEY: string = import.meta.env.VITE_OAUTH_TOKEN;

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
});

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow' as RequestRedirect
};

export const loadImages = async (): Promise<CatImage[] | undefined> => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=15", requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
};