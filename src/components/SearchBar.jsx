import React from "react";
import lang from "../utils/languageConstant";
import {useSelector} from 'react-redux';

function SearchBar() {

  const langKey = useSelector((state) => state.config.lang);
  return (
    <div className="header">
      <div className="pt-[20%] lg:pt-[9%] flex justify-center">
        <form className="w-full lg:w-1/2 bg-white grid grid-cols-12" action="">
          <input
            className="col-span-9 bg-black p-3 m-4"
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="text-white m-4 col-span-3 rounded-lg py-2 px-4 bg-red-700">
            {lang [langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
}
export default SearchBar;
