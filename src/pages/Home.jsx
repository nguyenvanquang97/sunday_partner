import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/ui/CustomButton';

function Home() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');

  // Giả định role - trong thực tế sẽ lấy từ authentication/API
  const mockRoles = [
    { value: 'admin', label: 'Admin', description: 'Quản trị viên hệ thống' },
    { value: 'manager', label: 'Manager', description: 'Quản lý đối tác' },
    { value: 'partner', label: 'Partner', description: 'Đối tác kinh doanh' }
  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleNavigateToHome = () => {
    if (!selectedRole) {
      alert('Vui lòng chọn role!');
      return;
    }

    // Chuyển hướng đến màn home tương ứng với role
    switch (selectedRole) {
      case 'admin':
        navigate('/admin-home');
        break;
      case 'manager':
        navigate('/manager-home');
        break;
      case 'partner':
        navigate('/partner-home');
        break;
      default:
        alert('Role không hợp lệ!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Chọn Role
          </h1>
          <p className="text-gray-600">
            Vui lòng chọn role để truy cập vào hệ thống
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {mockRoles.map((role) => (
            <div
              key={role.value}
              onClick={() => handleRoleSelect(role.value)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                selectedRole === role.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  selectedRole === role.value
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {selectedRole === role.value && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{role.label}</h3>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CustomButton
          onClick={handleNavigateToHome}
          className="w-full"
          disabled={!selectedRole}
        >
          Truy cập hệ thống
        </CustomButton>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Đây là demo với role giả định. Trong thực tế, role sẽ được xác định từ hệ thống xác thực.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;