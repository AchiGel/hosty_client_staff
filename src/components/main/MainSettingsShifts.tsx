import MainSettingTitle from "./MainSettingTitle";

const MainSettingsShifts = () => {
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
            className="lucide lucide-calendar h-5 w-5"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
        }
        title={"მინიჭებული ცვლები"}
        description={"თქვენი სამუშაო განრიგი"}
      />
      <div className="p-6 pt-0">
        <div className="flex flex-col items-center justify-center py-8 text-center">
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
            className="lucide lucide-calendar h-12 w-12 text-[#676f7e4d] mb-3"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          <p className="text-[#676f7e]">ჯერ არ გაქვთ მინიჭებული ცვლები</p>
          <p className="text-sm text-[#676f7e] mt-1">
            ცვლებს სუპერვაიზერი მოგანიჭებთ
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSettingsShifts;
