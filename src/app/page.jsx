import Header from "@/components/ListCardAnime/header";
import ListCardAnime from "@/components/ListCardAnime";
const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/top/anime?limit=8`
  );
  const data = await response.json();
  const dataTopAnime = await data;

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