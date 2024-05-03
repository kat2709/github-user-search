export function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <Button>Hi Wo</Button>
      <Button2>Hi Wo</Button2>
    </>
  );
}

function Button({ children }: any) {
  return (
    <button className="p-2 rounded bg-blue-500 hover:bg-blue-600 transition">
      {children}
    </button>
  );
}
function Button2({ children }: any) {
  return (
    <button className="p-2 rounded bg-red-500 hover:bg-red-600 transition">
      {children}
    </button>
  );
}
