import React from "react";
import Image from "next/image";
import Link from "next/link";

const ListCardAnime = ({ dataAPI }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full md:gap-1 gap-5">
      {dataAPI.data?.map((anime) => (
        <Link
          href={`/${anime.mal_id}`}
          className="md:p-5 hover:scale-105 transition ease-in duration-300 cursor-pointer text-white hover:text-orange-400"
          key={anime.mal_id}
        >
          <Image
            src={anime.images.webp.image_url}
            className="rounded-[16px] object-cover lg:h-[350px] lg:w-[350px] md:h-[250px] md:w-[250px] w-full h-[250px] mb-3"
            alt={anime.title}
            width="0"
            height="0"
            sizes="100vw"
            priority
          />
          <h1 className="md:text-md text-center font-bold ">{anime.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default ListCardAnime;
