import React from 'react';
import { Search, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchAndFilterProps {
  onSearch: (value: string) => void;
  onFilter: () => void;
  placeholder?: string;
  className?: string;
}

const SearchAndFilter = ({
  onSearch,
  onFilter,
  placeholder = 'Nhập nội dung tìm kiếm',
  className,
}: SearchAndFilterProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="bg-white h-9 border-[0.76px] border-[#383838] text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 "
          placeholder={placeholder}
          onChange={handleSearch}
        />
      </div>
      <button
        onClick={onFilter}
        className="h-9 text-[#383838] flex items-center justify-center"
      >
        <Filter className="h-4 w-4 text-[#383838]" />
       <p className='text-[8px] mt-2'>Lọc</p>
      </button>
    </div>
  );
};

export default SearchAndFilter;