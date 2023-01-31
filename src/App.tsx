import React from "react";
import { Route, Routes } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import CreatePlaylistpage from "./pages/CreatePlaylistpage";
import Loginpage from "./pages/Loginpage";
import Mainpage from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import PlaylistDetailpage from "./pages/PlaylistDetailpage";
import Searchuserpage from "./pages/Searchuserpage";

function App() {
  const Pc = ({ children }: { children: JSX.Element }): JSX.Element | null => {
    const isPc = useMediaQuery({ minWidth: 768 });
    return isPc ? children : null;
  };
  const Mobile = ({ children }: { children: JSX.Element }): JSX.Element | null => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  return (
    <>
      <Pc>
        <div>모바일 환경에서 이용가능합니다. 화면 크기를 줄이거나 모바일 환경을 이용해주세요</div>
      </Pc>
      <Mobile>
        <Routes>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="/auth" element={<Loginpage />} />
          <Route path="/detail" element={<PlaylistDetailpage />} />
          <Route path="/create" element={<CreatePlaylistpage />} />
          <Route path="/searchuser" element={<Searchuserpage />} />
        </Routes>
      </Mobile>
    </>
  );
}

export default App;
