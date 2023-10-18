import Image from "next/image";

const ListPopular = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/top/anime?limit=6`
  );
  const data = await response.json();
  const dataAnime = data.data;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 md:w-[60%] w-full gap-2">
      {dataAnime.map((anime) => (
        <div className="md:p-5" key={anime.mal_id}>
          <Image
            src={anime.images.webp.image_url}
            className="rounded-[16px] object-cover md:h-[350px] md:w-[350px] w-full h-[300px] mb-3"
            alt={anime.title}
            width={300}
            height={300}
          />
          <h1 className="md:text-md text-center font-bold">{anime.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ListPopular;
