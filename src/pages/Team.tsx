import MainTeamMembersCard from "../components/main/MainTeamMembersCard";
import MainTitle from "../components/main/MainTitle";
import { TEAM_MEMBERS } from "../constants/teamMembers";

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <MainTitle
        department={"Housekeeping Department"}
        page={"გუნდი"}
        title={"ჩემი გუნდი"}
        description={"თქვენი დეპარტამენტის თანამშრომლები"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((tm) => (
          <MainTeamMembersCard
            key={tm.id}
            avatar={tm.avatar}
            name={tm.name}
            lastName={tm.lastName}
            isOnShift={tm.isOnShift}
            shifts={tm.shifts}
            position={tm.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
