const MainRequestCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-4">
        <div className="size-12 rounded-lg bg-[#c5a667]/10 flex items-center justify-center text-[#c5a667]">
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
            className="lucide lucide-clipboard-list h-5 w-5"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <path d="M12 11h4"></path>
            <path d="M12 16h4"></path>
            <path d="M8 11h.01"></path>
            <path d="M8 16h.01"></path>
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">New Requests</p>
          <p className="text-2xl font-bold text-gray-900">2</p>
        </div>
      </div>
    </div>
  );
};

export default MainRequestCard;
