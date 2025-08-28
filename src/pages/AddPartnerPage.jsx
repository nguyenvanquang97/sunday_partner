import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ChevronLeft, CreditCard, Mail, Phone } from "lucide-react";
import BackIcon from "@/assets/svg/back-icon.svg";

const AddPartnerPage = () => {
    return (
        <div className="p-8 container mx-auto">
            <div className="flex items-center gap-2">
                <Link
                    to="/partner-home"
                    className="flex items-center text-transparent rounded-full p-1"
                >
                    <img
                        src={BackIcon}
                        alt="back"
                        className="w-[27px] h-[27px]"
                    />
                </Link>
                <h1 className="text-base text-[#383838] font-bold">
                    Thông tin đối tác
                </h1>
            </div>

            <Select>
                <SelectTrigger className="!bg-[#FF6A00] text-white rounded-lg">
                    <SelectValue className="" placeholder="Chọn quản lý" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectItem value="manager1">Manager 1</SelectItem>
                    <SelectItem value="manager2">Manager 2</SelectItem>
                </SelectContent>
            </Select>
            <div className="bg-white/60">
                <div className="bg-orange-50 p-6 rounded-lg max-w-md mx-auto">
                    <div className="flex items-start gap-4">
                        {/* Orange circular icon */}
                        <div className="bg-orange-400 rounded-full p-4 flex-shrink-0">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                            </div>
                        </div>

                        {/* Form content */}
                        <div className="flex-1">
                            <h2 className="text-gray-700 font-medium mb-4">
                                Nhập tên đội tác
                            </h2>

                            <div className="space-y-3">
                                {/* Email input */}
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Mail className="w-4 h-4" />
                                    <span className="text-sm">Nhập email</span>
                                </div>

                                {/* CCCD input */}
                                <div className="flex items-center gap-2 text-gray-600">
                                    <CreditCard className="w-4 h-4" />
                                    <span className="text-sm">
                                        Nhập số CCCD
                                    </span>
                                </div>

                                {/* Phone input */}
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm">
                                        Nhập số điện thoại
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Ngân hàng
                        </label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Chọn ngân hàng" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="bank1">Bank 1</SelectItem>
                                <SelectItem value="bank2">Bank 2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            STK
                        </label>
                        <Input placeholder="Nhập số tài khoản" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tiktok
                        </label>
                        <Input placeholder="Nhập link/id tiktok" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Facebook
                        </label>
                        <Input placeholder="Nhập link/id facebook" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Cấp độ
                        </label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Chọn cấp độ" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="level1">Level 1</SelectItem>
                                <SelectItem value="level2">Level 2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Trạng thái
                        </label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Active" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">
                                    Inactive
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-8 space-x-4">
                <Button variant="outline">Hủy</Button>
                <Button>Lưu</Button>
            </div>
        </div>
    );
};

export default AddPartnerPage;
