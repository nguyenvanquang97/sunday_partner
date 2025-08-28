import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Products from "@/pages/Products";
import LoginPage from "@/pages/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import ResendLinkPage from "@/pages/ResendLinkPage";
import ChangePasswordPage from "@/pages/ChangePasswordPage";
import ChangePasswordSuccessPage from "@/pages/ChangePasswordSuccessPage";
import AdminHomePage from "@/pages/AdminHomePage";
import ManagerHomePage from "@/pages/ManagerHomePage";
import PartnerHomePage from "@/pages/PartnerHomePage";
import AddPartnerPage from "@/pages/AddPartnerPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                />
                <Route path="/resend-link" element={<ResendLinkPage />} />
                <Route
                    path="/change-password"
                    element={<ChangePasswordPage />}
                />
                <Route
                    path="/change-password-success"
                    element={<ChangePasswordSuccessPage />}
                />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/admin-home" element={<AdminHomePage />} />
                    <Route path="/manager-home" element={<ManagerHomePage />} />
                    <Route path="/partner-home" element={<PartnerHomePage />} />
                    <Route path="/add-partner" element={<AddPartnerPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
