import React from "react";
import Header from "@/components/ListCardAnime/header";
import ListCardAnime from "@/components/ListCardAnime";
import { getAnimeResponse } from "../../../services/api";

const Search = async ({ params }) => {
  const keyword = params.keyword;
  const dataSearchAnime = await getAnimeResponse("anime", `q=${keyword}`);
  const title = decodeURI(keyword);

  return (
    <div className="flex flex-col py-[100px] md:px-10 px-4">
      <section>
        <Header title={`Search : ${title}`} />
        <ListCardAnime dataAPI={dataSearchAnime} />
      </section>
    </div>
  );
};

export default Search;
