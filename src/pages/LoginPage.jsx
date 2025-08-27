import React, { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import StarIcon from '@/assets/svg/star.svg';
import EllipseIcon from '@/assets/svg/ellipse.svg';
import GroupIcon from '@/assets/svg/group-icon-login.svg';
import BackGroundLogin from '@/assets/images/loginBackground.png';
import Logo from '@/assets/images/logo.png';
import CustomButton from '@/components/ui/CustomButton';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div style={{backgroundImage: `url(${BackGroundLogin})`,    backgroundSize: "cover",}} className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-300 to-yellow-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10">
        <img src={StarIcon} alt="star" className="w-6 h-6 opacity-80" />
      </div>
      <div className="absolute top-28 left-6">
        <img src={StarIcon} alt="star" className="w-7 h-7 opacity-80" />
      </div>
      <div className="absolute bottom-48 left-10">
        <img src={EllipseIcon} alt="ellipse" className="w-3 h-3 opacity-80" />
      </div>
      <div className="absolute bottom-40 right-20">
        <img src={GroupIcon} alt="group icon" className="w-10 h-6 opacity-60" />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-8">
        {/* Logo */}
        <img className="mb-12 sm:mb-16" src={Logo} alt="logo" />



        {/* Login Form */}
        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 flex flex-col">
            {/* Email Input */}
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-md px-3 sm:px-4 py-3 bg-white">
                <UserOutlined className="text-gray-500 mr-2 sm:mr-3 flex-shrink-0" style={{ fontSize: '16px' }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập Email"
                  className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 min-w-0"
                  required
                />
                <EyeOutlined className="text-gray-400 flex-shrink-0" style={{ fontSize: '16px' }} />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-md px-3 sm:px-4 py-3 bg-white">
                <LockOutlined className="text-gray-500 mr-2 sm:mr-3 flex-shrink-0" style={{ fontSize: '16px' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu"
                  className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 min-w-0"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 p-1"
                >
                  {showPassword ? (
                    <EyeInvisibleOutlined style={{ fontSize: '16px' }} />
                  ) : (
                    <EyeOutlined style={{ fontSize: '16px' }} />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <CustomButton
              type="submit"
              className="min-w-[140px] h-[38px] mt-6 self-center"
            >
              Đăng nhập
            </CustomButton>

            {/* Forgot Password Link */}
            <div className="text-center mt-4 sm:mt-6">
              <a
                href="/forgot-password"
                className="text-gray-600 text-sm hover:text-gray-800 transition-colors"
              >
                Bạn quên mật khẩu?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;