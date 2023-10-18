"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const heandleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };

  return (
    <div className="relative">
      <form onSubmit={heandleSearch}>
        <input
          type="text"
          placeholder="Search"
          className="rounded-lg border border-gray-300 w-full md:mt-0 mt-4 shadow px-4 py-2"
          ref={searchRef}
        />
        <button
          className="absolute md:top-2 md:end-2 top-6 end-4"
          onClick={heandleSearch}
          type="submit"
        >
          <MagnifyingGlass size={26} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
