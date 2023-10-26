const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/${resource}?${query}`
  );
  const dataAnime = await response.json();
  return dataAnime;
};

export { getAnimeResponse };
