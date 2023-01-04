import { useState } from "react";

const popularMenu = [
  { url: "/collection/type/frontend", text: "Frontend (web)" },
  { url: "/collection/type/backend", text: "Backend" },
  { url: "/collection/type/ai", text: "Ai" },
];

export const DropDownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-primary-highlight bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm bg-secondary-background"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Popular
        </button>
      </div>

      {isDropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-secondary-background shadow-lg ring-primary-highlight ring-opacity-5 focus:outline-none"
          role="menu"
        >
          <div className="py-1" role="none">
            {popularMenu.map((item) => (
              <a
                href={item.url}
                className="hover:bg-primary-background  text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id={`menu-item-${item.text}`}
                key={item.text}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
