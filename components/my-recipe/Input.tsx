const Input = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-main-gray">{title}</span>
      <input
        type="text"
        className="w-full rounded p-4 focus:outline-none focus:ring-2 focus:ring-orange"
      />
    </div>
  );
};

export default Input;
