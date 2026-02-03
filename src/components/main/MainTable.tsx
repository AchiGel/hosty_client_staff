import MainTableFooter from "./MainTableFooter";
import MainTableRow from "./MainTableRow";

const MainTable = () => {
  const TABLE_HEADER = [
    { id: 1, label: "Room" },
    { id: 2, label: "Request Details" },
    { id: 3, label: "Time" },
    { id: 4, label: "SLA" },
    { id: 5, label: "Status" },
    { id: 6, label: "Action" },
  ];

  const TABLE_REQUEST_ROW = [
    {
      id: "req_001",
      room: {
        number: "304",
        type: "Deluxe",
      },
      request: {
        title: "Extra towels",
        description: "Guest requested 2 sets of towels.",
        priority: "high", // indicated by red dot (bg-red-500)
      },
      timing: {
        submittedAgo: "10m ago",
        timeRemaining: "15m",
      },
      status: "In Progress",
      actions: {
        canPause: true,
        canComplete: true,
        hasMenu: true,
      },
    },
    {
      id: "req_002",
      room: {
        number: "512",
        type: "Suite",
      },
      request: {
        title: "Room service",
        description: "Breakfast order for 2 - Continental style.",
        priority: "medium",
      },
      timing: {
        submittedAgo: "5m ago",
        timeRemaining: "25m",
      },
      status: "New",
      actions: {
        canPause: false,
        canComplete: true,
        hasMenu: true,
      },
    },
    {
      id: "req_003",
      room: {
        number: "208",
        type: "Standard",
      },
      request: {
        title: "Maintenance",
        description: "AC not cooling properly.",
        priority: "high",
      },
      timing: {
        submittedAgo: "22m ago",
        timeRemaining: "8m",
      },
      status: "In Progress",
      actions: {
        canPause: true,
        canComplete: true,
        hasMenu: true,
      },
    },
    {
      id: "req_004",
      room: {
        number: "415",
        type: "Deluxe",
      },
      request: {
        title: "Pillow request",
        description: "Guest needs hypoallergenic pillows.",
        priority: "low",
      },
      timing: {
        submittedAgo: "35m ago",
        timeRemaining: "0m",
      },
      status: "Completed",
      actions: {
        canPause: false,
        canComplete: false,
        hasMenu: true,
      },
    },
    {
      id: "req_005",
      room: {
        number: "601",
        type: "Presidential Suite",
      },
      request: {
        title: "Turndown service",
        description: "Evening turndown requested for 8 PM.",
        priority: "medium",
      },
      timing: {
        submittedAgo: "2m ago",
        timeRemaining: "58m",
      },
      status: "New",
      actions: {
        canPause: false,
        canComplete: true,
        hasMenu: true,
      },
    },
    {
      id: "req_006",
      room: {
        number: "319",
        type: "Standard",
      },
      request: {
        title: "Extra blankets",
        description: "Guest requested 1 extra blanket.",
        priority: "low",
      },
      timing: {
        submittedAgo: "18m ago",
        timeRemaining: "12m",
      },
      status: "In Progress",
      actions: {
        canPause: true,
        canComplete: true,
        hasMenu: true,
      },
    },
    {
      id: "req_007",
      room: {
        number: "725",
        type: "Suite",
      },
      request: {
        title: "Late checkout",
        description: "Guest requesting checkout extension until 2 PM.",
        priority: "medium",
      },
      timing: {
        submittedAgo: "1m ago",
        timeRemaining: "29m",
      },
      status: "New",
      actions: {
        canPause: false,
        canComplete: true,
        hasMenu: true,
      },
    },
    {
      id: "req_008",
      room: {
        number: "102",
        type: "Standard",
      },
      request: {
        title: "Housekeeping",
        description: "Full room cleaning requested.",
        priority: "high",
      },
      timing: {
        submittedAgo: "45m ago",
        timeRemaining: "5m",
      },
      status: "Completed",
      actions: {
        canPause: false,
        canComplete: false,
        hasMenu: true,
      },
    },
    {
      id: "req_009",
      room: {
        number: "527",
        type: "Deluxe",
      },
      request: {
        title: "Ice delivery",
        description: "Guest needs ice bucket refilled.",
        priority: "low",
      },
      timing: {
        submittedAgo: "3m ago",
        timeRemaining: "27m",
      },
      status: "New",
      actions: {
        canPause: false,
        canComplete: true,
        hasMenu: true,
      },
    },
    {
      id: "req_010",
      room: {
        number: "412",
        type: "Suite",
      },
      request: {
        title: "Mini bar restock",
        description: "Complete minibar restock needed.",
        priority: "medium",
      },
      timing: {
        submittedAgo: "1h ago",
        timeRemaining: "0m",
      },
      status: "Completed",
      actions: {
        canPause: false,
        canComplete: false,
        hasMenu: true,
      },
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              {TABLE_HEADER.map((th) => (
                <th
                  className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 w-24 last:text-end"
                  key={th.id}
                >
                  {th.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {TABLE_REQUEST_ROW.map((trr) => (
              <MainTableRow
                key={trr.id}
                roomNumber={trr.room.number}
                roomType={trr.room.type}
                requestPriority={trr.request.priority}
                requestTitle={trr.request.title}
                requestDescription={trr.request.description}
                timeRemaining={trr.timing.timeRemaining}
                submittedAgo={trr.timing.submittedAgo}
                status={trr.status}
              />
            ))}
          </tbody>
        </table>
      </div>
      <MainTableFooter />
    </div>
  );
};

export default MainTable;
