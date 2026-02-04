import MainFilterButton from "../components/main/MainFilterButton";
import MainRequestCard from "../components/main/MainRequestCard";
import MainTable from "../components/main/MainTable";
import MainTitle from "../components/main/MainTitle";
import { FILTER_BUTTONS } from "../constants/filterButtons";
import { MY_TASKS_REQUESTS } from "../constants/requests";
import { MY_TASKS_TABLE_HEADER } from "../constants/tableHeader";
import { MY_TASK_TABLE_REQUEST_ROW } from "../constants/tableRequest";

const MyTasks = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <MainTitle
        department={"Housekeeping Department"}
        page={"My Tasks"}
        title={"My Tasks"}
        description={"All tasks assigned to me"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {MY_TASKS_REQUESTS.map((r) => (
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
        tableData={MY_TASKS_TABLE_HEADER}
        tableRowData={MY_TASK_TABLE_REQUEST_ROW}
      />
    </div>
  );
};

export default MyTasks;
