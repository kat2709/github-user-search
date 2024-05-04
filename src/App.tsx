import MoonIcon from "./assets/moon.svg";
// import SunIcon from "./assets/sun.svg";

export function App() {
  return (
    <>
      <Header></Header>
    </>
  );
}

function Header({ children }: any) {
  return (
    <header className="w-full max-w-screen-lg h-10 flex items-center justify-between m-auto text-white uppercase">
      {children}
      <div className="">User Name</div>
      <div className="w-28 flex gap-2.5 justify-center items-center">
        <div>Light</div>
        <MoonIcon className="w-5 h-5 flex" />
      </div>
    </header>
  );
}

// export function App() {
//   return (
//     <>
//       <h1>Hello world!</h1>
//       <Button>Hi Wo</Button>
//       <Button2>Hi Wo</Button2>
//     </>
//   );
// }

// function Button({ children }: any) {
//   return (
//     <button className="p-2 rounded bg-blue-500 hover:bg-blue-600 transition">
//       {children}
//     </button>
//   );
// }
// function Button2({ children }: any) {
//   return (
//     <button className="p-2 rounded bg-red-500 hover:bg-red-600 transition">
//       {children}
//     </button>
//   );
// }
