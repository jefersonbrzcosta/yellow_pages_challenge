interface Props {
  title: string;
  onChangeFun: () => void;
}

const Toggle = ({ title, onChangeFun }: Props) => (
  <div className="absolute top-5">
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="toggle"
          type="checkbox"
          className="sr-only"
          onChange={() => onChangeFun()}
        />
        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
      </div>

      <div className="ml-3 text-gray-700 font-medium">{title}</div>
    </label>
  </div>
);

export default Toggle;
