import MainDashboardBlur from "../components/main/MainDashboardBlur";
import MainFilterButton from "../components/main/MainFilterButton";
import MainRequestCard from "../components/main/MainRequestCard";
import MainTable from "../components/main/MainTable";
import MainTitle from "../components/main/MainTitle";
import { FILTER_BUTTONS } from "../constants/filterButtons";
import { DASHBOARD_REQUESTS } from "../constants/requests";
import { DASHBOARD_TABLE_HEADER } from "../constants/tableHeader";
import { DASHBOARD_TABLE_REQUEST_ROW } from "../constants/tableRequest";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <MainTitle
        department={"Housekeeping Department"}
        page={"Requests"}
        title={"My Department"}
        description={"Only housekeeping department requests"}
      />
      <div className="relative">
        <MainDashboardBlur />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DASHBOARD_REQUESTS.map((r) => (
            <MainRequestCard
              key={r.id}
              icon={r.icon}
              title={r.title}
              quantity={r.quantity}
              id={r.id}
            />
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
        <MainTable
          tableData={DASHBOARD_TABLE_HEADER}
          tableRowData={DASHBOARD_TABLE_REQUEST_ROW}
        />
      </div>
    </div>
  );
};

export default Home;
