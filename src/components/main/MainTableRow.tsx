type TableRowProps = {
  roomNumber: string;
  roomType: string;
  requestPriority: string;
  requestTitle: string;
  requestDescription: string;
  timeRemaining: string;
  submittedAgo: string;
  status: string;
};

const MainTableRow = ({
  roomNumber,
  roomType,
  requestPriority,
  requestTitle,
  requestDescription,
  timeRemaining,
  submittedAgo,
  status,
}: TableRowProps) => {
  return (
    <tr className="group hover:bg-gray-50 transition-colors">
      <td className="py-4 px-6">
        <div className="font-medium text-gray-900">{roomNumber}</div>
        <div className="text-xs text-gray-500">{roomType}</div>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-start gap-2">
          {requestPriority == "high" && (
            <span className="mt-0.5 size-2 rounded-full bg-red-500 shrink-0"></span>
          )}
          <div>
            <div className="text-sm text-gray-900 font-medium">
              {requestTitle}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">
              {requestDescription}
            </div>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <span className="text-sm font-medium text-orange-600">
          {timeRemaining}
        </span>
      </td>
      <td className="py-4 px-6">
        <span className="text-sm font-medium text-red-600">{submittedAgo}</span>
      </td>
      <td className="py-4 px-6">
        <span
          className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold ${status == "New" || status == "Assigned" ? "text-[#c5a667] bg-[#c5a66733] border-[#c5a66733]" : status == "Completed" ? "text-[#15803d] bg-[#f0fdf4] border-[#bbf7d0]" : "bg-blue-100 text-blue-700 border border-blue-200"}`}
        >
          {status}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center justify-end gap-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 gap-1">
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
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md h-9 rounded-md px-3 bg-green-600 hover:bg-green-700 text-white gap-1">
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
          <button className="text-gray-400 hover:text-[#c5a667] transition-colors p-1 rounded-full hover:bg-gray-100">
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
        </div>
      </td>
    </tr>
  );
};

export default MainTableRow;
