import Image from "next/image";
import ListPopular from "@/components/ListPopular";
export default function Home() {
  return (
    <div className="flex flex-col py-5 md:px-10 px-4">
      <h1 className="md:text-3xl text-xl font-bold mb-5">Anime Terpopuler</h1>
      <ListPopular />
    </div>
  );
}
