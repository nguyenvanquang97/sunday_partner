import React, { useState } from "react";
import {
    Edit2,
    ChevronUp,
    User,
    ChevronDown,
    Handshake,
    IdCard,
    Pen,
    PenLineIcon,
    User2,
} from "lucide-react";
import SolarPenIcon from "@/assets/svg/solar-pen.svg";
import UserIcon from "@/assets/svg/user.svg";
import { cn } from "@/lib/utils";
import User2Icon from "@/assets/svg/user-2.svg";
import PenIcon from "../icon/Pen";
const ItemManager = ({
    name = "Võ Minh Đức",
    revenue = "1.500.000.000",
    isManager = true,
    role = "QL",
    onEdit,
    partners,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="rounded-lg shadow-sm overflow-hidden">
            {/* Header section for manager */}
            {isManager && (
                <div
                    className="bg-blue-50 px-2 py-4 rounded-t-lg border-b border-gray-200 cursor-pointer"
                    onClick={toggleOpen}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            {/* Manager icon */}
                            <div
                                style={{}}
                                className="w-8 h-8 rounded-full flex items-center justify-center  bg-gradient-to-r from-[#25CD2566]  to-[#00CC83B2]"
                            >
                                <img src={UserIcon} alt="user" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {name}
                                <span className="font-normal">({role})</span>
                            </h3>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button>
                                <img
                                    src={SolarPenIcon}
                                    alt="pen"
                                    className="w-5 h-5"
                                />
                            </button>
                            {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                        </div>
                    </div>
                </div>
            )}
            {isOpen && (
                <div className=" mx-auto rounded-lg  overflow-hidden">
                    {/* Balance Display */}
                    <div className="p-2 text-center bg-white flex justify-center">
                        <div className="flex text-[26px] font-bold text-gray-900">
                            {revenue}
                            <span className="text-sm font-normal mb-2">đ</span>
                        </div>
                    </div>
                    {partners?.map((partner) => (
                        <ItemPartnerCard
                            key={partner.id}
                            name={partner.name}
                            revenue={partner.revenue}
                            commission={partner.commission}
                            status={partner.status}
                            code={partner.code}
                            cccd={partner.cccd}
                            onEdit={onEdit}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const ItemPartnerCard = ({
    name = "Nguyễn Trần An Nhiên",
    revenue = "600.000.000đ",
    commission = "60.000.000đ",
    status = "Active",
    code = "123456789E",
    cccd = "123456789abc",
    onEdit,
}) => {
    const isActive = status === "Active";

    return (
        <div className="bg-white/60 py-4 px-3 border bg-red-500 border-b-black relative">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#F0A80F]  to-[#FF6A00] rounded-full flex items-center justify-center">
                        <img src={User2Icon} className="w-3 h-3" />
                    </div>
                    <div>
                        <div className="font-bold text-[#383838]">{name}</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span
                        className={cn(
                            "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                            `${isActive ? "text-[#00CC83]" : "text-[#7D7D7D]"}`
                        )}
                    >
                        ● {isActive ? "Active" : "Inactive"}
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                    <Handshake className="w-4 h-4" />
                    <span>Mã: {code}</span>
                </div>
                <div className="flex items-center gap-1">
                    <IdCard className="w-4 h-4" />
                    <span>CCCD: {cccd}</span>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div>
                    <div className="text-[26px] flex font-bold text-orange-600">
                        500.000.000
                        <span className="font-normal text-sm">đ</span>
                    </div>
                    <div className="text-sm flex text-[#383838]">
                        Hoa hồng: 60.000.000
                        <span className="font-normal text-xs">đ</span>
                    </div>
                </div>
            </div>
            <PenIcon className="absolute bottom-2 right-2" />
        </div>
    );
};

// Main component that combines both manager header and manager cards
const ItemManagerList = ({ managerData, onEditManager, onEditItem }) => {
    return (
        <div className="space-y-4">
            {/* Manager header with collapsible content */}
            {managerData?.length &&
                managerData?.map((manager) => (
                    <ItemManager
                        name={manager.name}
                        revenue={manager.revenue}
                        isManager={true}
                        onEdit={() => onEditManager?.(manager)}
                        partners={manager.partners}
                    />
                ))}
        </div>
    );
};

export default ItemManagerList;
export { ItemManager, ItemPartnerCard };
