const LikeMusiclist = () => {
  return (
    <section className="m-auto grid gap-x-3 grid-cols-[100px_minmax(900px,_1fr)_100px] mb-3.5">
      <img
        className="w-14 h-14 ml-10"
        src="https://lh3.googleusercontent.com/x1aJfVvycE3JUA_Hmo6kAzlm0IXLb9OCqio3mHp904M7GSAhPAk-7ur6f17Gs8RieaHsh6J5L_hqLwc=w544-h544-l90-rj"
      />
      <div className="col-span-2 mt-2">
        <h4>내가 좋아하는 씨티팝</h4>
        <p className="text-sm text-slate-400">꼬롱꼬롱꼬로로 | 총 20 곡</p>
      </div>
    </section>
  );
};

export default LikeMusiclist;
