import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlerNextPage = () => {
    if (page === lastPage) return;
    setPage((prev) => prev + 1);
    scrollTop();
  };

  const handlerPrevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center gap-4 mt-20">
      <button
        className="text-white transition-all hover:text-orange-400"
        onClick={handlerPrevPage}
      >
        Prev
      </button>
      <p className="text-white">
        {page} of {lastPage}
      </p>
      <button
        className="text-white transition-all hover:text-orange-400"
        onClick={handlerNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
