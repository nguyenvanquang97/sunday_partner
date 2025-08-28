import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAndFilter from '@/components/ui/SearchAndFilter';
import ItemManagerList from '@/components/home/ItemManager';
import FilterDialog from '@/components/home/FilterDialog';

const AdminHomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const [managers] = useState([
    {
      id: 1,
      name: 'Võ Minh Đức',
      revenue: '1.500.000.000',
      status: 'active',
      partners: [
        {
          id: 1,
          name: 'Nguyễn Trần An Nhiên',
          revenue: '600.000.000đ',
          commission: '60.000.000đ',
          status: 'Active',
          code: '123456789E',
          cccd: '123456789abc'
        },
        {
          id: 2,
          name: 'Nguyễn Trần Khánh Vy',
          revenue: '500.000.000đ',
          commission: '60.000.000đ',
          status: 'Inactive',
          code: '123456789E',
          cccd: '123456789abc'
        }
      ]
    }
  ]);

  const handleEdit = (id) => {
    // Logic chỉnh sửa
    console.log('Chỉnh sửa:', id);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    // Logic tìm kiếm
    console.log('Tìm kiếm:', value);
  };

  const handleFilter = () => {
    // Mở dialog lọc
    setIsFilterDialogOpen(true);
  };

  const handleApplyFilter = (filterData) => {
    // Logic lọc với dữ liệu từ dialog
    console.log('Áp dụng bộ lọc:', filterData);
    // Thực hiện lọc dữ liệu ở đây
  };

  return (
    <div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-6">
          <SearchAndFilter 
            onSearch={handleSearch} 
            onFilter={handleFilter} 
          />
        </div>
        <ItemManagerList
          managerData={managers}
          onEditManager={handleEdit}
          onEditItem={handleEdit}
        />

        {/* Filter Dialog */}
        <FilterDialog 
          open={isFilterDialogOpen} 
          onOpenChange={setIsFilterDialogOpen} 
          onApplyFilter={handleApplyFilter} 
        />
      </div>
    </div>
  );
};

export default AdminHomePage;