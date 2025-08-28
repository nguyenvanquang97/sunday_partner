import { Outlet } from "react-router-dom";
import LoginBackground from "@/assets/images/loginBackground.png";
import Header from "./Header";

export function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />
            {/* Main Content */}
            <main
                style={{
                    backgroundImage: `url(${LoginBackground})`,
                    backgroundSize: "cover",
                }}
                className="flex-1"
            >
                <Outlet />
            </main>
        </div>
    );
}
