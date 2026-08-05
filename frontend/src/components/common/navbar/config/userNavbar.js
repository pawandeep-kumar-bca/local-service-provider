// ===============================
//This is called Configuration Driven UI
// ===============================

// ===============================
// Base Navbar Layouts
// ===============================

// ===============================
// This is called Shared Base Configuration

//const dashboardNavbar = {}

//const bookingNavbar = {}

//const detailsNavbar = {}
/*{
   ...bookingNavbar
}*/
// ===============================

const dashboardNavbar = {
  left: [
    {
      component: "profile",
      showOn: ["mobile"],
    },
    {
      component: "title",
      
    },
  ],

  center: [

    {
      component: "search",
      placeholder: "Search services or providers...",
    },
  ],

  right: [
    {
      component: "location",
      showOn: ["desktop"],
    },
    {
      component: "notification",
      showOn: ["desktop"],
    },
    {
      component: "profile",
      showOn: ["desktop"],
    },
    {
      component: "menu",
      showOn: ["mobile"],
    },
  ],
};

const serviceNavbar = {
  left: [{ component: "back" }, { component: "title" }],

  center: [
    {
      component: "search",
      placeholder: "Search providers...",
    },
  ],

  right: [
    { component: "filter" },
    { component: "sort" },
    { component: "profile" },
  ],
};

const detailsNavbar = {
  left: [{ component: "back" }, { component: "title" }],

  center: [],

  right: [{ component: "profile" }],
};

const bookingNavbar = {
  left: [{ component: "back" }, { component: "title" }],

  center: [
    {
      component: "stepper",
      totalSteps: 3,
      currentStep: 1,
    },
  ],

  right: [{ component: "help" }, { component: "profile" }],
};

// ===============================
// Navbar Config
// ===============================

// ==========================
// USER NAVBAR CONFIG
// ==========================

export const userNavbarConfig = [
  // ==========================
  // Booking Flow
  // ==========================

  {
    ...bookingNavbar,
    matcher: (path) => path.includes("/success-payment"),
    title: "Payment Successfull",
    center: [
      {
        component: "stepper",
        totalSteps: 3,
        currentStep: 3,
      },
    ],
  },

  {
    ...bookingNavbar,
    matcher: (path) =>
      path.endsWith("/payment") && !path.includes("/success-payment"),
    title: "Payment",
    center: [
      {
        component: "stepper",
        totalSteps: 3,
        currentStep: 2,
      },
    ],
  },

  {
    ...bookingNavbar,
    matcher: (path) =>
      path.includes("/provider-details") && path.includes("/booking-details"),
    title: "Booking Details",
    center: [
      {
        component: "stepper",
        totalSteps: 3,
        currentStep: 1,
      },
    ],
  },

  // ==========================
  // My Bookings
  // ==========================

  {
    ...detailsNavbar,
    matcher: (path) => path.includes("/reschedule-booking"),
    title: "Reschedule Booking",
  },

  {
    ...detailsNavbar,
    matcher: (path) =>
      path.includes("/my-bookings/") && path.includes("/booking-details"),
    title: "Booking Details",
  },

  {
    ...detailsNavbar,
    matcher: (path) => path.startsWith("/user/my-bookings"),
    title: "My Bookings",
  },

  // ==========================
  // Payment History
  // ==========================

  {
    ...detailsNavbar,
    matcher: (path) => path.includes("/payment-info"),
    title: "Payment Details",
  },

  {
    ...detailsNavbar,
    matcher: (path) => path.startsWith("/user/payment-history"),
    title: "Payment History",
  },

  // ==========================
  // Profile Settings
  // ==========================

  {
    ...detailsNavbar,
    matcher: (path) => path.includes("/change-password"),
    title: "Change Password",
  },

  {
    ...detailsNavbar,
    matcher: (path) => path.startsWith("/user/profile-settings"),
    title: "Profile Settings",
  },

  // ==========================
  // Become Provider
  // ==========================

  {
    ...detailsNavbar,
    matcher: (path) => path.includes("/basic-info"),
    title: "Basic Information",
  },

  {
    ...detailsNavbar,
    matcher: (path) => path.includes("/upload-documents"),
    title: "Upload Documents",
  },

  {
    ...detailsNavbar,
    matcher: (path) =>
      path.startsWith("/user/become-provider") && path.endsWith("/review"),
    title: "Review",
  },

  {
    ...detailsNavbar,
    matcher: (path) => path.includes("/submit"),
    title: "Submit",
  },

  {
    ...detailsNavbar,
    matcher: (path) => path === "/user/become-provider",
    title: "Become Provider",
  },

  // ==========================
  // Services
  // ==========================

  {
    ...serviceNavbar,
    matcher: (path) => path.includes("/select-provider"),
    title: "Select Provider",
  },

  {
    ...detailsNavbar,
    matcher: (path) => path.includes("/provider-details"),
    title: "Provider Details",
  },

  {
    ...serviceNavbar,
    matcher: (path) => path.startsWith("/user/our-services"),
    title: "Our Services",

    center: [
      {
        component: "search",
        placeholder: "Search Services...",
      },
    ],
  },

  // ==========================
  // Dashboard
  // ==========================

  {
    ...detailsNavbar,
    matcher: (path) => path.startsWith("/user/dashboard/all-providers"),
    title: "All Providers",
  },

  {
    ...dashboardNavbar,
    matcher: (path) => path.startsWith("/user/dashboard"),
    title: "Dashboard",
  },

  // ==========================
  // Other Pages
  // ==========================

  {
    ...detailsNavbar,
    matcher: (path) => path.startsWith("/user/reviews"),
    title: "Reviews",
  },

  {
    ...detailsNavbar,
    matcher: (path) => path.startsWith("/user/support"),
    title: "Support",
  },
];
