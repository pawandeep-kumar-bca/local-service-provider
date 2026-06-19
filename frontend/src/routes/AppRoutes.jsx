import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import RoleRoute from "./RoleRoute";
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
import EarningAnalyticPage from "../pages/provider/EarningAnalytics";
import ServicesPage from "../pages/provider/ServicesPage";
import ProviderProfileSettings from "../pages/provider/Settings";
import AllBookings from "../pages/provider/AllBookings";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboardPage";
import AllUsersList from "../pages/admin/users/AllUsersList";
import AllBookingsList from "../pages/admin/bookings/AllBookingsList";
import AllCategoriesList from "../pages/admin/categories/AllCategoriesList";
import AllPayments from "../pages/admin/AllPayments";
import AllReports from "../pages/admin/AllReports";
import Setting from "../pages/admin/Setting";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/public/Home";
import Categories from "../pages/public/Categories";
import Profile from "../pages/public/Profile";
import ChangePassword from "../pages/user/ChangePassword";
import UserSetting from "../pages/user/UserSetting";
import ViewAllProviders from "../pages/user/ViewAllProviders";
import PaymentInfo from "../pages/user/PaymentInfo";
import BookingList from "../pages/user/BookingList";
import PaymentList from "../pages/user/PaymentList";
import OurServices from "../pages/user/OurServices";
import ProviderDetail from "../pages/BookingProviders/ProviderDetail";
import BecomeProvider from "../pages/BecomeProviderPages/BecomeProvider";
import BasicInfo from "../pages/BecomeProviderPages/BasicInfo";
import Review from "../pages/BecomeProviderPages/Review";
import Submit from "../pages/BecomeProviderPages/Submit";
import UploadDocuments from "../pages/BecomeProviderPages/UploadDocuments";
import BookingDetail from "../pages/BookingProviders/BookingDetail";
import Payment from "../pages/BookingProviders/Payment";
import SuccessfulPayment from "../pages/BookingProviders/SuccessfulPayment";
import ViewUserBooking from "../pages/BookingProviders/ViewUserBooking";
import RescheduleBooking from "../pages/BookingProviders/RescheduleBooking";
import CategoryList from "../pages/user/CategoryList";
import ProviderCard from "../components/provider/ProviderCard";
import SelectProviders from "../pages/user/SelectProviders";
import AddNewService from "../pages/provider/AddNewService";
import ProviderReviews from "../pages/provider/ProviderReviews";
import ProviderSchedule from "../pages/provider/ProviderSchedule";
import NotificationSettings from "../pages/provider/NotificationSettings";
import ProfileInfoSettings from "../pages/provider/ProfileSettings";
import AllProvidersList from "../pages/admin/providers/AllProvidersList";
import ViewUserProfile from "../pages/admin/users/ViewUserProfile";
import Overview from "../pages/admin/users/Overview";
import BookingHistory from "../pages/admin/users/BookingHistory";
import PaymentUserHistory from "../pages/admin/users/PaymentHistory";
import ActiveLogs from "../pages/admin/users/ActiveLogs";
import BookingDetails from "../pages/admin/bookings/BookingDetails";
import EditUser from "../pages/admin/users/EditUser";
import ViewProviderProfile from "../pages/admin/providers/ViewProviderProfile";
import OverviewProvider from "../pages/admin/providers/OverviewProvider";
import Documents from "../pages/admin/providers/Documents";
import BankDetailsProvider from "../pages/admin/providers/BankDetailsProvider";
import ServiceAndPricingProvider from "../pages/admin/providers/ServiceAndPricingProvider";
import EditProviderProfile from "../pages/admin/providers/EditProviderProfile";
import JobHistoryProvider from "../pages/admin/providers/JobHistoryProvider";
import EarningsAndPayout from "../pages/admin/providers/EarningsAndPayout";
import CategoryDetails from "../pages/admin/categories/CategoryDetails";
import EditCategory from "../pages/admin/categories/EditCategory";
import AddCategory from "../pages/admin/categories/AddCategory";
import AddSubCategory from "../pages/admin/categories/AddSubCategory";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout />} />
      <Route path="/register" element={<AuthLayout />} />

      {/* 🔥 Common Layout for ALL */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route element={<PrivateRoute />}>
          {/* User */}
          <Route element={<RoleRoute allowedRoles={["user"]} />}>
            <Route path="/user" element={<UserDashboard />}>
              <Route index element={<ProviderCard />} />
              <Route path=":category" element={<ProviderCard />} />
              <Route path="all-providers" element={<ViewAllProviders />}>
                <Route path=":category" element={<ProviderCard />} />
              </Route>
            </Route>
            <Route path="/user/my-bookings" element={<MyBookingsPage />}>
              <Route index element={<BookingList />} />
              <Route path=":status" element={<BookingList />} />
            </Route>
            <Route
              path="/user/category/select-provider"
              element={<SelectProviders />}
            />
            <Route path="/user/saved-providers" element={<SavedProviders />} />
            <Route path="/user/payment-history" element={<PaymentHistory />}>
              <Route index element={<PaymentList />} />
              <Route path=":status" element={<PaymentList />} />
              <Route path="payment-info/:id" element={<PaymentInfo />} />
            </Route>
            <Route path="/user/reviews" element={<AllReviews />} />
            <Route path="/user/support" element={<Support />} />
            <Route path="/user/profile-settings" element={<ProfileSettings />}>
              {/* ✅ DEFAULT PAGE */}
              <Route index element={<UserSetting />} />

              {/* OPTIONAL (agar /setting bhi chahiye) */}
              <Route path="setting" element={<UserSetting />} />

              {/* ✅ Change password */}
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
            <Route path="/user/our-services" element={<OurServices />}>
              <Route index element={<CategoryList />} />
              <Route path=":category" element={<CategoryList />} />
            </Route>
            <Route path="/user/provider-details" element={<ProviderDetail />} />

            <Route
              path="/user/provider-details/booking-details"
              element={<BookingDetail />}
            />
            <Route
              path="/user/provider-details/booking-details/payment"
              element={<Payment />}
            />
            <Route
              path="/user/provider-details/booking-details/payment/success-payment"
              element={<SuccessfulPayment />}
            />
            <Route
              path="/user/my-bookings/booking-details"
              element={<ViewUserBooking />}
            />
            <Route
              path="/user/my-bookings/reschedule-booking"
              element={<RescheduleBooking />}
            />
            <Route path="/user/become-provider" element={<BecomeProvider />}>
              <Route path="basic-info" element={<BasicInfo />} />
              <Route path="upload-documents" element={<UploadDocuments />} />
              <Route path="review" element={<Review />} />
              <Route path="submit" element={<Submit />} />
            </Route>
          </Route>

          {/* Provider */}
          <Route element={<RoleRoute allowedRoles={["provider"]} />}>
            <Route path="/provider" element={<ProviderDashboard />} />
            <Route path="/provider/schedule" element={<ProviderSchedule />} />
            <Route path="/provider/bookings" element={<AllBookings />} />
            <Route
              path="/provider/earnings"
              element={<EarningAnalyticPage />}
            />
            <Route path="/provider/my-services" element={<ServicesPage />} />
            <Route
              path="/provider/my-services/add-service"
              element={<AddNewService />}
            />
            <Route path="/provider/reviews" element={<ProviderReviews />} />
            <Route
              path="/provider/settings"
              element={<ProviderProfileSettings />}
            >
              <Route index element={<ProfileInfoSettings />} />
              <Route
                path="notification-settings"
                element={<NotificationSettings />}
              />
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
            <Route
              path="/provider/mobile/edit-profile"
              element={<ProfileInfoSettings />}
            />

            <Route
              path="/provider/mobile/notification-settings"
              element={<NotificationSettings />}
            />

            <Route
              path="/provider/mobile/change-password"
              element={<ChangePassword />}
            />
          </Route>
          {/* Admin */}
          <Route element={<RoleRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AllUsersList />} />
            <Route
              path="/admin/users/view-user-profile"
              element={<ViewUserProfile />}
            >
              <Route index element={<Overview />} />
              <Route path="booking-history" element={<BookingHistory />} />
              <Route path="payment-history" element={<PaymentUserHistory />} />
              <Route path="active-logs" element={<ActiveLogs />} />
            </Route>
             <Route path="/admin/users/booking-history" element={<BookingHistory />} />
              <Route path="/admin/users/payment-history" element={<PaymentUserHistory />} />
              <Route path="/admin/users/active-logs" element={<ActiveLogs />} />
           <Route path="/admin/users/edit-user" element={<EditUser/>}/>
            <Route path="/admin/providers" element={<AllProvidersList />} />
            <Route path="/admin/providers/view-provider-profile" element={<ViewProviderProfile/>}>
            <Route index element={<OverviewProvider/>}/>
            <Route path="documents" element={<Documents/>}/>
            <Route path="bank-details" element={<BankDetailsProvider/>}/>
            <Route path="service-&-pricing" element={<ServiceAndPricingProvider/>}/>
            </Route>
            <Route path="/admin/providers/edit-provider-profile" element={<EditProviderProfile/>}/>
            <Route path="/admin/providers/job-completed" element={<JobHistoryProvider/>}/>
            <Route path="/admin/providers/earings-&-payouts" element={<EarningsAndPayout/>}/>
            <Route path="/admin/bookings" element={<AllBookingsList />} />
            <Route path="/admin/bookings/booking-details" element={<BookingDetails/>}/>
            <Route path="/admin/categories" element={<AllCategoriesList />} />
            <Route path="/admin/categories/category-details" element={<CategoryDetails />} />
            <Route path="/admin/categories/edit-category" element={<EditCategory />} />
            <Route path="/admin/categories/add-category" element={<AddCategory />} />
            <Route path="/admin/categories/add-sub-category" element={<AddSubCategory />} />
            <Route path="/admin/payments" element={<AllPayments />} />
            <Route path="/admin/reports" element={<AllReports />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
