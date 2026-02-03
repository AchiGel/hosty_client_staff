import type { JSX } from "react";

const MainFilterButton = ({
  title,
  label,
  icon,
}: {
  title: string;
  label: string;
  icon: JSX.Element;
}) => {
  return (
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 gap-2 text-gray-500 hover:text-gray-900 hover:bg-white">
      {title}: <span className="font-medium text-gray-900">{label}</span>
      {icon}
    </button>
  );
};

export default MainFilterButton;
