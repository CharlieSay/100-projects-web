import { useRouter } from "next/router";
import { useState } from "react";
export const SearchBox = () => {
  const router = useRouter();
  const [route, setRoute] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/collection/tag-search/" + route);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="ml-4 relative grow max-w-lg rounded-md hover:cursor-pointer hover:shadow-md mx-1 border border-lightMode-highlight dark:border-darkMode-highlight dark:bg-darkMode-black bg-lightMode-white flex"
    >
      <span className="inset-y-0 left-0 flex items-center px-1 border-r border-lightMode-highlight dark:border-darkMode-highlight">
        <button
          type="submit"
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <svg
            fill="none"
            className="stroke-black dark:stroke-white w-6 h-6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </span>
      <input
        type="text"
        name="price"
        id="price"
        className="block dark:bg-darkMode-background w-full text-xs rounded-md px-2 py-[9px] sm:text-sm"
        onChange={(e: { target: { value: string } }) => {
          setRoute(e.target.value);
        }}
        placeholder="Search projects"
      />
    </form>
  );
};
