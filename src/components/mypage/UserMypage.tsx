import LikeMusiclist from "./LikeMusiclist";

const UserMypage = () => {
  return (
    <>
      <section className="m-auto grid gap-x-6 grid-cols-[100px_minmax(900px,_1fr)_100px] mb-3.5">
        <div className="bg-neutral-300 w-20 h-20 rounded-full ml-8"></div>
        <div className="my-4">
          <div>
            <h3>
              레몬사탕
              <button className="ml-20 border-2 rounded-xl w-24 text-sm ">프로필 편집</button>
            </h3>
            <span className="text-slate-400">아이디</span>
          </div>
        </div>
      </section>
      <div className="w-fit m-auto mb-8">
        <button className="bg-black border-2 rounded-2xl w-36 h-8 text-white text-sm m-2">
          ❤️하트
        </button>
        <button className="border-2 rounded-2xl w-36 h-8 text-sm m-2">리스트</button>
      </div>
      <LikeMusiclist />
    </>
  );
};

export default UserMypage;
