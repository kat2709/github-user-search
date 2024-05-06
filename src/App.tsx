import MoonIcon from "./assets/moon.svg";
import SearchIcon from "./assets/search.svg";
import UserAvatar from "./assets/octocat.svg";
// import SunIcon from "./assets/sun.svg";

export function App() {
  return (
    <main className="w-full max-w-screen-md m-auto">
      <Header></Header>
      <SearchBox></SearchBox>
      <DevInfoBox></DevInfoBox>
    </main>
  );
}

function Header({ children }: any) {
  return (
    <header className="p-2.5 h-10 flex items-center justify-between text-white uppercase">
      {children}
      <div className="">devfinder</div>
      <div className="flex gap-2.5 justify-center items-center">
        <div>Light</div>
        <MoonIcon className="w-5 h-5" />
      </div>
    </header>
  );
}

function SearchBox({ children }: any) {
  return (
    <div className="p-2.5 rounded-lg bg-violet-950 mt-5 flex gap-2.5 items-center">
      {children}
      <SearchIcon className="text-sky-500 bg-violet-950 w-8 h-8" />
      <input
        placeholder="Search GitHub username..."
        className="w-full bg-violet-950 text-white p-1 border-none outline-none"
      />
      <button className="bg-sky-500 py-1.5 px-2.5 rounded-lg text-white">
        Search
      </button>
    </div>
  );
}

function DevInfoBox({ children }: any) {
  return (
    <div className="mt-8 bg-violet-950 p-10 rounded-lg">
      <UserAvatar className="w-28 h-28 bg-white rounded-full"></UserAvatar>
      <div>
        <div>The Octocat</div>
        <div>Joined 25 Jan 2011</div>
      </div>
      <div>@octocat</div>
      <div>
        <div>
          <div>Repos</div>
          <div>8</div>
        </div>
        <div>
          <div>Followers</div>
          <div>3938</div>
        </div>
        <div>
          <div>Following</div>
          <div>9</div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
