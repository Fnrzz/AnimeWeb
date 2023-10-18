import React from "react";
import Image from "next/image";
import Link from "next/link";

const ListCardAnime = ({ dataAPI }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full md:gap-1 gap-5">
      {dataAPI.map((anime) => (
        <Link
          href={`/${anime.mal_id}`}
          className="md:p-5 hover:scale-105 transition ease-in duration-300"
          key={anime.mal_id}
        >
          <Image
            src={anime.images.webp.image_url}
            className="rounded-[16px] object-cover md:h-[350px] md:w-[350px] w-full h-[300px] mb-3"
            alt={anime.title}
            width={300}
            height={300}
          />
          <h1 className="md:text-md text-center font-bold text-white">
            {anime.title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default ListCardAnime;
