import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MainTableRowButtons = ({ status }: { status: string }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-end gap-2">
      {status === "New" ? (
        <>
          <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md h-9 rounded-md px-3 bg-[#c5a667] hover:bg-[#b09358] text-white gap-1">
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
              className="lucide lucide-play h-3 w-3"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            Start
          </button>
          <button
            onClick={() => setModalOpen(!modalOpen)}
            className="cursor-pointer text-gray-400 hover:text-[#c5a667] transition-colors p-1 rounded-full hover:bg-gray-100"
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
              className="lucide lucide-ellipsis-vertical h-5 w-5"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              toast.dismiss();
              toast("Task paused");
            }}
            className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 gap-1"
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
              className="lucide lucide-pause h-3 w-3"
            >
              <rect x="14" y="4" width="4" height="16" rx="1"></rect>
              <rect x="6" y="4" width="4" height="16" rx="1"></rect>
            </svg>
          </button>
          <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md h-9 rounded-md px-3 bg-green-600 hover:bg-green-700 text-white gap-1">
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
              className="lucide lucide-circle-check-big h-3 w-3"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            Complete
          </button>
          <button
            onClick={() => setModalOpen(!modalOpen)}
            className="cursor-pointer text-gray-400 hover:text-[#c5a667] transition-colors p-1 rounded-full hover:bg-gray-100"
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
              className="lucide lucide-ellipsis-vertical h-5 w-5"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </button>
        </>
      )}
      {modalOpen && (
        <div className="absolute top-8 right-0 min-w-2 w-full p-1 bg-white flex flex-col items-start z-50 rounded-md border border-gray-200">
          <button className="px-2 py-1.5 text-sm">View details</button>
          <button className="px-2 py-1.5 text-sm">Add note</button>
          <button className="px-2 py-1.5 text-sm">Report issue</button>
        </div>
      )}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default MainTableRowButtons;
