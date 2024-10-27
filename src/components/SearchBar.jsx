import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 pl-10 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
      <Search
        size={18}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300"
      />
    </div>
  );
};
export default SearchBar;
