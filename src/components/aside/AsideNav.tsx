import { Link } from "react-router-dom";

const AsideNav = () => {
  return (
    <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
      <Link
        to={"/"}
        className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group text-gray-500 hover:bg-gray-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-layout-dashboard w-5.5 h-5.5 transition-colors group-hover:text-[#c5a667]"
        >
          <rect width="7" height="9" x="3" y="3" rx="1"></rect>
          <rect width="7" height="5" x="14" y="3" rx="1"></rect>
          <rect width="7" height="9" x="14" y="12" rx="1"></rect>
          <rect width="7" height="5" x="3" y="16" rx="1"></rect>
        </svg>
        <span className="text-sm font-medium">Dashboard</span>
      </Link>
      <Link
        to={"/my-tasks"}
        className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group bg-[#c5a667]/10 text-[#c5a667]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clipboard-list w-5.5 h-5.5 transition-colors text-[#c5a667]"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <path d="M12 11h4"></path>
          <path d="M12 16h4"></path>
          <path d="M8 11h.01"></path>
          <path d="M8 16h.01"></path>
        </svg>
        <span className="text-sm font-semibold">My Tasks</span>
        <span className="ml-auto bg-[#c5a667] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
          5
        </span>
      </Link>
    </nav>
  );
};

export default AsideNav;
