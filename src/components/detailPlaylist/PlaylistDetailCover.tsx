import React from "react";
import KaKaoLogo from "../ui/KaKaoLogo";
import { FaHeart } from "react-icons/fa";
import Button from "../ui/Button";
import { Playlist } from "../../types/playlistTypes";

const PlaylistDetailCover = ({ coverImage, title, creator, hearts }: Playlist) => {
  return (
    <div className="h-[30rem] relative overflow-hidden rounded-br-3xl rounded-bl-3xl mb-5">
      <img
        className="h-full absolute top-0 left-0 object-cover blur-xl"
        src={coverImage}
        alt="플레이리스트 배경이미지"
      />
      <div className="h-full w-full absolute top-0 left-0 bg-mpl_black opacity-70"></div>
      <div className="w-56 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <img className="w-56 h-56 object-cover" src={coverImage} alt="플레이리스트 이미지" />
        <p className="text-mpl_white mt-4 text-lg line-clamp-1">{title}</p>
        <p className="text-mpl_white text-sm line-clamp-1">{creator}</p>
      </div>
      <Button onClick={() => {}} className="absolute top-0 right-0 p-3 m-5 text-white text">
        삭제
      </Button>
      <Button
        onClick={() => {}}
        className="absolute bottom-0 left-0 m-5 px-4 rounded-full border border-white text-white text-center leading-[26px]"
      >
        <FaHeart className="w-3 h-3 inline-block mr-2 align-middle" />
        <span className="text-sm">{hearts}</span>
      </Button>
      <KaKaoLogo className="absolute bottom-0 right-0 m-5 align-middle" />
    </div>
  );
};

export default PlaylistDetailCover;
