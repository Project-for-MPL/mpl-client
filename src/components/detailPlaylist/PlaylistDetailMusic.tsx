import React from "react";
import KaKaoLogo from "../ui/KaKaoLogo";
import { VideoList } from "../../types/playlistTypes";

const PlaylistDetailMusic = ({ vodTitle, thumbnail, writer, url }: VideoList) => {
  return (
    <div className="flex justify-between items-center py-7 mx-10 border-mpl_lightgray border-b-[1px]">
      <div className="flex items-center">
        <a href={url} target="_blank">
          <img className="w-16 h-16" src={thumbnail} alt="음악 앨범커버" />
        </a>
        <div className="m-2">
          <p className="text-mpl_black line-clamp-1">{vodTitle}</p>
          <p className="text-mpl_darkgray text-sm mt-2 line-clamp-1">{writer}</p>
        </div>
      </div>
      <KaKaoLogo className="" />
    </div>
  );
};

export default PlaylistDetailMusic;
