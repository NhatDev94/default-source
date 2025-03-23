type InputProps = {
  placeholder?: string;
};

const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      className="w-full px-4 h-12 rounded-lg outline-none border border-black/20 text-sm font-semibold"
      placeholder={placeholder || "Input..."}
    />
  );
};

export default Input;
