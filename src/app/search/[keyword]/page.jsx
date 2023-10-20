import React from "react";
import Header from "@/components/ListCardAnime/header";
import ListCardAnime from "@/components/ListCardAnime";

const Search = async ({ params }) => {
  const keyword = params.keyword;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/anime?q=${keyword}`
  );
  const data = await response.json();
  const dataSearchAnime = await data;
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
