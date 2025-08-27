import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'default' | 'large';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type = 'button',
  disabled = false,
  loading = false,
  loadingText = 'Đang xử lý...',
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'font-bold flex flex-row items-center justify-center transition-colors duration-200 rounded-full border-2 border-white';
  
  const variantClasses = {
    primary: 'bg-[#FF9F00] hover:bg-orange-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    outline: 'bg-transparent hover:bg-gray-100 text-gray-700 border-gray-300'
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    default: 'px-7 pt-[9px] pb-[8px] text-base',
    large: 'px-8 py-3 text-lg'
  };
  
  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {loading ? loadingText : children}
    </button>
  );
};

export default CustomButton;