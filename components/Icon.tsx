interface IconProps {
  name: string;
  size: number;
  font: string;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

const Icon = ({ name, size, font }: IconProps) => {
  return (
    <div
      className={`flex justify-center items-center text-${font} font-smeibold text-white size-${size} rounded-md bg-gradient-to-tr from-green-700 to-blue-800 `}
    >
      {getInitials(name)}
    </div>
  );
};

export default Icon;
