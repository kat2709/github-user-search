import MoonIcon from "./assets/moon.svg";
import SearchIcon from "./assets/search.svg";
import UserAvatar from "./assets/octocat.svg";
import LocationIcon from "./assets/location.svg";
import LinkIcon from "./assets/link.svg";
import TwitterIcon from "./assets/twitter.svg";
import WorkIcon from "./assets/work.svg";

// import SunIcon from "./assets/sun.svg";

export function App() {
  return (
    <main className="w-full max-w-3xl m-auto">
      <Header></Header>
      <SearchBox></SearchBox>
      <DevInfoBox></DevInfoBox>
    </main>
  );
}

function Header({ children }: any) {
  return (
    <header className="p-2.5 h-10 flex items-center justify-between text-white">
      {children}
      <h3>devFinder</h3>
      <div className="flex gap-2.5 justify-center items-center">
        <div>Light</div>
        <MoonIcon className="w-5 h-5" />
      </div>
    </header>
  );
}

function SearchBox({ children }: any) {
  return (
    <div className="p-2.5 rounded-lg bg-blue-950 mt-5 flex gap-2.5 items-center">
      {children}
      <SearchIcon className="text-sky-500 bg-blue-950 w-8 h-8" />
      <input
        placeholder="Search GitHub username..."
        className="w-full bg-blue-950 text-white p-1 border-none outline-none"
      />
      <button className="bg-sky-500 py-1.5 px-2.5 rounded-lg text-white">
        Search
      </button>
    </div>
  );
}

function DevInfoBox({ children }: any) {
  return (
    <div className="flex gap-5 mt-8 bg-blue-950 p-10 rounded-lg">
      {children}
      <UserAvatar className="w-28 h-28 bg-white rounded-full"></UserAvatar>
      <div className="grow">
        <div className="flex items-center justify-between">
          <h1>The Octocat</h1>
          <p>Joined 25 Jan 2011</p>
        </div>
        <p className="text-sky-400 text-sm">@octocat</p>
        <p className="mt-6">This profile has no bio</p>
        <div className="flex justify-between mt-6 bg-[#09133c] py-5 px-10 rounded-2xl">
          <div>
            <p>Repos</p>
            <h2 className="text-base">8</h2>
          </div>
          <div>
            <p>Followers</p>
            <h2 className="text-base">3938</h2>
          </div>
          <div>
            <p>Following</p>
            <h2 className="text-base">9</h2>
          </div>
        </div>
        <div className="flex flex-wrap mt-8 gap-4">
          <div className="flex w-full max-w-64 gap-3">
            <LocationIcon className="w-5 h-5"></LocationIcon>
            <p>San Francisco</p>
          </div>
          <div className="flex w-full max-w-64 gap-3">
            <LinkIcon className="w-5 h-5"></LinkIcon>
            <p>https://github.blog</p>
          </div>
          <div className="flex w-full max-w-64 gap-3">
            <TwitterIcon className="w-5 h-5"></TwitterIcon>
            <p>Not Aviable</p>
          </div>
          <div className="flex w-full max-w-64 gap-3">
            <WorkIcon className="w-5 h-5"></WorkIcon>
            <p>@github</p>
          </div>
        </div>
      </div>
    </div>
  );
}
