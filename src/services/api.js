const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/${resource}?${query}`
  );
  const dataAnime = await response.json();
  return dataAnime;
};

const getAnimeResponseNested = async (resource, objectPorperty) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item.entry);
};

export { getAnimeResponse, getAnimeResponseNested };
