"use client";

import ListCardAnime from "@/components/ListCardAnime";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [dataAnime, setDataAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASEURL}/top/anime?page=${page}`
    );
    const dataResponse = await response.json();
    const data = await dataResponse;
    setDataAnime(data);
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
