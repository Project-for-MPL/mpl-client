import { AiFillPlusCircle } from "react-icons/ai";

AiFillPlusCircle;
const CreateNewPlaylist = () => {
  return (
    <main>
      <section>
        <h3 className="font-semibold">새 플레이리스트 추가</h3>
        <img src="music.svg" alt="musicPicture" className="my-12 m-auto" />
        <div className="text-mpl_darkgray text-sm">플레이 리스트 제목</div>
        <hr className="text-mpl_lightgray mb-6" />
        <button className="flex items-center text-sm text-mpl_pink">
          <AiFillPlusCircle />
          <span>새로운 곡 추가</span>
        </button>
      </section>
    </main>
  );
};

export default CreateNewPlaylist;
