import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlerNextPage = () => {
    setPage((prev) => prev + 1);
    scrollTop();
  };

  const handlerPrevPage = () => {
    setPage((prev) => prev - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center gap-4 mt-20">
      {page > 1 && (
        <button
          className="text-white transition-all hover:text-orange-400"
          onClick={handlerPrevPage}
        >
          Prev
        </button>
      )}
      <p className="text-white">
        {page} of {lastPage}
      </p>
      {page < lastPage && (
        <button
          className="text-white transition-all hover:text-orange-400"
          onClick={handlerNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
