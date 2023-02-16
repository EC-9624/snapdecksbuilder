//useSWR allows the use of SWR inside function components
import useSWR from "swr";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetPosts = () => {
  const { data, error } = useSWR("./api/Cardsdata", fetcher);

  return { data, error };
};
