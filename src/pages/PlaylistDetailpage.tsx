import PlaylistDetailCover from "../components/detailPlaylist/PlaylistDetailCover";
import PlaylistDetailMusic from "../components/detailPlaylist/PlaylistDetailMusic";
apis;
import { apis } from "../api/api";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Playlist } from "../types/playlistTypes";

const PlaylistDetailpage = () => {
  const [playlist, setPlaylist] = useState<Playlist>({} as Playlist);
  const id = Number(useParams().id);

  useEffect(() => {
    const getDetailPlaylist = async () => {
      const playlistData = await apis.getDetailPlaylist(id);
      setPlaylist(playlistData);
    };

    getDetailPlaylist();
  }, []);

  return (
    <>
      {Object.keys(playlist).length > 0 && <PlaylistDetailCover {...playlist} />}
      {Object.keys(playlist).length > 0 &&
        playlist.videoList.map((song) => (
          <React.Fragment key={song.url}>
            <PlaylistDetailMusic {...song} />
          </React.Fragment>
        ))}
    </>
  );
};

export default PlaylistDetailpage;
