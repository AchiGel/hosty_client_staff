import MainSettingPrivateInfo from "../components/main/MainSettingPrivateInfo";
import MainSettingsPassword from "../components/main/MainSettingsPassword";
import MainSettingsPosition from "../components/main/MainSettingsPosition";
import MainSettingsShifts from "../components/main/MainSettingsShifts";
import MainTitle from "../components/main/MainTitle";

const Settings = () => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8">
      <MainTitle
        department={"არ არის მითითებული"}
        page={"პარამეტრები"}
        title={"პროფილი და პარამეტრები"}
        description={"მართეთ თქვენი პირადი ინფორმაცია"}
      />
      <MainSettingPrivateInfo />
      <MainSettingsPosition />
      <MainSettingsShifts />
      <MainSettingsPassword />
    </div>
  );
};

export default Settings;
