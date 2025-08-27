import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ClockCircleOutlined } from '@ant-design/icons';
import BackGroundLogin from '@/assets/images/loginBackground.png';
import CustomButton from '@/components/ui/CustomButton';

const ResendLinkPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  
  const [countdown, setCountdown] = useState(20);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleBackToForm = () => {
    navigate('/forgot-password');
  };

  const handleResendLink = () => {
    if (canResend) {
      // Simulate API call to resend link
      setCountdown(20);
      setCanResend(false);
      // Here you would make actual API call
      console.log('Resending link to:', email);
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${BackGroundLogin})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Main content - No header */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 relative z-10">
        <div className="w-full max-w-lg">
          <div className="space-y-6 flex flex-col">
            {/* Success Message */}
            <div className="text-center mb-6">
              <p className="text-sm text-white leading-relaxed">
                Link lấy lại mật khẩu đã được gửi về mail của bạn, vui lòng truy cập {email} để lấy lại mật khẩu
              </p>
            </div>

            {/* Countdown Timer */}
            {!canResend && (
              <div className="flex items-center justify-center space-x-2 mb-4">
                <ClockCircleOutlined className="text-white" style={{ fontSize: '20px' }} />
                <span className="text-sm text-white">
                  Gửi lại sau {countdown}s
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4 justify-center">
              <CustomButton
                onClick={handleBackToForm}
                className="min-w-[140px] h-[38px]"
              >
                Quay lại
              </CustomButton>
              <CustomButton
                onClick={handleResendLink}
                disabled={!canResend}
                variant={canResend ? 'primary' : 'secondary'}
                className="min-w-[140px] h-[38px]"
              >
                Gửi lại link
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResendLinkPage;