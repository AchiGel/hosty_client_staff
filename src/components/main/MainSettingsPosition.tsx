import { POSITIONS_INFO } from "../../constants/positionsInfo";
import MainSettingTitle from "./MainSettingTitle";

const MainSettingsPosition = () => {
  return (
    <div className="rounded-lg border border-[#dcdfe5] bg-white text-[#0f1729] shadow-sm">
      <MainSettingTitle
        icon={
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
            className="lucide lucide-building2 h-5 w-5"
          >
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
            <path d="M10 6h4"></path>
            <path d="M10 10h4"></path>
            <path d="M10 14h4"></path>
            <path d="M10 18h4"></path>
          </svg>
        }
        title={"პოზიცია"}
        description={"თქვენი პოზიცია ორგანიზაციაში"}
      />
      <div className="p-6 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSITIONS_INFO.map((pi) => (
            <div
              key={pi.id}
              className="flex items-center gap-3 p-4 bg-[#e8eaee80] rounded-lg"
            >
              {pi.icon}
              <div>
                <p className="text-sm text-[#676f7e]">{pi.title}</p>
                <p className="font-medium">{pi.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSettingsPosition;
