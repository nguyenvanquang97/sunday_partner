import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { PlusCircleOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xử lý đăng xuất và chuyển hướng về trang đăng nhập
    navigate('/login');
  };

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between h-[54px] px-4 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Sunday English Logo" className="h-[30px]" />
        </div>

        {/* Tiêu đề */}
        <div className="absolute left-1/2 transform -translate-x-1/2 font-bold text-[14px] text-[#383838]">
          Thống kê doanh thu
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          {/* Add Icon */}
          <button className="w-7 h-7 flex items-center justify-center">
            <PlusCircleOutlined style={{ fontSize: '24px', color: '#383838' }} />
          </button>

          {/* Lock Icon */}
          <button className="w-8 h-8 flex items-center justify-center">
            <LockOutlined style={{ fontSize: '24px', color: '#383838' }} />
          </button>

          {/* Logout Icon */}
          <button onClick={handleLogout} className="w-7 h-7 flex items-center justify-center">
            <LogoutOutlined style={{ fontSize: '24px', color: '#383838' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;