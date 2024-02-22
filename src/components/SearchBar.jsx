import React from "react";

function SearchBar() {
  return (
    <div class="header">
        <div className=" pt-[9%] flex justify-center">
          <form className=" w-1/2 bg-white grid grid-cols-12" action="">
            <input
              className="col-span-9  p-4 m-4"
              type="text"
              placeholder="which movie you want to watch?"
            />
            <button className="text-white m-4  col-span-3 rounded-lg py-2 px-4 bg-red-700 mr-5">
              Search
            </button>
          </form>
        </div>
      </div>
  );
}

export default SearchBar;
