import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchField: React.FC<SearchInputProps> = ({ placeholder = '플레이스홀더', onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (onSearch) onSearch(newQuery);
  };
  return (
    <div className="relative flex items-center">
      <span className="absolute text-gray-500 left-3">
        <IoSearch color="#6B7684" size={24} />
      </span>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full py-[8px] pl-[42px] pr-[22px] border border-Gray100 bg-Gray100 rounded-[10px] focus:outline-none text-regular-body font-medium caret-BloomingGreen500"
      />
    </div>
  );
};

export default SearchField;
