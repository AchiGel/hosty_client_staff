export type TableRequestRowItem = {
  id: string;
  room: {
    number: string;
    type: string;
  };
  request: {
    title: string;
    description: string;
    priority: string;
  };
  timing: {
    submittedAgo: string;
    timeRemaining: string;
  };
  status: string;
  actions: {
    canPause: boolean;
    canComplete: boolean;
    hasMenu: boolean;
  };
};

export const DASHBOARD_TABLE_REQUEST_ROW = [
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

export const MY_TASK_TABLE_REQUEST_ROW = [
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
    status: "Assigned",
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
    status: "Assigned",
    actions: {
      canPause: false,
      canComplete: true,
      hasMenu: true,
    },
  },
];
