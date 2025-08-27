import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';

const AdminHomePage = () => {
  const navigate = useNavigate();
  const [managers] = useState([
    {
      id: 1,
      name: 'Võ Minh Đức (QL)',
      revenue: '1.500.000.000đ',
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

  return (
    <div className="min-h-screen bg-[#EBF5FF]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {managers.map((manager) => (
          <div key={manager.id} className="mb-8">
            {/* Manager Card */}
            <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{manager.name}</h3>
                    <p className="text-2xl font-bold text-blue-600">{manager.revenue}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    manager.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1 ${
                      manager.status === 'active' ? 'bg-green-400' : 'bg-red-400'
                    }`}></span>
                    {manager.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>

            {/* Partners List */}
            <div className="bg-gray-50 border-l border-r border-b border-gray-200 rounded-b-lg">
              {manager.partners.map((partner) => (
                <div key={partner.id} className="bg-white mx-4 mb-4 rounded-lg shadow-sm border border-gray-200 p-6 relative">
                  {/* Edit Button */}
                  <button
                    onClick={() => handleEdit(partner.id)}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Chỉnh sửa"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>

                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>

                    {/* Partner Info */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{partner.name}</h4>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          partner.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full mr-1 ${
                            partner.status === 'Active' ? 'bg-green-400' : 'bg-red-400'
                          }`}></span>
                          {partner.status}
                        </span>
                      </div>
                      
                      <p className="text-xl font-bold text-orange-600 mb-1">{partner.revenue}</p>
                      <p className="text-sm text-green-600 mb-3">Hoa hồng: {partner.commission}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span>Mã: {partner.code}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                          </svg>
                          <span>CCCD: {partner.cccd}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHomePage;