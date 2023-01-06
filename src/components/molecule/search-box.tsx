import { useRouter } from "next/router";
import { useState } from "react";
export const SearchBox = () => {
  const router = useRouter();
  const [route, setRoute] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let tempRoute = route;
    setRoute("");
    router.push("/collection/tag-search/" + tempRoute);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative md:mr-4 rounded-md hover:cursor-pointer hover:shadow-md border border-primary-highlight bg-white flex">
        <span className="inset-y-0 left-0 flex items-center px-1 border-r border-primary-highlight">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="text"
          name="price"
          id="price"
          className="block h-full w-full rounded-md px-2 py-[9px] sm:text-sm"
          onChange={(e: { target: { value: string } }) => {
            setRoute(e.target.value);
          }}
          placeholder="Search projects"
        />
      </div>
    </form>
  );
};
