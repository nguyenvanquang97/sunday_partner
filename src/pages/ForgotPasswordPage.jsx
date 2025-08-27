import React, { useState } from "react";
import { ArrowLeftOutlined, MailOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import BackGroundLogin from "@/assets/images/loginBackground.png";
import CustomButton from "@/components/ui/CustomButton";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [currentState, setCurrentState] = useState("form"); // 'form', 'error'
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log("Forgot password request for:", email);

        // Simulate email validation - for demo purposes
        // In real app, this would be an API call
        const emailExists = email.includes("@gmail.com"); // Simple demo logic

        if (emailExists) {
            // Navigate to ResendLinkPage with email data
            navigate("/resend-link", { state: { email } });
        } else {
            setCurrentState("error");
        }
    };

    const closeErrorPopup = () => {
        setCurrentState("form");
    };

    const handleBack = () => {
        navigate("/login");
    };

    return (
        <div
            style={{
                backgroundImage: `url(${BackGroundLogin})`,
                backgroundSize: "cover",
            }}
            className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-300 to-yellow-100 relative overflow-hidden"
        >
            {/* Main content */}
            <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-8">
                {/* Header with back button */}
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

                {/* Form State */}
                {currentState === "form" && (
                    <div className="w-full max-w-lg">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 flex flex-col"
                        >
                            {/* Description Text */}
                            <div className="text-center">
                                <p className="text-sm text-black leading-relaxed">
                                    Vui lòng nhập email xác thực tài khoản{" "}
                                    <br /> để nhận link lấy lại mật khẩu
                                </p>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 bg-white">
                                    <MailOutlined className="text-gray-400 mr-3 flex-shrink-0 opacity-50" style={{ fontSize: '20px' }} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Nhập email xác thực tài khoản"
                                        className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 placeholder-opacity-50 min-w-0"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Send Link Button */}
                            <CustomButton
                                type="submit"
                                className="min-w-[140px] h-[38px] mt-6 self-center"
                            >
                                Gửi link
                            </CustomButton>
                        </form>
                    </div>
                )}
            </div>

            {/* Error Popup */}
            {currentState === "error" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl min-h-[328px] p-6 mx-4 max-w-sm w-full relative shadow-lg flex justify-center items-center">
                        {/* Close Button */}
                        <button
                            onClick={closeErrorPopup}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center hover:bg-orange-600 transition-colors"
                        >
                            <CloseOutlined className="text-white" style={{ fontSize: '20px' }} />
                        </button>

                        {/* Error Message */}
                        <p className="text-sm text-black font-medium">
                            Email không tồn tại
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPasswordPage;
