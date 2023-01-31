import React from "react";
import KaKaoLogo from "../../logo/KaKaoLogo";

const PlaylistDetailMusic = () => {
  return (
    <div className="flex justify-between items-center py-7 mx-10 border-mpl_lightgray border-b-[1px]">
      <div className="flex items-center">
        <img
          className="w-16 h-16"
          src="https://image.bugsm.co.kr/album/images/500/202371/20237198.jpg"
          alt="음악 앨범커버"
        />
        <div className="m-2">
          <p className="text-mpl_black">주저하는 연인들을 위해</p>
          <p className="text-mpl_darkgray text-sm mt-2">잔나비</p>
        </div>
      </div>
      <KaKaoLogo className="" />
    </div>
  );
};

export default PlaylistDetailMusic;
