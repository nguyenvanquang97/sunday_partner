import React from "react";
import { useNavigate } from "react-router-dom";
import loginBackground from "@/assets/images/loginBackground.png";
import StarIcon from "@/assets/svg/star.svg";
import StarIcon2 from "@/assets/svg/star-2.svg";
import EllipseIcon from "@/assets/svg/ellipse.svg";
import GroupIcon from "@/assets/svg/group-icon-login.svg";
import HappyFace from "@/assets/images/happyFace.png";
import CustomButton from "@/components/ui/CustomButton";

const ChangePasswordSuccessPage = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${loginBackground})` }}
            />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
                {/* Success Modal */}
                <div className="w-full max-w-sm flex flex-col items-center 0">
                    {/* Success Card */}
                    <div className="bg-white min-w-[327px] bg-opacity-50 backdrop-blur-sm border border-white rounded-xl py-6 text-center shadow-lg">
                        {/* Decorative Elements */}
                        <div className="relative mb-6">
                            {/* Main Success Icon/Image */}
                            <img
                                src={HappyFace}
                                alt="Happy face"
                                className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center"
                            />

                            {/* Decorative Stars */}
                            <div className="absolute top-0 left-8">
                                <img
                                    src={StarIcon}
                                    alt="Star"
                                    className="w-5 h-5"
                                />
                            </div>

                            <div className="absolute top-2 right-6">
                                <img
                                    src={StarIcon2}
                                    alt="Star2"
                                    className="w-4 h-4"
                                />
                            </div>

                            <div className="absolute bottom-2 right-4">
                                <img
                                    src={EllipseIcon}
                                    alt="Ellipse"
                                    className="w-4 h-4"
                                />
                            </div>

                            {/* Decorative Path */}
                            <div className="absolute bottom-0 left-10">
                                <img
                                    src={GroupIcon}
                                    alt="Group"
                                    className="w-8 h-6"
                                />
                            </div>
                        </div>

                        {/* Success Message */}
                        <h2 className="text-sm font-normal text-black">
                            Bạn đã đổi mật khẩu thành công
                        </h2>
                    </div>

                    {/* Action Button */}
                    <CustomButton
                        onClick={handleBackToHome}
                        className="mt-7 "
                    >
                        Quay lại trang chủ
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordSuccessPage;
