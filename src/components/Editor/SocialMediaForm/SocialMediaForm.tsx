import { FC, useState } from "react";

export const SocialMediaForm: FC = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleOpenDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  return (
    <div className="px-5">
      <button
        onClick={handleOpenDropdown}
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 inline-flex items-center hover:bg-gray-100 hover:text-grey-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        type="button"
      >
        Dropdown button
        <svg
          className={`w-2.5 h-2.5 ms-3 ${dropdownIsOpen ? "rotate-180" : ""} transition ease-in-out delay-50`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div id="dropdownDelay" className={` ${dropdownIsOpen ? "" : "hidden"}`}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="linkedin"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Linkedin
            </label>
            <div className="mt-2">
              <input
                id="linkedin"
                name="linkedin"
                type="text"
                autoComplete="linkedin"
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="github"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Github
            </label>
            <div className="mt-2">
              <input
                id="github"
                name="github"
                type="text"
                autoComplete="github"
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
