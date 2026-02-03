import { Outlet } from "react-router-dom";
import Aside from "./components/aside/Aside";

const App = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f3f3f3]">
      <Aside />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <nav></nav>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
