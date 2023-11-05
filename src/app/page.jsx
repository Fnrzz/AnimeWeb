"use client";
import Header from "@/components/ListCardAnime/header";
import ListCardAnime from "@/components/ListCardAnime";
import { getAnimeResponse, getAnimeResponseNested } from "@/services/api";

const Home = async () => {
  const dataTopAnime = await getAnimeResponse("top/anime", "limit=8");

  let dataRecomendedAnime = await getAnimeResponseNested(
    "recommendations/anime"
  );

  let dataStart = Math.floor(Math.random() * 200);

  dataRecomendedAnime = {
    data: dataRecomendedAnime.slice(dataStart, dataStart + 4),
  };

  return (
    <div className="flex flex-col py-[100px] md:px-10 px-4">
      <section>
        <Header
          title="Popular Anime"
          linkHref={"/popular"}
          linkTitle={"See More"}
        />
        <ListCardAnime dataAPI={dataTopAnime} />
      </section>
      <section className="mt-10">
        <Header title="Recomended Anime" />
        <ListCardAnime dataAPI={dataRecomendedAnime} />
      </section>
    </div>
  );
};

export default Home;
