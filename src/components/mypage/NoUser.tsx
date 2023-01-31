const NoUser = () => {
  return (
    <section className="m-auto grid gap-x-6 grid-cols-[100px_minmax(900px,_1fr)_100px]">
      <div className="bg-neutral-300 w-20 h-20 rounded-full ml-8"></div>
      <div className="my-4">
        <h3>로그인이 필요합니다.</h3>
        <span className="text-slate-400">Please Login !</span>
      </div>
    </section>
  );
};

export default NoUser;
