import CreateNewPlaylist from "../components/createPlaylist/CreateNewPlaylist";
import Layout from "../components/layout/Layout";
import SearchMusicModal from "../components/createPlaylist/SearchMusicModal";

const CreatePlaylistpage = () => {
  return (
    <div>
      <Layout>
        <CreateNewPlaylist />
      </Layout>
      <SearchMusicModal />
    </div>
  );
};

export default CreatePlaylistpage;
