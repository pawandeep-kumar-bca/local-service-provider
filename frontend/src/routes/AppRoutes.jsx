import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// User
import UserDashboard from "../pages/user/UserDashboard";
import MyBookingsPage from "../pages/user/MyBookingsPage";
import SavedProviders from "../pages/user/SavedProviders";
import PaymentHistory from "../pages/user/PaymentHistory";
import AllReviews from "../pages/user/AllReviews";
import Support from "../pages/user/Support";
import ProfileSettings from "../pages/user/ProfileSettings";

// Provider
import ProviderDashboard from "../pages/provider/ProviderDashboard";
import UploadDocuments from "../pages/provider/UploadDocuments";
import EarningAnalyticPage from "../pages/provider/EarningAnalytics";
import ServicesPage from "../pages/provider/ServicesPage";
import ProviderProfileSettings from "../pages/provider/Settings";
import AllBookings from "../pages/provider/AllBookings";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboardPage";
import AllUsersList from "../pages/admin/AllUsersList";
import AllBookingsList from "../pages/admin/AllBookingsList";
import AddCategories from "../pages/admin/AddCategories";
import AllPayments from "../pages/admin/AllPayments";
import AllReports from "../pages/admin/AllReports";
import Setting from "../pages/admin/Setting";

const AppRoutes = () => {
  return (
    <Routes>

      {/* 🔥 Common Layout for ALL */}
      <Route element={<MainLayout />}>
 
        {/* User */}
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/my-bookings" element={<MyBookingsPage />} />
        <Route path="/user/saved-providers" element={<SavedProviders />} />
        <Route path="/user/payment-history" element={<PaymentHistory />} />
        <Route path="/user/reviews" element={<AllReviews />} />
        <Route path="/user/support" element={<Support />} />
        <Route path="/user/profile-settings" element={<ProfileSettings />} />

        {/* Provider */}
        <Route path="/provider" element={<ProviderDashboard />} />
        <Route path="/provider/bookings" element={<AllBookings />} />
        <Route path="/provider/earnings" element={<EarningAnalyticPage />} />
        <Route path="/provider/services" element={<ServicesPage />} />
        <Route path="/provider/documents" element={<UploadDocuments />} />
        <Route path="/provider/settings" element={<ProviderProfileSettings />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AllUsersList />} />
        <Route path="/admin/bookings" element={<AllBookingsList />} />
        <Route path="/admin/categories" element={<AddCategories />} />
        <Route path="/admin/payments" element={<AllPayments />} />
        <Route path="/admin/reports" element={<AllReports />} />
        <Route path="/admin/settings" element={<Setting />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;