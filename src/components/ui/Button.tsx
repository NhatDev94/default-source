type ButtonProps = {
  name: string;
  onClick?: () => void;
};

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <div
      className="w-full h-12 rounded-lg shadow-lg cursor-pointer flex items-center justify-center select-none text-base font-semibold bg-green-400 hover:bg-green-500"
      onClick={onClick && onClick}
    >
      {name}
    </div>
  );
};

export default Button;
