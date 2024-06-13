import Search from "./components/Search/Search";
import Preview from "./components/Preview/Preview";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col gap-5 h-screen w-full justify-center bg-dark-bg">
      <div>
        <Search setIsLoading={setIsLoading} setData={setData} />
        <div>
          <Preview
            avatar_url={data.avatar_url}
            name={data.name}
            login={data.login}
            public_repos={data.public_repos}
            followers={data.followers}
            following={data.following}
            location={data.location}
            blog={data.blog}
            twitter={data.twitter_username}
            date={data.created_at?.split("T")[0]}
            bio={data.bio}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
