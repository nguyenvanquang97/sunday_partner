import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@/assets/css/datepicker.css';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronDown } from 'lucide-react';

const FilterDialog = ({ open, onOpenChange, onApplyFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState('all');
  const [revenue, setRevenue] = useState('all');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showRevenueDropdown, setShowRevenueDropdown] = useState(false);

  const handleApply = () => {
        onApplyFilter({
            dateRange: { startDate, endDate },
            status,
            revenue,
        });
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[349px] p-0" hideCloseButton>
                <DialogHeader className="bg-[#F7931E] p-4 rounded-t-lg">
                    <DialogTitle className="text-white text-lg font-bold text-center">
                        Lọc kết quả
                    </DialogTitle>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="absolute right-4 top-4 text-white"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1L13 13"
                                stroke="white"
                                strokeWidth="2"
                            />
                            <path
                                d="M13 1L1 13"
                                stroke="white"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>
                </DialogHeader>

                <div className="px-4  pb-4 ">
                    {/* Date Range */}
                    <div className="flex gap-2 border-b border-[#C4C4C4] py-3">
                        <div className="flex-1 flex gap-2 items-center">
                            <span className="text-sm">Từ</span>
                            <div className="relative">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    placeholderText="15/11/2024"
                                    className=" border rounded-full px-4 py-2 !text-[12px]"
                                    dateFormat="dd/MM/yyyy"
                                />
                                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex-1 flex gap-2 items-center">
                            <span className="text-sm">Đến</span>
                            <div className="relative">
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    placeholderText="26/07/2025"
                                    className="w-full border rounded-full px-4 py-2 !text-[12px]"
                                    dateFormat="dd/MM/yyyy"
                                />
                                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                    
         
                    
                    {/* Status Filter */}
                    <div className="space-y-2 border-b border-[#C4C4C4] py-3">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowStatusDropdown(!showStatusDropdown)}>
                            <h4 className="font-medium text-base">Trạng thái hoạt động đối tác</h4>
                            <ChevronDown className={`h-5 w-5 transition-transform ${showStatusDropdown ? 'rotate-180' : ''}`} />
                        </div>
                        {showStatusDropdown && (
                            <div className="pt-2 space-y-2">
                              <div className='flex items-center justify-between'>
                                <label htmlFor='status-all'>Tất cả</label>
                                <input type='radio' id='status-all' name='status' value='all' checked={status === 'all'} onChange={() => setStatus('all')} />
                              </div>
                              <div className='flex items-center justify-between'>
                                <label htmlFor='status-active'>Đang hoạt động</label>
                                <input type='radio' id='status-active' name='status' value='active' checked={status === 'active'} onChange={() => setStatus('active')} />
                              </div>
                              <div className='flex items-center justify-between'>
                                <label htmlFor='status-inactive'>Ngừng hoạt động</label>
                                <input type='radio' id='status-inactive' name='status' value='inactive' checked={status === 'inactive'} onChange={() => setStatus('inactive')} />
                              </div>
                            </div>
                        )}
                    </div>
                    
        
                    
                    {/* Revenue Filter */}
                    <div className="space-y-2 py-3">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowRevenueDropdown(!showRevenueDropdown)}>
                            <h4 className="font-medium text-base">Doanh thu</h4>
                            <ChevronDown className={`h-5 w-5 transition-transform ${showRevenueDropdown ? 'rotate-180' : ''}`} />
                        </div>
                        {showRevenueDropdown && (
                            <div className="pt-2 space-y-2">
                               <div className='flex items-center justify-between'>
                                <label htmlFor='revenue-all'>Tất cả</label>
                                <input type='radio' id='revenue-all' name='revenue' value='all' checked={revenue === 'all'} onChange={() => setRevenue('all')} />
                              </div>
                              <div className='flex items-center justify-between'>
                                <label htmlFor='revenue-ascending'>Tăng dần</label>
                                <input type='radio' id='revenue-ascending' name='revenue' value='ascending' checked={revenue === 'ascending'} onChange={() => setRevenue('ascending')} />
                              </div>
                              <div className='flex items-center justify-between'>
                                <label htmlFor='revenue-descending'>Giảm dần</label>
                                <input type='radio' id='revenue-descending' name='revenue' value='descending' checked={revenue === 'descending'} onChange={() => setRevenue('descending')} />
                              </div>
                            </div>
                        )}
                    </div>
                </div>

                <DialogFooter className="flex flex-row justify-center space-x-4 p-6">
                    <Button
                        variant="outline"
                        className="px-10 py-3 rounded-full border-gray-400"
                        onClick={() => onOpenChange(false)}
                    >
                        Hủy
                    </Button>
                    <Button
                        onClick={handleApply}
                        className="bg-[#F7931E] hover:bg-orange-500 px-8 py-3 rounded-full text-white"
                    >
                        Áp dụng
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default FilterDialog;
