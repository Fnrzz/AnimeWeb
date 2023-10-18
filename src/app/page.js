import Header from "@/components/ListCardAnime/header";
import ListCardAnime from "@/components/ListCardAnime";
const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/top/anime?limit=8`
  );
  const data = await response.json();
  const dataTopAnime = data.data;

  return (
    <div className="flex flex-col py-5 md:px-10 px-4">
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
