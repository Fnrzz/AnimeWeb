"use client";

import ListCardAnime from "@/components/ListCardAnime";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../services/api";

const Page = () => {
  const [page, setPage] = useState(1);
  const [dataAnime, setDataAnime] = useState([]);

  const fetchData = async () => {
    const dataPopuler = await getAnimeResponse("top/anime", `page=${page}`);
    setDataAnime(dataPopuler);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex flex-col py-[100px] md:px-10 px-4">
      <HeaderMenu title="Popular Anime" />
      <ListCardAnime dataAPI={dataAnime} />
      <Pagination
        page={page}
        lastPage={dataAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default Page;
