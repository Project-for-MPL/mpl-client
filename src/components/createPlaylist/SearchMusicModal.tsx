import { BiPlusMedical } from "react-icons/bi";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";

const SearchMusicModal = () => {
  return (
    <div className="  relative rounded-t-3xl text-center">
      <img src="search.svg" alt="searchImg" className=" absolute top-8 left-14" />
      <input
        type="text"
        placeholder="음악 검색"
        className="  my-7 bg-mpl_lightgray w-10/12 placeholder-mpl_black rounded-2xl px-12 py-1 "
      ></input>
      <div className="flex justify-around items-center ">
        <div className="flex">
          <img src="smallMusic.svg" alt="musicImage" />
          <div className="ml-4 text-left">
            <div>Hype boy</div>
            <span className="text-mpl_darkgray text-sm">뉴진스</span>
          </div>
        </div>

        <BiPlusMedical />
      </div>
      <div className=" flex justify-center ">
        <DeleteButton />
        <SaveButton />
      </div>
    </div>
  );
};

export default SearchMusicModal;
