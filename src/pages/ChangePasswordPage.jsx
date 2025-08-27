import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import loginBackground from "@/assets/images/loginBackground.png";
import CustomButton from "@/components/ui/CustomButton";

const ChangePasswordPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.oldPassword) {
            newErrors.oldPassword = "Vui lòng nhập mật khẩu cũ";
        }

        if (!formData.newPassword) {
            newErrors.newPassword = "Vui lòng nhập mật khẩu mới";
        } else if (formData.newPassword.length < 6) {
            newErrors.newPassword = "Mật khẩu mới phải tối thiểu 6 ký tự";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Vui lòng nhập lại mật khẩu mới";
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = "Mật khẩu không khớp";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Navigate to success page
            navigate("/change-password-success");
        } catch (error) {
            console.error("Error changing password:", error);
            setErrors({ general: "Có lỗi xảy ra. Vui lòng thử lại." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${loginBackground})` }}
            />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Header */}
             <div className="w-full max-w-lg mb-8 absolute top-2 left-2">
                    <div className="flex items-center">
                        <button
                            onClick={handleBack}
                            className="w-8 h-8 flex items-center justify-center bg-black bg-opacity-50 rounded-full mr-3"
                        >
                            <ArrowLeftOutlined className="text-white" style={{ fontSize: '20px' }} />
                        </button>
                        <h1 className="text-lg font-bold text-gray-800">
                            Quên mật khẩu
                        </h1>
                    </div>
                </div>

                {/* Form Container */}
                <div className="flex-1 flex items-center justify-center px-6">
                    <div className="w-full max-w-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Old Password Input */}
                            <div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="oldPassword"
                                        value={formData.oldPassword}
                                        onChange={handleInputChange}
                                        placeholder="Nhập mật khẩu cũ"
                                        className={`w-full px-6 py-3 bg-white border rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                                            errors.oldPassword
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        }`}
                                    />
                                </div>
                                {errors.oldPassword && (
                                    <p className="text-black text-xs mt-1 ml-4">
                                        {errors.oldPassword}
                                    </p>
                                )}
                            </div>

                            {/* New Password Input */}
                            <div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleInputChange}
                                        placeholder="Nhập mật khẩu mới"
                                        className={`w-full px-6 py-3 bg-white border rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                                            errors.newPassword
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        }`}
                                    />
                                </div>
                                {errors.newPassword && (
                                    <p className="text-black text-xs mt-1 ml-4">
                                        {errors.newPassword}
                                    </p>
                                )}
                            </div>

                            {/* Confirm Password Input */}
                            <div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Nhập lại mật khẩu mới"
                                        className={`w-full px-6 py-3 bg-white border rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                                            errors.confirmPassword
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        }`}
                                    />
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-black text-xs mt-1 ml-4">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            {/* General Error */}
                            {errors.general && (
                                <div className="text-black text-sm text-center">
                                    {errors.general}
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <CustomButton
                                    type="submit"
                                    loading={isLoading}
                                    loadingText="Đang xử lý..."
                                    className="mt-6 self-center"
                                >
                                    Đổi mật khẩu
                                </CustomButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPage;
