import MainFilterButton from "../components/main/MainFilterButton";
import MainRequestCard from "../components/main/MainRequestCard";
import MainTable from "../components/main/MainTable";
import MainTitle from "../components/main/MainTitle";

const Home = () => {
  const REQUESTS = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const FILTER_BUTTONS = [
    {
      id: 1,
      title: "Status",
      label: "All",
      icon: (
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
          className="lucide lucide-chevron-down h-4.5 w-4.5 text-gray-400"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Priority",
      label: "All",
      icon: (
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
          className="lucide lucide-chevron-down h-4.5 w-4.5 text-gray-400"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <MainTitle />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {REQUESTS.map((r) => (
          <MainRequestCard key={r.id} />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 py-2 overflow-x-auto">
        {FILTER_BUTTONS.map((b) => (
          <MainFilterButton
            key={b.id}
            title={b.title}
            label={b.label}
            icon={b.icon}
          />
        ))}
      </div>
      <MainTable />
    </div>
  );
};

export default Home;
