type InputProps = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input = ({ placeholder, onChange, value = "" }: InputProps) => {
  return (
    <input
      className="w-full px-4 h-12 rounded-lg outline-none border border-black/20 text-sm font-semibold"
      placeholder={placeholder || "Input..."}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
