export interface Playlist {
  title: string;
  creator: string;
  coverImage: string;
  videoList: VideoList[];
  songs: number;
  hearts: number;
  createdAt: string;
}

export interface VideoList {
  vodTitle: string;
  thumbnail: string;
  writer: string;
  url: string;
}
