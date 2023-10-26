import Header from "@/components/ListCardAnime/header";
import ListCardAnime from "@/components/ListCardAnime";
import { getAnimeResponse } from "./services/api";
const Home = async () => {
  const dataTopAnime = await getAnimeResponse("top/anime", "limit=8");

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
    </div>
  );
};

export default Home;
