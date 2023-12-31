import { getAnimeResponse } from "@/services/api";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";
const Page = async ({ params: { idAnime } }) => {
  const anime = await getAnimeResponse(`anime/${idAnime}`);
  console.log(anime);
  return (
    <div className="flex flex-col py-[100px] md:px-10 px-4">
      <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      <div className={`flex flex-col mt-10`}>
        <div className="text-xl md:text-2xl text-white">{anime.data.title}</div>
      </div>
      <div className="flex gap-3 mt-5 flex-wrap hidden md:flex">
        <div className="border  border-white p-2 rounded-lg">
          <div className="text-sm text-white">Type : {anime.data.type}</div>
        </div>
        <div className="border border-white p-2 rounded-lg">
          <div className="text-sm text-white">
            Episode : {anime.data.episodes}
          </div>
        </div>
        <div className="border border-white p-2 rounded-lg">
          <div className="text-sm text-white">
            Score : {anime.data.score} / 10
          </div>
        </div>
        <div className="border border-white p-2 rounded-lg">
          <div className="text-sm text-white">Status : {anime.data.status}</div>
        </div>
        <div className="border border-white p-2 rounded-lg">
          <div className="text-sm text-white">Year : {anime.data.year}</div>
        </div>
      </div>
      <div className="flex mt-5 md:mt-10 flex-row gap-5 flex-wrap justify-center md:justify-start">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.title}
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div className="flex gap-3 mt-5 flex-wrap block md:hidden">
          <div className="border border-white p-2 rounded-lg">
            <div className="text-sm text-white">Type : {anime.data.type}</div>
          </div>
          <div className="border border-white p-2 rounded-lg">
            <div className="text-sm text-white">
              Episode : {anime.data.episodes}
            </div>
          </div>
          <div className="border border-white p-2 rounded-lg">
            <div className="text-sm text-white">
              Score : {anime.data.score} / 10
            </div>
          </div>
          <div className="border border-white p-2 rounded-lg">
            <div className="text-sm text-white">
              Status : {anime.data.status}
            </div>
          </div>
          <div className="border border-white p-2 rounded-lg">
            <div className="text-sm text-white">Year : {anime.data.year}</div>
          </div>
        </div>
        <div className="text-white text-sm md:text-sm md:w-1/2 lg:text-2xl lg:w-3/4 text-justify">
          {anime.data.synopsis}
        </div>
      </div>
    </div>
  );
};

export default Page;
