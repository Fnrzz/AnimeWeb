import React from "react";
import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between md:px-5 items-center">
      <h1 className="md:text-3xl text-xl font-bold mb-5 text-white">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-white invisible lg:visible hover:text-orange-400"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
