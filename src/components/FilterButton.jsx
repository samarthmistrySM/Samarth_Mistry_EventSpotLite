const FilterButton = ({ label, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-md ${
        isSelected
          ? "bg-blue-500 text-white"
          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
      }`}
    >
      <span>{label}</span>
    </button>
  );
};
export default FilterButton;
